import {Box, Skeleton, Typography, styled} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {theme} from '@theme/index'
import {useNavigate} from 'react-router-dom'
import {fetchPerfumeList} from 'src/store/server/categories/queries'

type PerfumesType = {
  content: {
    id: number
    name: string
    thumbnail?: string
    brandName: string
    strength: string
    duration: string
  }[]
  first: boolean
  hasNext: boolean
  last: boolean
  pageNumber: number
  size: number
  totalElements: number
  totalPages: number
}

const skeletons = new Array(6).fill(0).map((_, idx) => idx + 1)

const NoteProducts = ({categoryId}: {categoryId: number}) => {
  const navigate = useNavigate()

  const {
    isLoading,
    error,
    data: perfumes,
  } = useQuery<PerfumesType>(
    ['perfumes-by-note', categoryId],
    () => fetchPerfumeList(categoryId, 0, 6),
    {
      keepPreviousData: false,
    },
  )

  return (
    <ProductLayout>
      {!isLoading &&
        !error &&
        perfumes!.content.map((perfume, idx) => (
          <ProductBox
            key={idx}
            onClick={() => navigate(`/perfume/${perfume.id}`)}
          >
            <ThumbNailBox>
              <ThumbNail
                src={
                  perfume.thumbnail
                    ? perfume.thumbnail
                    : 'images/perfume_test.png'
                }
                alt="product"
              />
            </ThumbNailBox>
            <ProductInfoBox>
              <ProductName>
                {perfume.name.length > 12
                  ? perfume.name.slice(0, 12) + '...'
                  : perfume.name}
              </ProductName>
              <BrandName>{perfume.brandName}</BrandName>
            </ProductInfoBox>
          </ProductBox>
        ))}
      {isLoading &&
        skeletons.map(item => (
          <Skeleton
            key={item}
            sx={{borderRadius: 4, animationDuration: '1.2s'}}
            variant="rectangular"
            width={'30%'}
            height={214}
          />
        ))}
    </ProductLayout>
  )
}

export default NoteProducts

const ProductLayout = styled('div')({
  display: 'flex',
  flex: 1,
  gap: '24px',
  flexWrap: 'wrap',
})

const ProductBox = styled('div')({
  width: '30%',
  height: '214px',
  borderRadius: '12px',
  background: 'white',
  border: '1px solid #DBDBDB',
  overflow: 'hidden',
  cursor: 'pointer',
})

const ProductInfoBox = styled('div')({
  borderTop: '1px solid #EDEDED',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '18px',
  paddingTop: '12px',
})

const ProductName = styled(Typography)({
  color: '#191919',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: '500',
})

const BrandName = styled(Typography)({
  color: '#A9A9A9',
  fontSize: theme.typography.body5.fontSize,
})

const ThumbNailBox = styled(Box)(() => ({
  width: '282px',
  height: '154px',
}))

const ThumbNail = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})
