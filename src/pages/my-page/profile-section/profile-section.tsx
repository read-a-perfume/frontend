import {styled} from '@mui/material'
import ProfileCard from './profile-card'
import ReviewCard from './review-card'
import {useEffect, useState} from 'react'
import {TEMP_USER, tempUserType} from '../data/user-data'
import FavoriteCard from './favorite-card'

const ProfileSection = () => {
  const [userInfo, setUserInfo] = useState<tempUserType>({
    follower: 0,
    following: 0,
    name: '',
    introduction: '',
    mytype: '',
    onWrite: 0,
    completeWrite: 0,
  })

  useEffect(() => {
    setUserInfo(TEMP_USER)
  }, [])
  return (
    <Container>
      <ProfileCard
        name={userInfo.name}
        introduction={userInfo.introduction}
        follower={userInfo.follower}
        following={userInfo.following}
        mytype={userInfo.mytype}
      />
      <ReviewCard onWrite={userInfo.onWrite} completeWrite={userInfo.completeWrite}/>
      <FavoriteCard/>
    </Container>
  )
}

export default ProfileSection

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`
