import {Typography, styled} from '@mui/material'
import ProfileSection from './profile-section/profile-section'

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
      </ContentSection>
    </div>
  )
}

export default MyPage

const Banner = styled('div')`
  width: 1920px;
  height: 470px;
  display: flex;
  align-items: center;
  padding-left: 160px;

  background-color: black;
`

const BannerText = styled(Typography)`
  width: 681px;
  height: 116px;
  font-family: Arita-buri(OTF);
  font-size: 36px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`

const ContentSection = styled('div')`
  flex-grow: 0;
  padding: 0 160px 78px 160px;
  background-color: #fafafa;
`

const Title = styled(Typography)`
  margin-top: 88px;
  margin-bottom: 64px;
  font-family: Arita-buri(OTF);
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  text-align: left;
  color: #0f0f0f;
`
