import {AppBar, Box, Toolbar, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'

const HeaderNavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: '1200px',
        background: '#fff',
        boxShadow: 'none',
        '& > .MuiToolbar-root': {
          boxShadow: 0,
        },
      }}
    >
      <ToolbarWrapper>
        <Navigation to="/">
          <Typography variant="h1" fontSize={32}>
            Read a Perfume
          </Typography>
        </Navigation>
        <Box sx={{display: 'flex', gap: '33px', marginLeft: '103px'}}>
          <Navigation to="/">홈</Navigation>
          <Navigation to="/reviews">리뷰</Navigation>
          <Navigation to="/brands">브랜드</Navigation>
          <Navigation to="/perfumes">제품</Navigation>
        </Box>
        {/* 다른 메뉴들도 추가 가능 */}
      </ToolbarWrapper>
    </AppBar>
  )
}

export default HeaderNavBar

const ToolbarWrapper = styled(Toolbar)({})

const Navigation = styled(Link)({
  display: 'block',
  fontSize: '18px',
  color: '#000',
  padding: '0 10px',
})
