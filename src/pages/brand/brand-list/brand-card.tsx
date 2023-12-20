import {Box, Typography, styled} from '@mui/material'
import {IfBrandListResponse} from 'types/brand.interface'

interface proptype {
  data: IfBrandListResponse
}

const BrandCard = ({data}: proptype) => {
  return (
    <Container>
      <BrandThumbnail src={data.thumbnail} alt="brand image" />
      <BrandName>{data.name}</BrandName>
      <BrandStory>{data.story}</BrandStory>
    </Container>
  )
}

export default BrandCard

const Container = styled(Box)(() => ({
  width: '282px',
}))

const BrandThumbnail = styled('img')(() => ({
  width: '100%',
  height: '360.9px',
  borderRadius: '19.1px',
}))

const BrandName = styled(Typography)(() => ({
  fontSise: '21.5px',
  fontWeight: 600,
  paddingTop: '21.5px',
  paddingBottom: '13px',
}))

const BrandStory = styled(Typography)(() => ({
  fontSize: '14.3px',
  color: '#707070',
  lineHeight: 1.6,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  textOverflow: 'ellipsis',
}))