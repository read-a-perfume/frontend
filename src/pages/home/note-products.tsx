import instance from '@api/instance'
import styled from '@emotion/styled'
import {Skeleton, Typography} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {theme} from '@theme/index'
import {useNavigate} from 'react-router-dom'

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

const fetchGetPerfumesByCategory = async (id: number) => {
  try {
    const res = await instance.get(`/perfumes/category/${id}?page=0&size=3`)
    return res.data
  } catch (error) {
    throw new Error(error as string)
  }
}

const NoteProducts = ({categoryId}: {categoryId: number}) => {
  const navigate = useNavigate()

  const {
    isLoading,
    error,
    data: perfumes,
  } = useQuery<PerfumesType>(
    ['perfumes-by-note', categoryId],
    () => fetchGetPerfumesByCategory(categoryId - 1),
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
            <ThumbNail
              src={
                perfume.thumbnail
                  ? perfume.thumbnail
                  : 'images/perfume_test.png'
              }
              alt="product"
            />
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
            height={285}
          />
        ))}
    </ProductLayout>
  )
}

export default NoteProducts

const ProductLayout = styled.div({
  display: 'flex',
  flex: 1,
  height: '600px',
  gap: '32px',
  flexWrap: 'wrap',
  marginBottom: 136,
})

const ProductBox = styled.div({
  width: '30%',
  height: '284px',
  borderRadius: '16px',
  background: 'white',
  border: '1px solid #DBDBDB',
  overflow: 'hidden',
  cursor: 'pointer',
})

const ProductInfoBox = styled.div({
  padding: '0px 24px',
  marginTop: '-6px',
  height: '78px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderTop: '1px solid #EDEDED',
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

const ThumbNail = styled.img`
  object-fit: center;
  width: 100%;
  height: 75%;
`
