import {Box, Typography, styled} from '@mui/material'

// just temporary
const Banner = () => {
  return (
    <_Banner>
      <BannerText>마이페이지 관련 멘트</BannerText>
    </_Banner>
  )
}

export default Banner

const _Banner = styled(Box)(() => ({
  width: '100%',
  height: '470px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '160px',
  backgroundColor: 'black',
}))

const BannerText = styled(Typography)(() => ({
  width: '681px',
  height: '116px',
  fontFamily: 'AritaBuri',
  fontSize: '36px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.6,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#fff',
}))
