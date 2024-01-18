import useFetchNoteProducts from '@hooks/use-fetch-note-products'
import {useRouter} from '@hooks/use-router'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import {theme} from '@theme/index'

const skeletons = new Array(6).fill(0).map((_, idx) => idx + 1)

const NoteProducts = ({categoryId}: {categoryId: number}) => {
  const {routeTo} = useRouter()

  const {
    isLoading,
    error,
    data: perfumes,
  } = useFetchNoteProducts({queryCategoryId: categoryId, queryPageNumber: 1})

  return (
    <ProductLayout>
      {!isLoading &&
        !error &&
        perfumes!.content.slice(0, 6).map((perfume, idx) => (
          <ProductBox
            key={idx}
            onClick={() => routeTo(`/perfume/${perfume.id}`)}
          >
            <ThumbNailBox>
              <ThumbNail
                src={
                  perfume.thumbnail
                    ? perfume.thumbnail
                    : 'images/perfume_test.png'
                }
                alt="product"
                width="263.8px"
                height="154px"
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

const ThumbNailBox = styled(Box)(() => ({}))

const ThumbNail = styled('img')({
  objectFit: 'contain',
})
