import styled from '@emotion/styled'
import {Button, OutlinedInput, Typography} from '@mui/material'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FlexBox from './flex-box.js'
import NotificationModal from '@components/modal/notification-modal/index.js'
import LoginModal from '@components/modal/login-modal/index.js'
import {theme} from '@theme/index.js'
import {useRecoilValue} from 'recoil'
import HeaderNavigations from '@components/header/header-navigations.js'
import LoggedInHeader from '@components/header/logged-in-header.js'
import {UserProfileAtom} from 'src/store/client/auth/atoms.js'
const Header = ({editorPostCompleted}: {editorPostCompleted?: boolean}) => {
  const navigate = useNavigate()
  const isLoggedIn = useRecoilValue(UserProfileAtom)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false)
  console.log(isLoggedIn, 'isLoggedIn')
  return (
    <>
      <NotificationModal
        isOpen={notificationOpen}
        setIsOpen={setNotificationOpen}
      />
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderLayout>
        {isLoggedIn ? (
          <LoggedInHeader
            thumbnail={isLoggedIn ? isLoggedIn.thumbnail : ''}
            isLoggedIn={isLoggedIn}
            onOpenLoginModal={() => setIsOpen(true)}
            onOpenNotification={() => setNotificationOpen(true)}
          />
        ) : (
          <HeaderNavigation height="58px">
            <FlexBox gap="4px">
              <NavTop onClick={() => navigate('/sign-up')}>회원가입</NavTop>
              <NavTop>/</NavTop>
              <NavTop onClick={() => navigate('/sign-in')}>{' 로그인'}</NavTop>
            </FlexBox>
          </HeaderNavigation>
        )}
        <HeaderNavigations
          editorPostCompleted={editorPostCompleted}
          isLoggedIn={isLoggedIn}
          onOpen={() => setIsOpen(true)}
        />
      </HeaderLayout>
    </>
  )
}

export default Header

const HeaderLayout = styled.div({
  height: '152px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderBottom: '1px solid black',
})

export const HeaderNavigation = styled.div(({height}: {height: string}) => ({
  width: '100%',
  height: height,
  paddingLeft: 360,
  paddingRight: 360,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '20px',
  '&:nth-of-type(2)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export const NavTop = styled(Typography)({
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
