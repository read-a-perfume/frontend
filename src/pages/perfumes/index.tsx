import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {Box, Typography} from '@mui/material'
import FlexBox from '@layouts/flex-box'
import Category from '@components/category'
import Pagination from '@mui/material/Pagination'

import brandDummyData from './dummyData'
import PerfumesItem from './perfumes-item'

import instance from '@api/instance'
import {useQuery} from '@tanstack/react-query'
import {useSearchParams} from 'react-router-dom'

const dummydata = Array.from({length: 30}, (_, index) => index + 1)

// 카테고리별 향수 조회
const getPerfumeList = async () => {
  try {
    const res = await instance.get('/perfumes/category/2?page=1&size=14')

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

const Perfumes = () => {
  const {
    isLoading,
    error,
    data: perfumeList,
  } = useQuery({
    queryKey: ['perfumeList'],
    queryFn: getPerfumeList,
  })

  const [clickedCategory, setClickedCategory] = useState<string>('프루티')
  const [page, setPage] = useState(1) // 처음 페이지는 1
  const [perfumes, setPerfumes] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  console.log('perfumeList:', perfumeList)

  // 마지막 페이지
  const LAST_PAGE =
    dummydata.length % 12 === 0
      ? parseInt((dummydata.length / 12) as any)
      : parseInt((dummydata.length / 12) as any) + 1

  const handlePage = (event: any) => {
    const nowPageInt = parseInt(event.target.outerText)
    setPage(nowPageInt)
  }

  useEffect(() => {
    // 한 페이지에 12개씩 보여줍니다.
    if (page === LAST_PAGE) {
      setPerfumes(dummydata.slice(12 * (page - 1)) as any)
    } else {
      setPerfumes(dummydata.slice(12 * (page - 1), 12 * (page - 1) + 12) as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <Wrapper>
        <FlexBox
          justifyContent="space-around"
          gap=""
          style={{marginTop: '120px'}}
        >
          {/* 브랜드 추천 메인 이미지 */}
          <Box
            sx={{
              position: 'relative',
              width: '326.4px',
              height: '319.7px',
              marginRight: '32px',
            }}
          >
            <img src="./images/Rectangle7370.png" alt="main-img-1" />
            <Box sx={{position: 'absolute', bottom: '23.5px', left: '24px'}}>
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
                style={{width: '177px', height: '226px'}}
                key={data.id}
              >
                <img src={data.url} alt="perfumesImg" />

                <FlexBox direction="column" style={{marginTop: '27px'}}>
                  <BrandName>{data.brandName}</BrandName>
                  <PerfumeName>{data.perfumeName}</PerfumeName>

                  <Description
                    dangerouslySetInnerHTML={{__html: data.description}}
                  ></Description>
                </FlexBox>
              </FlexBox>
            ))}
        </FlexBox>

        {/* 카테고리 */}
        <Category
          currentCategory={clickedCategory}
          setCurrentCategory={setClickedCategory}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

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
  maxWidth: '1200px',
  margin: '0 auto',
})

const BrandTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: '27px',
  fontWeight: '700',
  lineHeight: 'normal',
  textAlign: 'left',
  color: '#FFFFFF',
  marginBottom: '11.8px',
})

const BrandSubTitle = styled(Typography)({
  fontSize: '13.5px',
  fontWeight: '500',
  textAlign: 'left',
  lineHeight: '21.6px',
  color: '#FFF',
})

const BrandName = styled(Typography)({
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '16.71px',
})

const PerfumeName = styled(Typography)({
  fontSize: '13.5px',
  fontWeight: '600',
  lineHeight: '15px',
})

const Description = styled(Typography)(() => ({
  fontSize: '10px',
  color: '#707070',
  lineHeight: 'normal',
  marginTop: '10.5px',
}))

const ProductList = styled.ul({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
})

const Footer = styled.footer({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '142px',
  marginBottom: '118px',
})

export default Perfumes
