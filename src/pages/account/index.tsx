import {Box, styled} from '@mui/material'
import Left from './left'
import EditProfile from './edit-profile'
import {useState} from 'react'
import EditAccount from './edit-account'
import { useQuery } from '@tanstack/react-query'
import { fetchCurUser } from './queryfn'

const Account = () => {
  const [isProfileSection, setIsProfileSection] = useState<boolean>(true)
  const {data: curUser} = useQuery(['curuser'], () => fetchCurUser())

  return (
    <Container>
      <Left setIsProfileSection={setIsProfileSection} isProfileSection={isProfileSection}/>
      {curUser !== undefined && isProfileSection ? <EditProfile data={curUser}/> : <EditAccount/>}
    </Container>
  )
}

export default Account

const Container = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '160px',
}))
