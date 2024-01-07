import styled from '@emotion/styled'
import {Button, OutlinedInput, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import {theme} from '@theme/index.js'
import HeaderNavBar from '@components/header/header-nav-bar'
import HeaderSubNav from './header-sub-nav'

const Header = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderSubNav />
        <HeaderNavBar />
      </HeaderLayout>
    </>
  )
}

export default Header

const HeaderLayout = styled.div({
  width: '100%',
  height: '152px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '1px solid black',
})

export const HeaderNavigation = styled.div(({height}: {height: string}) => ({
  width: 1200,
  height: height,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '20px',
  '&:nth-of-type(2)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export const NavTop = styled(Link)({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
  color: 'black',
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
