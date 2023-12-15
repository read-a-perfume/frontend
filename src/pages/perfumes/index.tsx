import {useState} from 'react'
import styled from '@emotion/styled'
import {useQuery} from '@tanstack/react-query'
import {useSearchParams} from 'react-router-dom'
import {CategoryNameType} from '@components/category/interfaces'
import {
  fetchCategories,
  fetchPerfumeList,
} from 'src/store/server/categories/queries'

import FlexBox from '@layouts/flex-box'
import Category from '@components/category'
import Pagination from '@mui/material/Pagination'
import {Box, Skeleton, Stack, Typography} from '@mui/material'
import brandDummyData from './dummyData'
import PerfumesItem, {ItemType} from './perfumes-item'

const skeletons = Array.from({length: 12}, (_, index) => index + 1)

const Perfumes = () => {
  const [clickedCategory, setClickedCategory] = useState<string>('프루티')
  const [currentPage, setCurrentPage] = useState(0) // 처음 페이지는 0
  const [categoryId, setCategoryId] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()

  const queryCategoryId = searchParams.get('categoryId')
    ? Number(searchParams.get('categoryId'))
    : categoryId

  const queryPageNumber = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : currentPage

  const {
    isLoading: prefumesLoading,
    error: perfumesError,
    data: perfumeList,
  } = useQuery({
    queryKey: ['perfumeList', queryCategoryId, queryPageNumber],
    queryFn: () => fetchPerfumeList(queryCategoryId, currentPage),
  })

  const {
    isLoading: categoryLoading,
    error: categoryError,
    data: categories,
  } = useQuery<CategoryNameType[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 99999,
  })

  const handlePage = (event: any) => {
    setSearchParams({
      categoryId: queryCategoryId as any,
      page: event.target.outerText,
    })

    const nowPageInt = parseInt(event.target.outerText)
    setCurrentPage(nowPageInt)
  }

  console.log('perfumesError:', perfumesError)

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
            <img src="/images/Rectangle7370.png" alt="main-img-1" />
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
          categories={categories}
          currentCategory={clickedCategory}
          loading={categoryLoading}
          error={categoryError}
          setCurrentCategory={setClickedCategory}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setCategoryId={setCategoryId}
        />

        {/* 제품 리스트 */}
        <ProductList>
          {prefumesLoading ? (
            <>
              {skeletons.map((_, index) => (
                <Stack spacing={1} key={index}>
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
            <>
              {perfumeList?.content?.length > 0 &&
                perfumeList?.content?.map((item: ItemType, index: number) => (
                  <PerfumesItem item={item} key={index} />
                ))}
            </>
          )}
        </ProductList>

        <Footer>
          <Pagination
            page={currentPage}
            count={perfumeList?.totalPages}
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
  padding: '0',
  margin: '0',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
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
