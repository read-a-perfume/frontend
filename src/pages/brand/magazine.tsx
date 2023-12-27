import {Avatar, Box, Typography, styled} from '@mui/material'

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
      <CoverImg src={data.coverThumbnail} alt="cover image" />
      <ContentContainer>
        <Avatar src={data.thumbnail} sx={{width: '40px', height: '40px'}} />
        <Title>{data.title}</Title>
        <Content>{data.content}</Content>
        <Tag>{data.tags.map(e => `#${e}`).join(' ')}</Tag>
      </ContentContainer>
    </Container>
  )
}

export default Magazine

const Container = styled(Box)(({theme}) => ({
  width: '512px',
  height: '594px',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.grey[300]}`,
}))

const CoverImg = styled('img')(() => ({
  minHeight: '320px',
  minWidth: '100%',
  maxHeight: '320px',
  maxWidth: '100%',
  borderBottom: '1px solid black', // just test
}))

const ContentContainer = styled(Box)(() => ({
  padding: '24px 24px 0 24px',
}))

const Title = styled(Typography)(({theme}) => ({
  paddingTop: '16px',
  paddingBottom: '16px',
  fontFamily: 'AritaBuri',
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const Content = styled(Typography)(({theme}) => ({
  color: '#707070',
  fontSize: theme.typography.body2.fontSize,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  textOverflow: 'ellipsis',
  height: '96px',
  lineHeight: 1.5,
}))

const Tag = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.body3.fontSize,
  marginTop: '8px',
  minHeight: '1em',
}))
