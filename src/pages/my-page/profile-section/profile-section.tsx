import {Box, styled} from '@mui/material'
import ProfileCard from './profile-card/profile-card'
import ReviewCard from './review-card/review-card'
import {useEffect, useState} from 'react'
import {TEMP_USER, tempUserType} from '../data/user-data'
import FavoriteCard from './favorite-card/favorite-card'
import {useQuery} from '@tanstack/react-query'
import {getCurUser, getFollowCount, getMytype, getReviewCount} from './queryfn'

const ProfileSection = () => {
  const {data: curUser} = useQuery(['curuser'], () => getCurUser())

  const {data: reviewCount} = useQuery(['reviewcount'], () => getReviewCount())

  const {data: followCount} = useQuery(['followcount'], () => getFollowCount())

  const {data: mytype} = useQuery(['mytype'], () => getMytype())

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
    console.log('mytype', mytype)

    setUserInfo(TEMP_USER)
  }, [mytype])
  return (
    <Container>
      {mytype && followCount && curUser && (
        <ProfileCard
          name={curUser.username}
          introduction={userInfo.introduction}
          follower={followCount.followerCount}
          following={followCount.followingCount}
          mytype={[{name:'asdf',id:1,thumbnail:'',description:'asdf'}]}
          thumbnail={curUser.thumbnail}
        />
      )}
      {reviewCount && <ReviewCard completeWrite={reviewCount.reviewCount} />}
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
