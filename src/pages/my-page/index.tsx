import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import Header from '@layouts/header.js'
import FlexBox from '@layouts/flex-box.js'
import {Banner, BannerImage, BannerBox, Title} from '@pages/home/index.style.js'
import ProfileBox from './profile-box.js'
import ReviewBox from './review-box.js'
import FavoriteBox from './favorite-box.js'
import Feeds from './feeds.js'

const Category = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: 32,
  fontWeight: '600',
  color: '#0F0F0F',
  marginTop: 88,
  marginBottom: 64,
})

const MyPage = () => {
  return (
    <>
      <Header />
      <Banner>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            ~~마이페이지관련멘트~~
          </Title>
        </BannerBox>
      </Banner>
      <div style={{margin: '0px 160px'}}>
        <Category>마이 페이지</Category>
        <FlexBox justifyContent="space-between" style={{marginBottom: 112}}>
          <ProfileBox />
          <ReviewBox />
          <FavoriteBox />
        </FlexBox>
        <Category>피드 모아보기</Category>
        <Feeds />
      </div>
    </>
  )
}

export default MyPage
