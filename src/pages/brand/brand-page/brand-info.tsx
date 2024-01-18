import Avatar from '@components/base/avatar'
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import {useQuery} from '@tanstack/react-query'
import {brandQueryKeys} from 'src/react-query-keys/brand.keys'
import {fetchBrand} from 'src/store/server/brand/queries'

interface proptype {
  brandId: string
}

const BrandInfo = ({brandId}: proptype) => {
  const {data: brandData} = useQuery(brandQueryKeys.brand(brandId), () =>
    fetchBrand(brandId),
  )

  if (brandData === undefined) {
    return <Container />
  }

  return (
    <Container>
      <Avatar
        url={brandData.thumbnail}
        size="104px"
        style={{
          zIndex: 1,
          marginTop: '-18px',
        }}
      />
      <TextContainer>
        <BrandName>{brandData.name}</BrandName>
        <BrandStory>{brandData.story}</BrandStory>
        <BrandLink underline="hover" href={brandData.brandUrl}>
          {brandData.brandUrl}
        </BrandLink>
      </TextContainer>
    </Container>
  )
}

export default BrandInfo

const BrandName = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.h3.fontSize,
  margin: '31px 0 8px 0',
  color: 'black',
}))

const BrandStory = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body2.fontSize,
  color: '#606060',
  height: '5em',
  width: '800px',
}))

const BrandLink = styled(Link)(({theme}) => ({
  color: theme.palette.primary.main,
  marginTop: '6px',
  fontSize: theme.typography.body3.fontSize,
}))

const Container = styled(Box)(() => ({
  display: 'flex',
  marginBottom: '100px',
}))

const TextContainer = styled(Box)(() => ({
  marginLeft: '30px',
}))
