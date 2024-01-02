import {Box, styled} from '@mui/material'
import Left from './left'
import EditProfile from './edit-profile'
import {useEffect, useState} from 'react'
import EditAccount from './edit-account'
import {useQuery} from '@tanstack/react-query'
import getImageFromURL from './util/getImageFromURL'
import useGoTop from '@hooks/use-go-top'
import { fetchCurUser } from 'src/store/server/user/queries'

const Account = () => {
  useGoTop()
  const [isProfileSection, setIsProfileSection] = useState<boolean>(true)
  const {data: curUser} = useQuery(['curUser'], () => fetchCurUser())
  const [thumbnail, setThumbnail] = useState<File | null>(null)

  useEffect(() => {
    if (curUser !== undefined) {
      getImageFromURL(curUser.thumbnail).then(f => {
        if (f === undefined) {
          alert('이미지 불러오는 중 오류가 발생했습니다.')
        } else {
          setThumbnail(f)
        }
      })
    }
  }, [curUser])

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Container>
        <Left
          setIsProfileSection={setIsProfileSection}
          isProfileSection={isProfileSection}
        />
        {curUser !== undefined &&
          thumbnail !== null &&
          (isProfileSection ? (
            <EditProfile data={{...curUser, thumbnail: thumbnail}} />
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
}))
