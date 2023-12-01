import {Avatar, Typography, styled} from '@mui/material'
import Follow from './follow'

interface proptype {
  name: string
  introduction: string
  follower: number
  following: number
}

const ProfileCardProfile = ({
  name,
  introduction,
  follower,
  following,
}: proptype) => {
  return (
    <ProfileContainer>
      <AavatarContainer>
        <Avatar sx={{height: '90px', width: '90px'}}>{name}</Avatar>
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

const ProfileContainer = styled('div')`
  display: flex;
  height: 136px;
  margin-bottom: 24px;
`

const AavatarContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled('div')`
  max-width: 350px;
  margin-left: 24px;
  flex-grow: 0;
`

const Name = styled(Typography)`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  font-family: Pretendard;
`
const Introduction = styled(Typography)`
  margin: 11px 0 10px;
  font-family: Pretendard;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`
const FollowContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`
