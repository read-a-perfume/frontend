import {useState} from 'react'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import styled from '@mui/material/styles/styled'
import usePostLogout from '@hooks/use-post-logout'
import {IfLoginUserProfileResponse} from 'types/auth.interface'
import SubNavMenuElement from './sub-nav-menu-element'
import Typography from '@mui/material/Typography'

const SubNavMenu = ({user}: {user: IfLoginUserProfileResponse}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const {mutate: logout} = usePostLogout()

  const handleButtonClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <Typography
        variant="body3"
        onClick={handleButtonClick}
        color="black"
        sx={{cursor: 'pointer'}}
      >
        {user.username}
      </Typography>
      <Popper id="mouse-over-popper" open={open} anchorEl={anchorEl}>
        <Paper
          sx={{
            borderRadius: '12px',
            border: '1px solid black',
          }}
        >
          <NavList>
            <SubNavMenuElement
              url={`/mypage/${user.userId}`}
              title="마이 페이지"
              setAnchorEl={setAnchorEl}
            />
            <SubNavMenuElement
              url={`/reviews/writer`}
              title="리뷰 작성"
              setAnchorEl={setAnchorEl}
            />
            <SubNavMenuElement
              url={`/settings`}
              title="프로필 편집"
              setAnchorEl={setAnchorEl}
            />
            <SubNavMenuElement
              url={`/`}
              title="로그아웃"
              onClick={() => {
                logout()
              }}
              setAnchorEl={setAnchorEl}
            />
          </NavList>
        </Paper>
      </Popper>
    </>
  )
}

export default SubNavMenu

const NavList = styled(List)({})
