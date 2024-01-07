import {AppBar, Box, Toolbar, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'

const HeaderNavBar = () => {
  return (
    <AppBar position="static" sx={{background: '#fff', boxShadow: 'none'}}>
      <ToolbarWrapper>
        <Typography variant="h6" fontSize={32}>
          Read a Perfume
        </Typography>
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

const ToolbarWrapper = styled(Toolbar)({
  '.MuiToolbar-root': {
    width: '1200px',
    marign: 'auto',
    boxShadow: 0,
  },
})

const Navigation = styled(Link)({
  display: 'block',
  fontSize: '18px',
  color: '#000',
  padding: '0 10px',
})
