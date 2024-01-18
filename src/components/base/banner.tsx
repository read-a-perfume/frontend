import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'

interface proptype {
  text?: string
}

const Banner = ({text = ''}: proptype) => {
  return (
    <_Banner>
      <BannerImg src="/images/banner.webp" alt="banner" height="470px" />
      <BannerText>{text}</BannerText>
    </_Banner>
  )
}

export default Banner

const _Banner = styled(Box)(() => ({
  width: '100%',
  height: '470px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative',
  top: 0,
}))

const BannerImg = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
}))

const BannerText = styled(Typography)(() => ({
  width: '1200px',
  height: '116px',
  fontFamily: 'Arita buri',
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: 1.6,
  color: '#fff',
  zIndex: 1,
}))
