import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Header from '@layouts/header'
import Carousel from './carousel'
import FlexBox from '@layouts/flex-box'
import Notes from './notes'
import Information from './information'
import Review from '@components/review'
import PerfumesItem from '@pages/perfumes/perfumes-item'

import {Box, Button, Pagination, Typography} from '@mui/material'

const dummydata = Array.from({length: 15}, (_, index) => index + 1)

const PerfumeDetail = () => {
  // 마지막 페이지
  const LAST_PAGE =
    dummydata.length % 6 === 0
      ? parseInt((dummydata.length / 6) as any)
      : parseInt((dummydata.length / 6) as any) + 1

  const [page, setPage] = useState(1) // 처음 페이지는 1
  const [reviewData, setReviewData] = useState<string[]>([])
  const [perfumes, setPerfumes] = useState<string[]>([])

  console.log(reviewData)

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText)
    setPage(nowPageInt)
  }

  useEffect(() => {
    // 한 페이지에 6개씩 보여줍니다.
    if (page === LAST_PAGE) {
      setReviewData(dummydata.slice(6 * (page - 1)) as any)
    } else {
      setReviewData(dummydata.slice(6 * (page - 1), 6 * (page - 1) + 6) as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // 임시
  useEffect(() => {
    setPerfumes(dummydata.slice(0, 4) as any)
  }, [])

  return (
    <>
      <Header />
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: '85px',
          padding: '0 160px',
        }}
      >
        <FlexBox justifyContent="space-between">
          <LeftBox>
            <Carousel />
          </LeftBox>

          <RightBox>
            {/* 향수 타입 */}
            <PerfumeType>
              플로럴 <span>#달달한 #우아한 #꽃</span>
            </PerfumeType>

            {/* 향수 이름 */}
            <PerfumeName>CHANEL 샹스 오 드 빠르펭</PerfumeName>

            <Description>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{color: '#A9A9A9'}}
              >
                향수 스토리
              </Typography>

              {/* 향수 설명 */}
              <Typography>
                예측할 수 없이, 반짝이는 로맨틱한 향. 당신의 샹스의 회오리로
                녹아듭니다. 샹스 오 드 빠르펭은 쟈끄 뽈쥬에 의해 창조되었으며,
                오 드 뚜와렛과 마찬가지로, 경이로운 천체처럼 '예상치 못한
                플로랄' 향입니다. 예측할 수 없는 향기의 천체는 계속해서
                새로워지며 놀라움을 줍니다.
              </Typography>
            </Description>

            {/* 향수 용량 */}
            {/* 임시 */}
            <Typography
              sx={{marginTop: '12px', width: '100%', display: 'flex'}}
            >
              100mL
              <span style={{padding: '12px 15px', cursor: 'pointer'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M10.59 0.59L6 5.17L1.41 0.589999L5.24537e-07 2L6 8L12 2L10.59 0.59Z"
                    fill="#505050"
                  />
                </svg>
              </span>
              255,000원
            </Typography>

            <BuyButton>향수 구매 사이트로 이동하기</BuyButton>

            <Notes />
            <Information />
          </RightBox>
        </FlexBox>

        {/* 향수 리뷰 */}
        <Box sx={{marginTop: '200px'}}>
          <Review hasNavigation={false} />

          <Footer>
            <Pagination
              count={LAST_PAGE}
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
          {perfumes.length > 0 &&
            perfumes?.map(item => <PerfumesItem item={item} key={item} />)}
        </ProductList>
      </Box>
    </>
  )
}

const LeftBox = styled.div({
  paddingRight: '78px',
})

const RightBox = styled.div({
  paddingLeft: '90px',
  borderLeft: '1px solid #EDEDED',
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
  fontSize: '26px',
  fontWeight: '600',
  lineHeight: ' 150%',
  letterSpacing: '0.52px',
})

const Description = styled.div({
  marginTop: '12px',
  width: '648px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: ' 170%',
})

const BuyButton = styled(Button)({
  width: '100%',
  marginTop: '24px',
  marginBottom: '44px',
  padding: '15px 0',
  borderRadius: '10px',
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

const ProductList = styled.ul({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '32px',
  marginBottom: '316px',
})

const Footer = styled.footer({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '53px',
  marginBottom: '22px',
})

export default PerfumeDetail
