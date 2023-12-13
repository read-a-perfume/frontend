import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useQueries} from '@tanstack/react-query'
import {
  fetchPerfume,
  fetchPerfumeGraph,
  fetchPerfumeReviewData,
} from 'src/store/server/perfume-datail/queries'

import Carousel from './carousel'
import FlexBox from '@layouts/flex-box'
import Notes from './notes'
import Information from './information'
import DetailReviewList from './review'
import PerfumesItem from '@pages/perfumes/perfumes-item'
import {
  Box,
  Button,
  Pagination,
  Skeleton,
  Stack,
  Typography,
  styled,
} from '@mui/material'

const isLoadingData = Array.from({length: 4}, (_, index) => index + 1)

const PerfumeDetail = () => {
  const params = useParams()

  const [page, setPage] = useState(1) // 처음 페이지는 1
  const [perfumes, setPerfumes] = useState<string[]>([])

  const results = useQueries({
    queries: [
      {
        queryKey: ['post', 1],
        queryFn: () => fetchPerfume(params.id as string),
      },
      {
        queryKey: ['post', 2],
        queryFn: () => fetchPerfumeGraph(params.id as string),
      },
      {
        queryKey: ['post', 3],
        queryFn: () => fetchPerfumeReviewData(params.id as string),
      },
    ],
  })
  const {isLoading, error, data} = results[0]
  const {isLoading: graphLoading, data: graphData} = results[1]
  const {isLoading: reviewLoading, data: reviewData} = results[2]

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText)
    setPage(nowPageInt)
  }

  console.log('error!:', error)

  useEffect(() => {
    // 임시데이터
    const arrayData = Array.from({length: 4}, (_, index) => index + 1)
    setPerfumes(arrayData as any)
  }, [])
  return (
    <Container>
      <FlexBox>
        <LeftBox>
          <Carousel isLoading={isLoading} />
        </LeftBox>

        <CenterLine />

        <RightBox>
          {/*향수 카테고리 및 향수 타입 */}
          {isLoading ? (
            <FlexBox gap="11px">
              <Skeleton width="28px" height="16px">
                <Typography variant="caption">.</Typography>
              </Skeleton>
              <Skeleton width="88px" height="16px">
                <Typography variant="caption">.</Typography>
              </Skeleton>
            </FlexBox>
          ) : (
            <PerfumeType>
              {data?.categoryName} <span>{data?.categoryTags}</span>
            </PerfumeType>
          )}

          {/* 향수 브랜드 및 향수 이름 */}
          {isLoading ? (
            <Skeleton width="213px" height="29px">
              <Typography variant="caption">.</Typography>
            </Skeleton>
          ) : (
            <PerfumeName>
              [{data?.brandName}] {data?.name}
            </PerfumeName>
          )}

          <Description>
            <Typography
              variant="subtitle1"
              sx={{color: '#A9A9A9', fontSize: '10.5px'}}
            >
              향수 스토리
            </Typography>

            {/* 향수 설명 */}
            {isLoading ? (
              <Skeleton width="486px" height="20px">
                <Typography variant="caption">.</Typography>
              </Skeleton>
            ) : (
              <Typography
                sx={{fontSize: '12px', fontWeight: '400', lineHeight: '20.4px'}}
              >
                {data?.story}
              </Typography>
            )}
          </Description>

          <Link to={data?.perfumeShopUrl} target="_blank">
            <BuyButton>향수 구매 사이트로 이동하기</BuyButton>
          </Link>

          {/* 향수 노트 */}
          <Notes
            topNotes={data?.topNotes}
            middleNotes={data?.middleNotes}
            baseNotes={data?.baseNotes}
            isLoading={isLoading}
          />

          {/* 향수 정보 */}
          <Information graphData={graphData} isLoading={graphLoading} />
        </RightBox>
      </FlexBox>

      {/* 향수 리뷰 */}
      <Box sx={{marginTop: '200px'}}>
        <DetailReviewList reviewData={reviewData} isLoading={reviewLoading} />

        <Footer>
          <Pagination
            count={reviewData?.totalPages}
            page={page}
            defaultPage={1}
            boundaryCount={2}
            color="standard"
            size="large"
            variant="outlined"
            shape="rounded"
            sx={{
              margin: 2,
              '& .MuiPaginationItem-root': {
                backgroundColor: '#F1F1F5',
              },
              '& .Mui-selected': {
                backgroundColor: '#FE7156 !important',
                color: '#fff',
              },
            }}
            hidePrevButton
            hideNextButton
            onChange={e => handlePage(e)}
          />
        </Footer>
      </Box>

      {/* 비슷한 향수 리스트 */}
      <ProductListTitle>비슷한 향수</ProductListTitle>

      <ProductList>
        {isLoading ? (
          <>
            {isLoadingData.map((_, index) => (
              <Stack spacing={3} key={index}>
                <Skeleton
                  sx={{bgcolor: 'grey.200'}}
                  variant="rounded"
                  width={282}
                  height={319}
                  key={index}
                />

                <Skeleton variant="rounded" width={282} height={34.5} />
              </Stack>
            ))}
          </>
        ) : (
          <ProductList>
            {perfumes.length > 0 &&
              perfumes?.map((item, index) => (
                <PerfumesItem item={item as any} key={item + index} />
              ))}
          </ProductList>
        )}
      </ProductList>
    </Container>
  )
}

const Container = styled(Box)({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  marginTop: '89px',
})

const LeftBox = styled(Box)({width: '100%'})

const CenterLine = styled(Box)({
  width: '0.75px',
  background: '#EDEDED',
  marginLeft: '58.5px',
  marginRight: '67.5px',
})

const RightBox = styled(Box)({
  width: '100%',
  maxWidth: '486px',
})

const PerfumeType = styled(Typography)({
  fontSize: '10.5px',
  '& span': {
    marginLeft: '15px',
    color: '#FE7156',
  },
})

const PerfumeName = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: '19.5px',
  fontWeight: '600',
  lineHeight: ' 150%',
  letterSpacing: '0.39px',
})

const Description = styled('div')({
  marginTop: '9.25px',
  width: '486px',
  fontWeight: '400',
  lineHeight: ' 170%',
})

const BuyButton = styled(Button)({
  width: '486px',
  height: '36px',
  marginTop: '89.25px',
  marginBottom: '33px',
  borderRadius: '7.5px',
  color: 'white',
  backgroundColor: '#202020',

  '&:hover': {
    color: 'white',
    backgroundColor: '#7d7a7a',
  },
})

const ProductListTitle = styled(Typography)({
  marginTop: '66px',
  marginBottom: '32px',
  fontWeight: '700',
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: '26px',
  color: '#191919',
})

const ProductList = styled('ul')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '32px',
  marginBottom: '316px',
  padding: '0',
})

const Footer = styled('footer')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '53px',
  marginBottom: '22px',
})

export default PerfumeDetail
