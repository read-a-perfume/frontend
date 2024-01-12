// import {useRouter} from '@hooks/use-router'
import {Box, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'
import {IfBrandListResponse} from 'types/brand.interface'

interface proptype {
  data: IfBrandListResponse
}

const BrandCard = ({data}: proptype) => {
  

  return (
    <Container >
      <Link to = {`/brand/${data.id}`}>
        <BrandThumbnail
          src={data.thumbnail}
          alt={data.name}
          height={360.9}
          width={282}
        />
        <BrandName>{data.name}</BrandName>
        <BrandStory>{data.story}</BrandStory>
      </Link>
    </Container>
  )
}

export default BrandCard

const Container = styled(Box)(() => ({
  width: '282px',
  cursor: 'pointer',
}))

const BrandThumbnail = styled('img')(() => ({
  //width: '100%',
  //height: '360.9px',
  borderRadius: '19.1px',
}))

const BrandName = styled(Typography)(() => ({
  fontSise: '21.5px',
  fontWeight: 600,
  paddingTop: '21.5px',
  paddingBottom: '13px',
  color:'black',
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
