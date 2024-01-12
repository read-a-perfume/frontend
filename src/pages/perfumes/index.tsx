import {useState} from 'react'
import {styled} from '@mui/material'
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
import PerfumeList from '@components/perfumes/perfume-card-list'
import PerfumeSkeleton from '@components/perfumes/perfume-card-skeleton'

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
    data: perfumeListData,
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
                      src={data.thumbnail}
                      alt="perfumes-sub-img"
                      className="sub-img"
                    />
                  </SLink>
                  <FlexBox direction="column" style={{marginTop: '27px'}}>
                    <BrandName>{data.brandName}</BrandName>
                    <PerfumeName>{data.name}</PerfumeName>

                    <Description>{data.story}</Description>
                  </FlexBox>
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
        <Box sx={{minHeight: '799px'}}>
          {perfumesLoading ? (
            <>
              <PerfumeSkeleton skeletons={skeletons} />
            </>
          ) : (
            <>
              <PerfumeList perfumeListData={perfumeListData.content} />
            </>
          )}
          <Footer>
            <Pagination
              page={currentPage}
              count={perfumeListData?.totalPages}
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
        </Box>
      </Wrapper>
    </>
  )
}

const Wrapper = styled(Box)({
  width: '1200px',
  margin: '0 auto',

  '& .main-img': {
    width: '326px',
    height: '319px',
    filter: 'brightness(0.5)',
    objectFit: 'cover',
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
  fontFamily: 'Arita buri, sans-serif, Arial !important',
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

const Description = styled(Typography)({
  fontSize: '12px',
  color: '#707070',
  lineHeight: 'normal',
  marginTop: '10.5px',
  height: '28px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
})

const Footer = styled('footer')({
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
