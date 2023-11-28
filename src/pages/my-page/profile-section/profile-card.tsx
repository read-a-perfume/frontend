import {Avatar, Divider, Typography, styled} from '@mui/material'
import CardContainer from '../base/card-container'
import Follow from './follow'
import MyPageButton from '../base/mypage-button'
import {CreateOutlined} from '@mui/icons-material'

interface proptype {
  name: string
  introduction: string
  follower: number
  following: number
  mytype: string
}

const ProfileCard = ({
  name,
  introduction,
  follower,
  following,
  mytype,
}: proptype) => {
  return (
    <CardContainer>
      <ProfileContainer>
        <AavatarContainer>
          <Avatar sx={{height: '90px', width: '90px'}}>{name}</Avatar>
        </AavatarContainer>
        <InfoContainer>
          <Name variant="h1">
            {name}
            <span style={{fontSize: 23, fontWeight: 500}}>님</span>
          </Name>
          <Introduction>{introduction}</Introduction>
          <FollowContainer>
            <Follow title="팔로워" number={follower} />
            <Follow title="팔로잉" number={following} />
          </FollowContainer>
        </InfoContainer>
      </ProfileContainer>
      <Divider />
      <TypeContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{fontFamily: 'Pretendard', whiteSpace: 'nowrap'}}
          >
            {'MY TYPE'}
          </Typography>
        </div>
        <div
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <Avatar
            sx={{
              width: '55.8px',
              height: '55.8px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
          >
            F
          </Avatar>
          <TypeText>{mytype}</TypeText>
        </div>
      </TypeContainer>
      <Divider />
      <MyPageButton
        text="내 프로필 편집"
        onClick={() => {}}
        icon={
          <CreateOutlined
            sx={{
              marginRight: '10px',
            }}
          />
        }
      />
    </CardContainer>
  )
}

export default ProfileCard

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
  font-size: 18px;
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

const TypeContainer = styled('div')`
  display: flex;
`

const TypeText = styled(Typography)`
  flex-grow: 0;
  font-family: Arita-buri(OTF);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 9px;
`
