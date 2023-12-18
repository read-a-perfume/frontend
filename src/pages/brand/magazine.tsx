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
  border: `0.8px solid ${theme.palette.grey[300]}`,
}))

const CoverImg = styled('img')(() => ({
  height: '240px',
  width: '100%',
  borderBottom: '1px solid black',
}))

const ContentContainer = styled(Box)(() => ({
  padding: '18px 18px 0 18px',
}))

const Title = styled(Typography)(({theme}) => ({
  paddingTop: '12px',
  paddingBottom: '12px',
  fontFamily: 'AritaBuri',
  fontSize: theme.typography.body2.fontSize,
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
  WebkitLineClamp: 4, // 표시할 줄 수 지정
  textOverflow: 'ellipsis',
}))

const Tag = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
  fontSize: '10.5px',
  marginTop: '6px',
}))
