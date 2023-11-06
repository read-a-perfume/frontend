import LoginModal from '@components/modal/login-modal'
import Magazines from './magazines'
import Notes from './notes'
import Review from './review'
import {useState} from 'react'
import {
  Banner,
  BannerBox,
  BannerButton,
  BannerImage,
  Content,
  Title,
} from './index.style'
import {styled} from '@mui/material'

export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = false
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner onClick={() => setIsOpen(!isLoggedIn ? true : false)}>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
          </Title>
          <BannerButton variant="outlined">리뷰 작성하기</BannerButton>
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
