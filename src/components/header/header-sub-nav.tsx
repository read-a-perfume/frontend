import FlexBox from '@layouts/flex-box'
import {HeaderNavigation} from '.'
import Avatar from '@mui/material/Avatar'
import styled from '@mui/material/styles/styled'
import {Link} from 'react-router-dom'
import SubNavMenu from './sub-nav-menu'
// import {useRecoilValue} from 'recoil'
// import {UserProfileAtom} from 'src/store/client/auth/atoms'
import {useState} from 'react'
import NotificationModal from '@components/modal/notification-modal'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'

const HeaderSubNav = () => {
  // const user = useRecoilValue(UserProfileAtom)
  const {data: user, isLoading, isError} = useFetchAuthProfile()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <NotificationModal isOpen={open} setIsOpen={setOpen} />
      <HeaderNavigation height="58px">
        {!isLoading &&
          (isError ? (
            <FlexBox gap="4px">
              <NavTop to="/sign-up">회원가입</NavTop>
              <NavTop to="/sign-in">로그인</NavTop>
            </FlexBox>
          ) : (
            <FlexBox gap="4px" alignItems="center">
              <NavTop to="#" onClick={handleOpen}>
                알림
              </NavTop>
              <VerticalLine />
              <UserIcon src={user.thumbnail} />
              <SubNavMenu user={user} />
            </FlexBox>
          ))}
      </HeaderNavigation>
    </>
  )
}

export default HeaderSubNav
export const NavTop = styled(Link)({
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  color: 'black',
})

const UserIcon = styled(Avatar)({
  marginRight: '10px',
  width: 26,
  height: 26,
})

const VerticalLine = styled('div')({
  position: 'relative',
  display: 'inline-block',
  margin: '0 10px',
  width: '1px',
  height: '12px',
  backgroundColor: '#d2d2d2',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '10px',
    backgroundColor: 'transparent',
  },
  '&::before': {
    left: '-10px',
  },
  '&::after': {
    right: '-10px',
  },
})
