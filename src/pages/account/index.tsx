import {Box, styled} from '@mui/material'
import Left from './left'
import EditProfile from './edit-profile'
import {useEffect, useState} from 'react'
import EditAccount from './edit-account'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser} from './queryfn'
import getImageFromURL from './util/getImageFromURL'

const Account = () => {
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
    <Container>
      <Left
        setIsProfileSection={setIsProfileSection}
        isProfileSection={isProfileSection}
      />
      {curUser !== undefined && isProfileSection ? (
        <EditProfile data={{...curUser, thumbnail: thumbnail}} />
      ) : (
        <EditAccount />
      )}
    </Container>
  )
}

export default Account

const Container = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '160px',
}))
