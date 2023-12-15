import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box'
import {Typography} from '@mui/material'
import {useRef, useState} from 'react'
import PublicProfile from './public-profile'
import Privacy from './privacy'
import AccountSettings from './account-settings'
import Header from '@layouts/header'
import {Banner, BannerBox, BannerImage} from '@pages/home/index.style'
import {Title} from './index.styles'
import {SettingsTitle} from '@pages/brand/brand.style'

export const Item = styled(Typography)(({clicked}: {clicked: boolean}) => ({
  width: 87,
  fontSize: 18,
  cursor: 'pointer',
  lineHeight: '20px',
  fontWeight: clicked ? 600 : 500,
  color: clicked ? '#FE7156' : '#191919',
  borderBottom: clicked ? '2px solid #FE7156' : '2px solid white',
  textAlign: 'left',
  paddingBottom: 8,
  marginRight: 48,
}))

export interface InputProps {
  introduction: string
  type: string[]
  birth: string
  gender: string
  email: string
  password: string
}

const SideNav = () => {
  const [navClicked, setNavClicked] = useState<string>('public')
  const firstBlock = useRef<HTMLDivElement>(null)
  const secondBlock = useRef<HTMLDivElement>(null)
  const thirdBlock = useRef<HTMLDivElement>(null)
  const [inputs, setInputs] = useState<InputProps>({
    introduction: '',
    type: [],
    birth: '',
    gender: 'male',
    email: '',
    password: '',
  })

  const clickHandler = (type: string) => {
    setNavClicked(type)
    secondBlock.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

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
      <FlexBox
        style={{
          width: '100%',
          height: '100%',
          paddingTop: 54,
          background: '#FAFAFA',
        }}
      >
        <FlexBox
          direction="column"
          alignItems="flex-end"
          style={{
            width: '35.5%',
            paddingRight: 138,
          }}
        >
          <SettingsTitle>설정 및 관리</SettingsTitle>
          <FlexBox gap="16px" direction="column">
            <Item
              onClick={() => clickHandler('public')}
              clicked={navClicked === 'public'}
            >
              공개 프로필
            </Item>
            <Item
              onClick={() => clickHandler('private')}
              clicked={navClicked === 'private'}
            >
              개인정보
            </Item>
            <Item
              onClick={() => clickHandler('account')}
              clicked={navClicked === 'account'}
            >
              계정관리
            </Item>
          </FlexBox>
        </FlexBox>
        <FlexBox style={{width: '70%', height: '100%'}} direction="column">
          <div ref={firstBlock}>
            <PublicProfile inputs={inputs} setInputs={setInputs} />
          </div>
          <div ref={secondBlock}>
            <Privacy inputs={inputs} setInputs={setInputs} />
          </div>
          <div ref={thirdBlock}>
            <AccountSettings inputs={inputs} setInputs={setInputs} />
          </div>
        </FlexBox>
      </FlexBox>
    </>
  )
}

export default SideNav
