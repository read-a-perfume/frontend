import styled from '@emotion/styled'
import {Button, OutlinedInput, Typography} from '@mui/material'
import {FormControl, IconButton, InputAdornment} from '@mui/material'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import RoundButton from '@components/base/round-button.js'
import FlexBox from './flex-box.js'
import CustomIcons from '@assets/icons/custom-Icons.js'
import NotificationModal from '@components/modal/notification-modal/index.js'
import LoginModal from '@components/modal/login-modal/index.js'
import {theme} from '@theme/index.js'

const Header = ({editorPostCompleted}: {editorPostCompleted?: boolean}) => {
  const navigate = useNavigate()
  const isLoggedIn = true
  const isUploading = true
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [popOpen, setPopOpen] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const location = useLocation()

  const colorsWhenDisabled = !editorPostCompleted ? '#F1F1F5' : '#FE7156'

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      setIsOpen(true)
    } else {
      setKeyword(event?.target.value)
    }
  }

  const rightComponent = () => {
    if (location.pathname.split('/').includes('post')) {
      return (
        <>
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
        </>
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
    <>
      <NotificationModal isOpen={popOpen} setIsOpen={setPopOpen} />
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderLayout style={{display: 'flex', flexDirection: 'column'}}>
        <HeaderNavigation height="58px">
          <NavTop
            onClick={() => (!isLoggedIn ? setIsOpen(true) : setPopOpen(true))}
          >
            알림
          </NavTop>
          <NavTop
            onClick={() =>
              !isLoggedIn ? setIsOpen(true) : navigate('/mypage')
            }
          >
            마이페이지
          </NavTop>
        </HeaderNavigation>
        <HeaderNavigation height="94px">
          <FlexBox>
            <Logo
              src={'/images/logo-text.png'}
              alt="logo"
              onClick={() => navigate('/')}
            />
            <FlexBox
              alignItems="center"
              gap="52px"
              style={{marginLeft: '182px'}}
            >
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('home')
                }
              >
                Home
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('service 링크')
                }
              >
                Our Service
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('brand 링크')
                }
              >
                Brand
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('note 링크')
                }
              >
                Note
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('news 링크')
                }
              >
                News
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : navigate('/perfumes')
                }
              >
                Perfumes
              </NavBottom>
            </FlexBox>
          </FlexBox>
          {rightComponent()}
        </HeaderNavigation>
      </HeaderLayout>
    </>
  )
}

export default Header

const HeaderLayout = styled.div({
  height: '152px',
  display: 'flex',
  width: '100%',
  borderBottom: '1px solid black',
})

const HeaderNavigation = styled.div(({height}: {height: string}) => ({
  width: '100%',
  height: height,
  paddingLeft: '160px',
  paddingRight: '160px',
  display: 'flex',
  gap: '28px',
  justifyContent: 'end',
  alignItems: 'center',
  '&:nth-of-type(2)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const NavTop = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
})

export const NavBottom = styled(Typography)({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
})

export const Logo = styled.img({
  width: '236px',
  height: '28.81px',
  objectFit: 'contain',
  cursor: 'pointer',
})

export const Input = styled(OutlinedInput)({
  width: '376px',
  height: '36.4px',
  fontSize: theme.typography.body3.fontSize,
  '& fieldset': {
    border: '1px solid #EDEDED',
    borderRadius: '10px',
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.body3.fontSize,
    },
  },
})

export const PostButtons = styled(Button)(
  ({btntype, disabled}: {btntype: string; disabled?: boolean}) => ({
    width: btntype === 'cancel' ? 184 : 248,
    height: 46,
    borderRadius: 10,
    border:
      btntype === 'cancel'
        ? '1px solid #DBDBDB'
        : disabled
        ? '1px solid #F1F1F5'
        : '1px solid #FE7156',
    background:
      btntype === 'cancel' ? 'white' : disabled ? '#F1F1F5' : '#FE7156',
    fontSize: theme.typography.body2.fontSize,
    color: btntype === 'cancel' ? '#A9A9A9' : 'white',
    fontWeight: '500',
    '&:hover': {
      background: btntype === 'cancel' ? 'white' : '#FE7156',
    },
  }),
)
