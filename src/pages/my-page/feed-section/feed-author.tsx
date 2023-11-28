import {Avatar, Typography, styled} from '@mui/material'

interface proptype {
  author: string
}

const FeedAuthor = ({author}: proptype) => {
  return (
    <FeedAuthorContainer>
      <Avatar sx={{width:'32px',height:'32px'}}>A</Avatar>
      <AuthorText>{author}</AuthorText>
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
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`
