import {Avatar, Box, Typography, styled} from '@mui/material'
import {userType} from 'src/type/api-res-type'

interface proptype {
  user: userType
}

const FeedAuthor = ({user}: proptype) => {
  return (
    <FeedAuthorContainer>
      <Avatar
        sx={{width: '32px', height: '32px'}}
        src={user.thumbnail}
        alt={user.username}
      />
      <AuthorText>{user.username}</AuthorText>
    </FeedAuthorContainer>
  )
}

export default FeedAuthor

const FeedAuthorContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '16px',
}))

const AuthorText = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body1.fontSize,
  fontFamily: 'Pretendard',
  fontWeight: 600,
  color: '#000',
}))
