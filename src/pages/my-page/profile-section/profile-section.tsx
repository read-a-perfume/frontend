import {Box, styled} from '@mui/material'
import ProfileCard from './profile-card/profile-card'
import ReviewCard from './review-card/review-card'
import {useEffect, useState} from 'react'
import {TEMP_USER, tempUserType} from '../data/user-data'
import FavoriteCard from './favorite-card/favorite-card'

const ProfileSection = () => {
  /*
  USER데이터를 받아온다.
  그리고 카드 3개를 usequery로 그에 맞게 마운트시 상태를 갱신한다.
  */

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
      <ReviewCard
        onWrite={userInfo.onWrite}
        completeWrite={userInfo.completeWrite}
      />
      <FavoriteCard />
    </Container>
  )
}

export default ProfileSection

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '32px',
}))
