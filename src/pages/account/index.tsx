import {Box, styled} from '@mui/material'
import Left from './left'
import EditProfile from './edit-profile'
import {useState} from 'react'
import EditAccount from './edit-account'

const Account = () => {
  const [isProfileSection, setIsProfileSection] = useState<boolean>(true)

  return (
    <Container>
      <Left setIsProfileSection={setIsProfileSection} isProfileSection={isProfileSection}/>
      {isProfileSection ? <EditProfile /> : <EditAccount/>}
    </Container>
  )
}

export default Account

const Container = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '160px',
}))
