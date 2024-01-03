import {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useQueries} from '@tanstack/react-query'
import {
  fetchPerfume,
  fetchPerfumeGraph,
  fetchPerfumeReviewData,
} from 'src/store/server/perfumes/queries'
import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'

import Carousel from './carousel'
import FlexBox from '@layouts/flex-box'
import Notes from './notes'
import Information from './information'
import PerfumeReviewList from './review'
import {
  Box,
  Button,
  Pagination,
  Skeleton,
  Typography,
  styled,
} from '@mui/material'

const PerfumeDetail = () => {
  const params = useParams()

  const [page, setPage] = useState(1)
  const [sort, setSort] = useState<'RECENT' | 'LIKE'>('RECENT')

  const results = useQueries({
    queries: [
      {
        queryKey: [perfumeQueryKeys.perfumeDetail(Number(params.id))],
        queryFn: () => fetchPerfume(params.id as string),
      },
      {
        queryKey: [perfumeQueryKeys.perfumesStatistics(Number(params.id))],
        queryFn: () => fetchPerfumeGraph(params.id as string),
      },
      {
        queryKey: [
          perfumeQueryKeys.perfumesReviews(Number(params.id), page, 6, [sort]),
        ],
        queryFn: () => fetchPerfumeReviewData(params.id as string, page, sort),
      },
    ],
  })
  const {isLoading, error, data} = results[0]
  const {isLoading: graphLoading, data: graphData} = results[1]
  const {isLoading: reviewLoading, data: reviewData} = results[2]

  const handleChangeSort = tab => {
    setSort(tab)
    setPage(1)
  }

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText)
    setPage(nowPageInt)
  }

  console.log('error!:', error)

  return (
    <Container>
      <FlexBox justifyContent="space-between">
        <LeftBox>
          <Carousel isLoading={isLoading} images={data?.images} />
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
                sx={{fontSize: '14px', fontWeight: '400', lineHeight: '23.8px'}}
              >
                {data?.story}
              </Typography>
            )}
          </Description>

          <Link to={data?.perfumeShopUrl} target="_blank">
            <BuyButton>향수 구매 사이트로 이동하기</BuyButton>
          </Link>

          <PerfumeInformation>
            <TextWrap>
              <Type>강도</Type>
              {data?.strength}
            </TextWrap>

            <div className="vertical-line" />

            <TextWrap>
              <Type>지속력</Type>
              {data?.duration}
            </TextWrap>
          </PerfumeInformation>

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
      <Box sx={{marginTop: '71px'}}>
        <PerfumeReviewList
          reviewData={reviewData}
          isLoading={reviewLoading}
          sort={sort}
          handleChangeSort={handleChangeSort}
        />

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
    </Container>
  )
}

const Container = styled(Box)({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  marginTop: '89px',
})

const LeftBox = styled(Box)({width: '496px'})

const CenterLine = styled(Box)({
  width: '0.75px',
  background: '#EDEDED',
})

const RightBox = styled(Box)({
  width: '100%',
  maxWidth: '486px',
})

const PerfumeType = styled(Typography)({
  fontSize: '14px',
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

const PerfumeInformation = styled('div')({
  width: '100%',
  height: '46px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '7.5px',
  backgroundColor: '#F1F1F1',
  fontWeight: '500',
  color: '#333333',
  marginTop: '15px',
  marginBottom: '42px',
  padding: '0 32px',

  '& .vertical-line': {
    borderLeft: '1px solid #BDBDBD',
    margin: '6px 21px 6px 16.25px',
    width: '0.75px',
    height: '22.5px',
  },
})

const TextWrap = styled('p')({
  width: '100%',
  color: '#191919',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  letterSpacing: '0.21px',
  whiteSpace: 'nowrap',
})

const Type = styled('span')({
  color: '#A9A9A9',
  marginRight: '53px',
})

const BuyButton = styled(Button)({
  width: '486px',
  height: '46px',
  marginTop: '15px',
  borderRadius: '7.5px',
  color: 'white',
  backgroundColor: '#202020',
  fontSize: '12px',

  '&:hover': {
    color: 'white',
    backgroundColor: '#7d7a7a',
  },
})

const Footer = styled('footer')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '53px',
  marginBottom: '22px',
})

export default PerfumeDetail
