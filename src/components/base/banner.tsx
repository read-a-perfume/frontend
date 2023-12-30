import {Box, Typography, styled} from '@mui/material'

interface proptype {
  text?: string
}

const Banner = ({text = ''}: proptype) => {
  return (
    <_Banner>
      <BannerImg src="/images/banner.png" width={100} />
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
  height: '100%',
}))

const BannerText = styled(Typography)(() => ({
  width: '1200px',
  height: '116px',
  fontFamily: 'AritaBuri',
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: 1.6,
  color: '#fff',
  zIndex: 1,
}))
