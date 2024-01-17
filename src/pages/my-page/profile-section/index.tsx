import {Avatar, Box, styled} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import ProfileInfo from './profile-info'
import ProfileType from './profile-type'
import {followQueryKeys, userQueryKeys} from 'src/react-query-keys/user.keys'
import {
  fetchFollowCount,
  fetchMytype,
  fetchUserWithId,
} from 'src/store/server/user/queries'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'

interface proptype {
  userId: string
}

const ProfileSection = ({userId}: proptype) => {
  const {data: curUser} = useQuery(userQueryKeys.user(userId), () =>
    fetchUserWithId(userId),
  )
  const {data: followCount} = useQuery(followQueryKeys.follows(userId), () =>
    fetchFollowCount(userId),
  )
  const {data: mytype} = useQuery(userQueryKeys.userTastes(userId), () =>
    fetchMytype(userId),
  )

  const {data: me} = useFetchAuthProfile()

  const flag = String(me?.userId) === userId

  return (
    <Container>
      {curUser !== undefined && <ProfileAvatar src={curUser.thumbnail} />}
      {curUser !== undefined && followCount !== undefined && (
        <ProfileInfo
          username={curUser.username}
          follower={followCount.followerCount}
          following={followCount.followingCount}
          flag={flag}
        />
      )}
      {mytype !== undefined && <ProfileType data={mytype} flag={flag} />}
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
  padding: '0 49px 0 36px',
}))

const ProfileAvatar = styled(Avatar)(() => ({
  width: '121px',
  height: '121px',
}))
