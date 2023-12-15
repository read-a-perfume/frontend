import {Box, Typography, styled} from '@mui/material'
import ProfileSection from './profile-section/profile-section'
import FeedSection from './feed-section/feed-section'
import Banner from '@components/base/banner'


const MyPage = () => {
  return (
    <div>
      <Banner/>
      <ContentSection>
        <Title>마이페이지</Title>
        <ProfileSection />
        <Title sx={{marginTop: '88px'}}>리뷰 모아보기</Title>
        <FeedSection />
      </ContentSection>
    </div>
  )
}

export default MyPage



const ContentSection = styled(Box)(({theme}) => ({
  flexGrow: 0,
  padding: '88px 160px 78px 160px',
  backgroundColor: theme.palette.grey[100],
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
