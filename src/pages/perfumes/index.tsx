import {useState} from 'react'
import styled from '@emotion/styled'
import {useQueries} from '@tanstack/react-query'
import {Link, useSearchParams} from 'react-router-dom'
import {
  fetchCategories,
  fetchPerfumeList,
} from 'src/store/server/categories/queries'
import {fetchPerfumeTheme} from 'src/store/server/perfumes/queries'
import {perfumeQueryKeys} from 'src/react-query-keys/perfume.keys'

import FlexBox from '@layouts/flex-box'
import Category from '@components/category'
import Pagination from '@mui/material/Pagination'
import {Box, Skeleton, Stack, Typography} from '@mui/material'
import PerfumesItem, {IfItemType} from './perfumes-item'

const topSkeletons = Array.from({length: 4}, (_, index) => index + 1)
const skeletons = Array.from({length: 12}, (_, index) => index + 1)

const Perfumes = () => {
  const [clickedCategory, setClickedCategory] = useState<string>('Fruity')
  const [currentPage, setCurrentPage] = useState(0) // 처음 페이지는 0
  const [categoryId, setCategoryId] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()

  const queryCategoryId = searchParams.get('categoryId')
    ? Number(searchParams.get('categoryId'))
    : categoryId

  const queryPageNumber = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : currentPage

  const results = useQueries({
    queries: [
      {
        queryKey: [perfumeQueryKeys.perfumes(queryCategoryId, queryPageNumber)],
        queryFn: () => fetchPerfumeList(queryCategoryId, currentPage),
      },
      {
        queryKey: [perfumeQueryKeys.perfumesCategory()],
        queryFn: fetchCategories,
        staleTime: Infinity,
      },
      {
        queryKey: [perfumeQueryKeys.perfumeThemes],
        queryFn: fetchPerfumeTheme,
        staleTime: Infinity,
      },
    ],
  })

  const {
    isLoading: perfumesLoading,
    error: perfumesError,
    data: perfumeList,
  } = results[0]

  const {
    isLoading: categoryLoading,
    error: categoryError,
    data: categories,
  } = results[1]

  const {isLoading: themeDataLoading, data: perfumeThemeData} = results[2]

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
          {themeDataLoading ? (
            <>
              <Skeleton
                sx={{bgcolor: 'grey.200'}}
                variant="rounded"
                width={326}
                height={319}
              />

              {topSkeletons?.map((_, index) => (
                <Stack key={index}>
                  <Skeleton
                    sx={{bgcolor: 'grey.200'}}
                    variant="rounded"
                    width={177}
                    height={226}
                    key={index}
                  />
                  <Skeleton
                    variant="text"
                    width={37}
                    sx={{marginTop: '15px'}}
                  />
                  <Skeleton variant="text" width={104} />
                  <Skeleton variant="text" width={147} height={26} />
                </Stack>
              ))}
            </>
          ) : (
            <>
              {/* 브랜드 추천 메인 이미지 */}
              <Box
                sx={{
                  position: 'relative',
                  width: '326.4px',
                  height: '319.7px',
                  marginRight: '32px',
                }}
              >
                <img
                  src={perfumeThemeData?.thumbnail}
                  alt="main-img"
                  className="main-img"
                />

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '23.5px',
                    left: '24px',
                    width: '162px',
                  }}
                >
                  <BrandTitle>{perfumeThemeData?.title}</BrandTitle>
                  <BrandSubTitle>{perfumeThemeData?.content}</BrandSubTitle>
                </Box>
              </Box>
              {/* 브랜드 추천 목록 */}
              {perfumeThemeData?.perfumes?.map(data => (
                <FlexBox
                  direction="column"
                  justifyContent="space-between"
                  gap=""
                  style={{width: '177px'}}
                  key={data.id}
                >
                  <SLink to={`/perfume/${data.id}`}>
                    <img
                      src={
                        data.thumbnail
                          ? data.thumbnail
                          : 'data:image/jpeg;base64,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mIHSZT4RAq+JcNFTvAd/AB3K6gpyoJG6spJKsN1JPQkHVY3rhglUbk6Vflk4zpqKNlfAJ27p5qd8S3z0ke5tgw8DyzgHI8GB2I9H1SWK27GYvTyMEBgeYbcH+fVIatUXulNQA2IYnJ8O93lHpJPORl4w2oqaTBl84dpROD4buD4b46iTTE37kC+aHXw0v3R6lY6R+j0nzQ3WpV9qUz9ST592P0pn05emMfrGfDWq9KY9tUfulRkUbo9X2JTH+JBPv3GG88O3iKjZU+tFOk+6ajdVh/wR/er9qz615VAyaX/dT7cQJqUwAAMADkAMACfKtZUUsSAo69P59AkBL2qykrQwemt1xnpkoG28T0kG84LUuRpuWApnzqdMsAR4FsjHUE7nkQV3EnxXP8Q4rccSdrWzJSip017roo6pT+U58Ae6CCTqxo7HgfBqNpRWhRXSqj2serMepPjJdpapSVUpoqIowqoAqgDoAJnnJwOXU/YJqTEbFmU+T7AREQEREBERAREQEREBERAREQERED4RBn2IEatrGSoDeCk6fXvgzQGqN51FMflOD9SmTwIxAhYqDzadP9Nh9VOfdVb/AJdP+9f/AG5MxPmBAiB63/Lp/wB6/wDtz7qq/IT2VG+1JLxEggV7iqo2oF9xydBt497E3oG5knlsox4n6cYHPG03EemKYwOZPpON/dKPmCee0yUYmUQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=='
                      }
                      alt="perfumes-sub-img"
                      className="sub-img"
                    />

                    <FlexBox direction="column" style={{marginTop: '27px'}}>
                      <BrandName>{data.brandName}</BrandName>
                      <PerfumeName>{data.name}</PerfumeName>

                      <Description>
                        {data.strength} | {data.duration}
                      </Description>
                    </FlexBox>
                  </SLink>
                </FlexBox>
              ))}
            </>
          )}
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
          {perfumesLoading ? (
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
                perfumeList?.content?.map((item: IfItemType, index: number) => (
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

  '& .main-img': {
    width: '326px',
    height: '319px',
  },
  '& .sub-img': {
    width: '177px',
    height: '226px',
  },

  '& img': {
    borderRadius: '12px',
  },
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
  fontSize: '12px',
  lineHeight: '16.71px',
})

const PerfumeName = styled(Typography)({
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '15px',
})

const Description = styled(Typography)(() => ({
  fontSize: '12px',
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

const SLink = styled(Link)({
  textDecoration: 'none',
  outline: 'none',
  color: '#191919',

  '& img': {
    transition: 'transform .3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.098)',
  },
})

export default Perfumes
