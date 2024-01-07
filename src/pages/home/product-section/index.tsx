import FlexBox from '@layouts/flex-box.js'
import {
  Box,
  Pagination,
  PaginationItem,
  Typography,
  styled,
} from '@mui/material'
import {useEffect, useState} from 'react'
import instance from '@api/instance.js'
import {useQuery} from '@tanstack/react-query'
import PerfumeSkeleton from '@components/perfumes/perfume-card-skeleton/index.js'
import PerfumeList from '@components/perfumes/perfume-card-list/index.js'

type Product = {
  id: number
  name: string
  thumbnail: string | null
  brandName: string
  strength: string
  duration: string
}

const getPerfumesByFavorite = async () => {
  const res = await instance.get(
    '/perfumes?sort=favorite&lastPerfumeId=8&pageSize=8',
  )
  return res.data
}
const skeletons = Array.from({length: 12}, (_, index) => index + 1)

const ProductSection = () => {
  const [page, setPage] = useState<number>(0)
  const [perfumes, setPerfumes] = useState<Product[]>([])

  const {data, isLoading} = useQuery(['perfumes'], getPerfumesByFavorite)

  useEffect(() => {
    if (data && Array.isArray(data.content)) {
      setPerfumes(data.content)
    }
  }, [data])

  const handlePage = (_, page: number) => {
    setPage(page)
  }

  return (
    <ProductsContainer>
      <SectionTitle>사람들이 많이 찾은 향수</SectionTitle>
      <SectionSubTitle>
        사람들이 많이 검색한 향수 위주로 모아봤어요
      </SectionSubTitle>

      {isLoading ? (
        <>
          <PerfumeSkeleton skeletons={skeletons} />
        </>
      ) : (
        <>
          <PerfumeList perfumeListData={data.content} />
        </>
      )}

      <FlexBox justifyContent="center">
        <Pagination
          page={page}
          count={Math.ceil(perfumes.length / 6)}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
          size="large"
          hidePrevButton
          hideNextButton
          renderItem={item => <Item {...item} />}
          sx={{
            marginTop: 20,
            marginBottom: 20,
            '& .Mui-selected': {
              backgroundColor: '#D9D9D9',
            },
          }}
        />
      </FlexBox>
    </ProductsContainer>
  )
}

export default ProductSection
const ProductsContainer = styled(Box)({
  marginTop: 136,
  width: 1200,
})

const Product = styled(Box)({
  height: '426px',
  borderRadius: 16,
  border: '1px solid #EDEDED',
})

const Item = styled(PaginationItem)({
  backgroundColor: '#F1F1F5',
  outline: 'none',
  border: 'none',
  fontSize: 16,
  fontWeight: '500',
  marginRight: 10,
})
const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 18,
  fontWeight: '600',
  color: '#191919',
})

const SectionSubTitle = styled(Typography)({
  fontSize: 12,
  fontWeight: '500',
  color: '#A9A9A9',
  marginTop: 5,
  marginBottom: 40,
})
