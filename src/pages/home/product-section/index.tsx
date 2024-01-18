import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import PerfumeSkeleton from '@components/perfumes/perfume-card-skeleton'
import PerfumeList from '@components/perfumes/perfume-card-list'
import useQuery from 'src/store/server/use-query'
import {fetchPerfumesByFavorite} from 'src/store/server/perfumes/queries'

const skeletons = Array.from({length: 12}, (_, index) => index + 1)

const ProductSection = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['best-perfume'],
    queryFn: fetchPerfumesByFavorite,
    options: {
      staleTime: Infinity,
    },
  })
  return (
    <ProductsContainer>
      <SectionTitle>사람들이 많이 찾은 향수</SectionTitle>
      <SectionSubTitle>
        사람들이 많이 검색한 향수 위주로 모아봤어요
      </SectionSubTitle>

      {isLoading ? (
        <PerfumeSkeleton skeletons={skeletons} />
      ) : (
        <PerfumeList perfumeListData={data?.content || []} />
      )}
    </ProductsContainer>
  )
}

export default ProductSection
const ProductsContainer = styled(Box)({
  marginTop: 136,
  width: 1200,
})

const SectionTitle = styled(Typography)({
  fontFamily: 'Arita buri',
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
