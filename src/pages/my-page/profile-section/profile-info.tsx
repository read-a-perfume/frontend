import {Box, Button, Stack, Typography, styled} from '@mui/material'
import FollowText from './follow-text'
import {useRouter} from '@hooks/use-router'

interface proptype {
  userId:number
  username: string
  following: number
  follower: number
}

const ProfileInfo = ({userId,username, following, follower}: proptype) => {
  const {routeTo} = useRouter()
  console.log(userId)

  return (
    <Container>
      <Username>{username}</Username>
      <Stack direction="row">
        <FollowText title="팔로워" count={follower} label="follower"/>
        <FollowText title="팔로잉" count={following} label="following"/>
      </Stack>
      <SettingButton onClick={() => routeTo('/settings')}>
        <Typography sx={{fontSize: '20.8px', fontWeight: 500}}>설정</Typography>
      </SettingButton>
    </Container>
  )
}

export default ProfileInfo

const Container = styled(Box)(() => ({
  marginLeft: '45.8px',
  gap: '19.4px',
  display: 'flex',
  flexDirection: 'column',
}))

const Username = styled(Typography)(() => ({
  fontSize: '42.5px',
  color: '#000',
}))

const SettingButton = styled(Button)(() => ({
  width: '71px',
  height: '43.3px',
  border: 'solid 1.7px #ededed',
  color: 'black',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#eee',
  },
}))
