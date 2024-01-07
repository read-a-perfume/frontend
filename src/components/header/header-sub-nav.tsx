import FlexBox from '@layouts/flex-box'
import {HeaderNavigation} from '.'
import {styled} from '@mui/material'
import {Link} from 'react-router-dom'

const HeaderSubNav = () => {
  return (
    <HeaderNavigation height="58px">
      <FlexBox gap="4px">
        <NavTop to="/sign-up">회원가입</NavTop>
        <NavTop to="/sign-in">로그인</NavTop>
      </FlexBox>
    </HeaderNavigation>
  )
}

export default HeaderSubNav
export const NavTop = styled(Link)({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
  color: 'black',
})
