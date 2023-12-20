import {Avatar, Box, styled} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser, fetchMytype, getFollowCount} from './queryfn'
import ProfileInfo from './profile-info'
import ProfileType from './profile-type'

const ProfileSection = () => {
  const {data: curUser} = useQuery(['curuser'], () => fetchCurUser())
  const {data: followCount} = useQuery(['followcount'], () => getFollowCount())
  const {data: mytype} = useQuery(['mytype'], () => fetchMytype())
  return (
    <Container>
      {curUser !== undefined && <ProfileAvatar src={curUser.thumbnail} />}
      {curUser !== undefined && followCount !== undefined && (
        <ProfileInfo
          username={curUser.username}
          follower={followCount.followerCount}
          following={followCount.followingCount}
        />
      )}
      {mytype && <ProfileType data={mytype} />}
    </Container>
  )
}

export default ProfileSection

const Container = styled(Box)(() => ({
  width: '100%',
  borderRadius: '20px',
  border: 'solid 1px #dbdbdb',
  height: '310px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 49px 0 36px'
}))

const ProfileAvatar = styled(Avatar)(() => ({
  width: '121px',
  height: '121px',
}))
