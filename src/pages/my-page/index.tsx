import {Box, Typography, styled} from '@mui/material'
import ProfileSection from './profile-section/profile-section'
// import FeedSection from './feed-section/feed-section'
import Banner from '@components/base/banner'
import {useParams} from 'react-router-dom'

const MyPage = () => {
  
  const {userId} = useParams()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >
      <Banner />
      {userId !== undefined && (
        <ContentSection>
          <Title>내 프로필</Title>
          <ProfileSection userId={userId} />
          <Title sx={{marginTop: '88px'}}>내 리뷰</Title>
          {/* <FeedSection /> */}
        </ContentSection>
      )}
    </Box>
  )
}

export default MyPage

const ContentSection = styled(Box)(() => ({
  flexGrow: 0,
  width: '1200px',
  padding: '71px 0 184px 0',
}))

const Title = styled(Typography)(() => ({
  marginBottom: '64px',
  fontFamily: 'Arita-buri(OTF)',
  fontSize: '32px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.64px',
  textAlign: 'left',
  color: '#0f0f0f',
}))



