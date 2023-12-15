import {Box, styled} from '@mui/material'
import ProfileCard from './profile-card/profile-card'
import ReviewCard from './review-card/review-card'
import FavoriteCard from './favorite-card/favorite-card'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser, getFollowCount, fetchMytype, fetchReviewCount} from './queryfn'

const ProfileSection = () => {
  const {data: curUser} = useQuery(['curuser'], () => fetchCurUser())

  const {data: reviewCount} = useQuery(['reviewcount'], () => fetchReviewCount())

  const {data: followCount} = useQuery(['followcount'], () => getFollowCount())

  const {data: mytype} = useQuery(['mytype'], () => fetchMytype())

  return (
    <Container>
      {mytype && followCount && curUser && (
        <ProfileCard
          name={curUser.username}
          introduction="test"
          follower={followCount.followerCount}
          following={followCount.followingCount}
          mytype={[{name: 'test', id: 1, thumbnail: '', description: 'test'}]}
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
  flexWrap: 'wrap',
  gap: '32px',
}))
