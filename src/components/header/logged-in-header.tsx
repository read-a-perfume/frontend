import {HeaderNavigation, NavTop} from '@layouts/header'
import styled from '@emotion/styled'
import {useRef, useState} from 'react'
import Avatar from '@components/base/avatar'
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {postLogout} from 'src/store/server/auth/mutations'

interface LoggedInHeaderProps {
  thumbnail: string
  isLoggedIn: boolean
  onOpenLoginModal: () => void
  onOpenNotification: () => void
}

const LoggedInHeader = ({
  thumbnail,
  isLoggedIn,
  onOpenLoginModal,
  onOpenNotification,
}: LoggedInHeaderProps) => {
  const anchorRef = useRef<HTMLButtonElement>(null)
  const navigation = useNavigate()
  const [myPagePop, setMyPagePopOpen] = useState<boolean>(false)

  const handleClose = async (
    event: Event | React.SyntheticEvent,
    name: string,
  ) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    switch (name) {
      case 'review':
        setMyPagePopOpen(false)
        navigation('/reviews/writer')
        break
      case 'profile':
        setMyPagePopOpen(false)
        navigation('/settings')
        break
      case 'logout':
        console.log('logout!')
        setMyPagePopOpen(false)
        await postLogout()
        break
    }
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setMyPagePopOpen(false)
    } else if (event.key === 'Escape') {
      setMyPagePopOpen(false)
    }
  }

  return (
    <HeaderNavigation height="58px">
      <NavTop
        onClick={() =>
          !isLoggedIn ? onOpenLoginModal() : onOpenNotification()
        }
      >
        알림
      </NavTop>
      <Divider />
      <MyPageBox
        ref={anchorRef}
        color="inherit"
        aria-controls={myPagePop ? 'composition-menu' : undefined}
        aria-expanded={myPagePop ? 'true' : undefined}
        aria-haspopup="true"
        onClick={() => setMyPagePopOpen(prevOpen => !prevOpen)}
      >
        {thumbnail ? <Avatar size="26px" url={thumbnail} /> : <NoAvatar />}

        <NavTop>마이페이지</NavTop>
      </MyPageBox>
      <Popper
        open={myPagePop}
        anchorEl={anchorRef.current}
        placement="top"
        transition
        disablePortal
        sx={{zIndex: 1}}
      >
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
              height: 123,
              width: 177,
              borderRadius: 8,
              border: '1px solid #191919',
              marginLeft: 80,
              marginTop: 7,
            }}
          >
            <Paper sx={{overflow: 'hidden'}}>
              <ClickAwayListener onClickAway={() => setMyPagePopOpen(false)}>
                <MenuList
                  autoFocusItem={myPagePop}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{paddingTop: 0}}
                >
                  <PopupItem onClick={e => handleClose(e, 'review')}>
                    리뷰 작성
                  </PopupItem>
                  <PopupItem onClick={e => handleClose(e, 'profile')}>
                    프로필 편집
                  </PopupItem>
                  <PopupItem onClick={e => handleClose(e, 'logout')}>
                    로그아웃
                  </PopupItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </HeaderNavigation>
  )
}

export default LoggedInHeader

const Divider = styled.div({
  width: 1,
  height: 12,
  backgroundColor: '#D2D2D2',
})

export const NoAvatar = styled.div({
  height: 26,
  width: 26,
  borderRadius: 20,
  background: '#F1F1F5',
})

const MyPageBox = styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  marginLeft: -8,
})

const PopupItem = styled(MenuItem)({
  fontSize: 14,
  fontWeight: '500',
  color: '#191919',
  height: 40.5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: '#F1F1F5',
    overflow: 'hidden',
  },
})
