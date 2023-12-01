import {Avatar, Typography, styled} from '@mui/material'

interface proptype {
  author: string
}

const FeedAuthor = ({author}: proptype) => {
  return (
    <FeedAuthorContainer>
      <Avatar sx={{width:'32px',height:'32px'}}>A</Avatar>
      <AuthorText variant='body1'>{author}</AuthorText>
    </FeedAuthorContainer>
  )
}

export default FeedAuthor

const FeedAuthorContainer = styled('div')`
  display: flex;
  gap: 16px;
`

const AuthorText = styled(Typography)`
  font-family: Pretendard;
  font-weight: 600;
  color: #000;
`
