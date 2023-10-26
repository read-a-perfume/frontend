import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {Box, Typography} from '@mui/material'

import FlexBox from '@layouts/flex-box'
import Header from '@layouts/header'
import Category from './category'
import Pagination from '@mui/material/Pagination'

import brandDummyData from './dummyData'
import img1 from './images/Rectangle7370.png'
import PerfumesItem from './perfumes-item'

const dummydata = Array.from({length: 30}, (_, index) => index + 1)

const Perfumes = () => {
  // 마지막 페이지
  const LAST_PAGE =
    dummydata.length % 12 === 0
      ? parseInt((dummydata.length / 12) as any)
      : parseInt((dummydata.length / 12) as any) + 1

  const [page, setPage] = useState(1) // 처음 페이지는 1
  const [perfumes, setPerfumes] = useState([])

  useEffect(() => {
    // 한 페이지에 12개씩 보여줍니다.
    if (page === LAST_PAGE) {
      setPerfumes(dummydata.slice(12 * (page - 1)) as any)
    } else {
      setPerfumes(dummydata.slice(12 * (page - 1), 12 * (page - 1) + 12) as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText)
    setPage(nowPageInt)
  }
  return (
    <>
      <Header />
      <Wrapper>
        <FlexBox
          justifyContent="space-around"
          gap=""
          style={{marginTop: '120px'}}
        >
          {/* 브랜드 추천 메인 이미지 */}
          <Box sx={{position: 'relative'}}>
            <img src={img1} alt="main-img-1" />
            <Box sx={{position: 'absolute', bottom: '20px', left: '20px'}}>
              <BrandTitle>
                낭만적인
                <br />
                휴양지의 향기
              </BrandTitle>
              <BrandSubTitle>
                훌쩍 떠나고 싶은 한여름,
                <br />
                나를 휴양지로 데려가줄 향수들
              </BrandSubTitle>
            </Box>
          </Box>

          {/* 브랜드 추천 목록 */}
          {brandDummyData &&
            brandDummyData?.map(data => (
              <FlexBox
                direction="column"
                justifyContent="space-between"
                gap=""
                style={{width: '236px'}}
                key={data.id}
              >
                <img src={data.url} alt="perfumesImg" />

                <FlexBox direction="column">
                  <BrandName>{data.brandName}</BrandName>
                  <PerfumeName>{data.perfumeName}</PerfumeName>
                  <br />

                  <Description
                    dangerouslySetInnerHTML={{__html: data.description}}
                  ></Description>
                </FlexBox>
              </FlexBox>
            ))}
        </FlexBox>

        {/* 카테고리 */}
        <Category />

        {/* 제품 리스트 */}
        <ProductList>
          {perfumes.length > 0 &&
            perfumes?.map(item => <PerfumesItem item={item} key={item} />)}
        </ProductList>

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
                backgroundColor: '#D9D9D9',
              },
            }}
            hidePrevButton
            hideNextButton
            onChange={e => handlePage(e)}
          />
        </Footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled(Box)({
  maxWidth: '1600px',
  margin: '0 auto',
})

const BrandTitle = styled(Typography)({
  // fontFamily: 'Arita-buri(OTF)',
  fontSize: '36px',
  fontWeight: '700',
  lineHeight: '43px',
  textAlign: 'left',
  color: '#FFFFFF',
  // 임시로 해놓음,
  // 폰트설정하면 지울 예정
  marginBottom: '15px',
})

const BrandSubTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#FFFFFF',
})

const BrandName = styled(Typography)({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16.71px',
})

const PerfumeName = styled(Typography)({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '18px',
})

const Description = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#707070',
  lineHeight: '16.71px',
  // wordBreak: 'keep-all',

  // color:{theme.palette.grey['500']}
}))

const ProductList = styled.ul({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '32px',
})

const Footer = styled.footer({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '190px',
  marginBottom: '430px',
})

export default Perfumes
