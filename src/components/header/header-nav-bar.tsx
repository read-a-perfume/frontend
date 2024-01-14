import {AppBar, Box, Toolbar, Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'

const menuData: {url: string; name: string; id: number}[] = [
  {url: '/', name: '홈', id: 1},
  {url: '/reviews', name: '리뷰', id: 2},
  {url: '/brands', name: '브랜드', id: 3},
  {url: '/perfumes', name: '제품', id: 4},
]

const HeaderNavBar = () => {
  return (
    <Container position="static">
      <ToolbarWrapper>
        <Navigation to="/">
          <Typography variant="h1" fontSize={32} fontFamily="Arita buri">
            Read a Perfume
          </Typography>
        </Navigation>
        <Box sx={{display: 'flex', gap: '33px', marginLeft: '103px'}}>
          {menuData.map(e => (
            <Navigation key={e.id} to={e.url}>
              {e.name}
            </Navigation>
          ))}
        </Box>
        {/* 다른 메뉴들도 menuData 조작해서 추가 가능 */}
      </ToolbarWrapper>
    </Container>
  )
}

export default HeaderNavBar

const Container = styled(AppBar)({
  width: '1200px',
  background: '#fff',
  boxShadow: 'none',
  '& > .MuiToolbar-root': {
    boxShadow: 0,
  },
})

const ToolbarWrapper = styled(Toolbar)({})

const Navigation = styled(Link)({
  display: 'block',
  fontSize: '18px',
  color: '#000',
  padding: '0 10px',
})
