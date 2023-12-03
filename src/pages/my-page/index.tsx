import {Box, Typography, styled} from '@mui/material'
import ProfileSection from './profile-section/profile-section'
import FeedSection from './feed-section/feed-section'

const MyPage = () => {
  return (
    <div>
      <Banner>
        <BannerText variant="h1">마이페이지 관련 멘트</BannerText>
      </Banner>
      <ContentSection>
        <Title variant="h1">마이페이지</Title>
        <ProfileSection />
        <Title variant="h1">피드모아보기</Title>
        <FeedSection />
      </ContentSection>
    </div>
  )
}

export default MyPage

const Banner = styled(Box)(() => ({
  width: '100%',
  height: '470px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '160px',
  backgroundColor: 'black',
}))

const BannerText = styled(Typography)(() => ({
  width: '681px',
  height: '116px',
  fontFamily: 'Arita-buri',
  fontSize: '36px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.6,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#fff',
}))

const ContentSection = styled(Box)(({theme}) => ({
  flexGrow: 0,
  padding: '0 160px 78px 160px',
  backgroundColor: theme.palette.grey[100],
}))

const Title = styled(Typography)(() => ({
  marginTop: '88px',
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
