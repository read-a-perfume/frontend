import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Left from './left'
import EditProfile from './edit-profile'
import {useState} from 'react'
import EditAccount from './edit-account'
import useGoTop from '@hooks/use-go-top'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'

const Account = () => {
  useGoTop()

  const [isProfileSection, setIsProfileSection] = useState<boolean>(true)
  const {data: curUser} = useFetchAuthProfile()

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Container>
        <Left
          setIsProfileSection={setIsProfileSection}
          isProfileSection={isProfileSection}
        />
        {curUser !== undefined &&
          (isProfileSection ? (
            <EditProfile
              data={{
                ...curUser,
                thumbnail: {file: null, url: curUser.thumbnail},
              }}
            />
          ) : (
            <EditAccount />
          ))}
      </Container>
    </Box>
  )
}

export default Account

const Container = styled(Box)(() => ({
  display: 'flex',
  width: '1200px',
  minHeight: '100vh',
}))
