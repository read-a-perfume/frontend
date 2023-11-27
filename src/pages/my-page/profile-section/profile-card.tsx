import {Avatar, Divider, Typography, styled} from '@mui/material'
import CardContainer from '../base/card-container'
import {TEMP_USER, tempUserType} from '../data/user-data'
import {useEffect, useState} from 'react'
import Follow from './follow'

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState<tempUserType>({})

  useEffect(() => {
    setUserInfo(TEMP_USER)
  }, [])

  return (
    <CardContainer>
      <ProfileContainer>
        <AavatarContainer>
          <Avatar sx={{height: '90px', width: '90px'}}>{userInfo.name}</Avatar>
        </AavatarContainer>
        <InfoContainer>
          <Name variant="h1">
            {userInfo.name}
            <span style={{fontSize: 23, fontWeight: 500}}>님</span>
          </Name>
          <Introduction>{userInfo.introduction}</Introduction>
          <FollowContainer>
            <Follow/>
          </FollowContainer>
        </InfoContainer>
      </ProfileContainer>
      <Divider />
      <Divider />
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
  width: 350px;
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

