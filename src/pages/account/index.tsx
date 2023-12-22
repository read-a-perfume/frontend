import {Box, styled} from '@mui/material'
import Left from './left'
import EditProfile from './edit-profile/edit-profile'

const Account = () => {
  return (
    <Container>
      <Left />
      <EditProfile />
    </Container>
  )
}

export default Account

const Container = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '160px',
}))
