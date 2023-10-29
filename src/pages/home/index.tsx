import Header from '../../layouts/header'
import LoginModal from '@components/modal/login-modal'
import Magazines from './magazines'
import Notes from './notes'
import Review from './review'
import {useState} from 'react'
import {Banner, BannerBox, BannerImage, Content, Title} from './index.style'
import styled from '@emotion/styled'
import Button from '@components/base/button.js'

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = false
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header />
      <Banner onClick={() => setIsOpen(!isLoggedIn ? true : false)}>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
          </Title>
          <Button
            text="리뷰 작성하기"
            width="178px"
            height="54px"
            color="white"
            backgroundColor="transparent"
            fontSize="lg"
            style={{marginTop: '79px', zIndex: 2, border: '1px solid white'}}
          />
        </BannerBox>
      </Banner>
      <CustomContent>
        <Magazines />
        <Notes />
        <Review />
      </CustomContent>
    </>
  )
}

const CustomContent = styled(Content)`
  box-sizing: border-box;
`
