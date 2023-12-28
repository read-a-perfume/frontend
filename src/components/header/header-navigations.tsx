import React, {useState} from 'react'
import FlexBox from '../../layouts/flex-box'
import {useLocation, useNavigate} from 'react-router-dom'
import RoundButton from '@components/base/round-button'
import {FormControl, IconButton, InputAdornment} from '@mui/material'
import CustomIcons from '@assets/icons/custom-Icons'
import {HeaderNavigation, Input, Logo, NavBottom} from '../../layouts/header'

interface HeaderNavigation {
  editorPostCompleted?: boolean
  isLoggedIn: boolean
}

const HeaderNavigations = ({
  editorPostCompleted,
  isLoggedIn,
}: HeaderNavigation) => {
  const isUploading = true
  const navigate = useNavigate()
  const location = useLocation()
  const [keyword, setKeyword] = useState<string>('')
  const colorsWhenDisabled = !editorPostCompleted ? '#F1F1F5' : '#FE7156'

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      navigate('/sign-in')
    } else {
      setKeyword(event?.target.value)
    }
  }

  const rightComponent = () => {
    if (location.pathname.split('/').includes('post')) {
      return (
        <div>
          {isUploading ? (
            <FlexBox justifyContent="flex-end">
              <RoundButton
                text="업로드 중"
                borderColor="#FE7156"
                width="218px"
                backgroundColor="#FE7156"
                style={{color: 'white'}}
              />
            </FlexBox>
          ) : (
            <FlexBox gap="16px">
              <RoundButton
                text="취소"
                borderColor="#DBDBDB"
                width="184px"
                backgroundColor="white"
              />
              <RoundButton
                text="매거진 업로드"
                borderColor={colorsWhenDisabled}
                width="248px"
                backgroundColor={colorsWhenDisabled}
                style={{color: !editorPostCompleted ? '#A9A9A9' : 'white'}}
                disabled={!editorPostCompleted}
              />
            </FlexBox>
          )}
        </div>
      )
    } else {
      return (
        <FormControl>
          <Input
            placeholder="향수,브랜드,뉴스 무엇이든 검색해보세요!"
            endAdornment={
              <InputAdornment position="end">
                <IconButton style={{marginRight: '-5px'}}>
                  <CustomIcons.SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={changeHandler}
            value={keyword}
          />
        </FormControl>
      )
    }
  }

  return (
    <HeaderNavigation height="94px">
      <FlexBox justifyContent="space-between">
        <FlexBox alignItems="center">
          <Logo
            src={'/images/logo-text.png'}
            alt="logo"
            onClick={() => navigate('/')}
          />
        </FlexBox>
        <FlexBox style={{width: '588px'}} justifyContent="center">
          <FlexBox alignItems="center" gap="54px">
            <NavBottom onClick={() => navigate('/')}>홈</NavBottom>
            <NavBottom
              onClick={() =>
                !isLoggedIn ? navigate('/sign-in') : console.log('')
              }
            >
              리뷰
            </NavBottom>
            <NavBottom
              onClick={() =>
                !isLoggedIn ? navigate('/sign-in') : navigate('/brands')
              }
            >
              브랜드
            </NavBottom>
            <NavBottom
              onClick={() =>
                !isLoggedIn ? navigate('/sign-in') : navigate('/perfumes')
              }
            >
              제품
            </NavBottom>
            <NavBottom
              onClick={() =>
                !isLoggedIn ? navigate('/sign-in') : console.log('')
              }
            >
              뉴스
            </NavBottom>
          </FlexBox>
        </FlexBox>
        {rightComponent()}
      </FlexBox>
    </HeaderNavigation>
  )
}

export default HeaderNavigations
