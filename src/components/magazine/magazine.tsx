import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'

interface proptype {
  data: {
    title: string
    content: string
    thumbnail: string
    coverThumbnail: string
    tags: string[]
  }
}

const Magazine = ({data}: proptype) => {
  return (
    <Container>
      <CoverImg
        src={data.coverThumbnail}
        alt="cover image"
        width="384px"
        height="240px"
      />
      <ContentContainer>
        <Avatar src={data.thumbnail} sx={{width: '30px', height: '30px'}} />
        <Title>{data.title}</Title>
        <Content>{data.content}</Content>
        <Tag>{data.tags.map(e => `#${e}`).join(' ')}</Tag>
      </ContentContainer>
    </Container>
  )
}

export default Magazine

const Container = styled(Box)(({theme}) => ({
  width: '384px',
  height: '446px',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.grey[300]}`,
}))

const CoverImg = styled('img')(() => ({}))

const ContentContainer = styled(Box)(() => ({
  padding: '18px 18px 0 18px',
}))

const Title = styled(Typography)(({theme}) => ({
  padding: '12px 0',
  fontFamily: 'Arita buri',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const Content = styled(Typography)(({theme}) => ({
  color: '#707070',
  fontSize: theme.typography.body4.fontSize,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  textOverflow: 'ellipsis',
  height: '76px',
  lineHeight: 1.5,
}))

const Tag = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.body5.fontSize,
  marginTop: '6px',
  minHeight: '1em',
}))
