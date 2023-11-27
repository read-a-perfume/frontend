import {styled} from '@mui/material'
import ProfileCard from './profile-card'

const ProfileSection = () => {
  return (
    <Container>
      <ProfileCard />
    </Container>
  )
}

export default ProfileSection

const Container = styled('div')`
  display: flex;
`
