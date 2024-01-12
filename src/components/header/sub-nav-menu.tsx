import {useState} from 'react'
import {Popper, Paper, List, ListItem, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'
import usePostLogout from '@hooks/use-post-logout'

const SubNavMenu = ({title}: {title: string}) => {
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
        {title}
      </Typography>
      <Popper id="mouse-over-popper" open={open} anchorEl={anchorEl}>
        <Paper
          sx={{
            borderRadius: '12px',
            border: '1px solid black',
          }}
        >
          <NavList>
            <NavListItem>
              <NavLink to="/mypage/100">
                <Typography variant="body3">마이 페이지</Typography>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/reviews/writer">
                <Typography variant="body3">리뷰 작성</Typography>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/settings">
                <Typography variant="body3">프로필 편집</Typography>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/#">
                <Typography variant="body3" onClick={() => logout()}>
                  로그아웃
                </Typography>
              </NavLink>
            </NavListItem>
          </NavList>
        </Paper>
      </Popper>
    </>
  )
}

export default SubNavMenu

const NavList = styled(List)({})

const NavListItem = styled(ListItem)({
  color: '#000',
  width: '177px;',
  padding: ' 10px 8px;',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#f1f1f5',
  },
})

const NavLink = styled(Link)({
  display: 'block',
  color: '#000',
  width: '100%',
  textAlign: 'center',
})
