import {Avatar, Box, Typography, styled} from '@mui/material'

interface proptype {
  author: string
}

const FeedAuthor = ({author}: proptype) => {
  return (
    <FeedAuthorContainer>
      <Avatar sx={{width: '32px', height: '32px'}}>A</Avatar>
      <AuthorText variant="body1">{author}</AuthorText>
    </FeedAuthorContainer>
  )
}

export default FeedAuthor

const FeedAuthorContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '16px',
}))

const AuthorText = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontWeight: 600,
  color: '#000',
}))
