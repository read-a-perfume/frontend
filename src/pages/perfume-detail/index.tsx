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

const dummydata = [
  {
    id: '0',
    user: {
      name: '정중식',
      url: 'data:image/webp;base64,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',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },

  {
    id: '1',
    user: {
      name: '김향기',
      url: '',
    },
    image: ['/images/perfume-detail/review-preview01.jpg'],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '2',
    user: {
      name: '박향수',
      url: 'data:image/jpeg;base64,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',
    },
    image: ['/images/perfume-detail/review-preview01.jpg'],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '3',
    user: {
      name: '최퍼퓸',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '4',
    user: {
      name: '김샤넬',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '5',
    user: {
      name: '박샤넬',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '6',
    user: {
      name: '최샤넬',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '7',
    user: {
      name: '샤넬',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '8',
    user: {
      name: '아이디',
      url: '',
    },
    image: [
      '/images/perfume-detail/review-preview01.jpg',
      '/images/perfume-detail/review-preview02.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview03.jpg',
      '/images/perfume-detail/review-preview01.jpg',
    ],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '9',
    user: {
      name: '닉네임',
      url: '',
    },
    image: ['/images/perfume-detail/review-preview01.jpg'],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
  {
    id: '10',
    user: {
      name: '그냥이름',
      url: '',
    },
    image: ['/images/perfume-detail/review-preview01.jpg'],
    content:
      '이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을 감추고 있습니다.',
    tags: ['#플로랄, #플로랄, #고급짐'],
    likeLength: '172',
    commentsLength: '40',
  },
]

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

  // 임시
  useEffect(() => {
    setPerfumes(dummydata.slice(0, 4) as any)
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
