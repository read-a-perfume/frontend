import {Avatar, Box, Typography, styled} from '@mui/material'
import Follow from './follow'

interface proptype {
  name: string
  introduction: string
  follower: number
  following: number
  thumbnail: string
}

const ProfileCardProfile = ({
  name,
  introduction,
  follower,
  following,
  thumbnail,
}: proptype) => {
  return (
    <ProfileContainer>
      <AavatarContainer>
        <Avatar
          sx={{height: '90px', width: '90px'}}
          alt="avatar"
          src={thumbnail}
        />
      </AavatarContainer>
      <InfoContainer>
        <Name variant="h1">
          {name}
          <Typography sx={{fontSize: 23, fontWeight: 500}} variant="body3">
            님
          </Typography>
        </Name>
        <Introduction variant="body1">{introduction}</Introduction>
        <FollowContainer>
          <Follow title="팔로워" number={follower} />
          <Follow title="팔로잉" number={following} />
        </FollowContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}

export default ProfileCardProfile

const ProfileContainer = styled(Box)(() => ({
  display: 'flex',
  height: '136px',
  marginBottom: '24px',
}))

const AavatarContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const InfoContainer = styled(Box)(() => ({
  maxWidth: '350px',
  marginLeft: '24px',
  flexGrow: 0,
}))

const Name = styled(Typography)(() => ({
  textAlign: 'left',
  color: '#000',
}))

export const Introduction = styled(Typography)(() => ({
  margin: '11px 0 10px',
  fontFamily: 'Pretendard',
  fontWeight: 500,
  lineHeight: 1.6,
  textAlign: 'left',
  color: '#000',
}))

export const FollowContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))
