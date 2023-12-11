import styled from '@emotion/styled'
import {Typography} from '@mui/material'

export const Banner = styled.div({
  width: '100%',
  height: '470px',
})

export const BannerImage = styled.img({
  width: '100%',
  height: '470px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

export const Title = styled(Typography)({
  fontSize: '36px',
  color: 'white',
  lineHeight: '150%',
  fontWeight: '600',
  zIndex: 0,
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
})

export const BannerBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  paddingLeft: '360px',
  paddingRight: '360px',
})

export const Content = styled.section({
  width: '100%',
  height: '100%',
  marginTop: 100,
  paddingLeft: 360,
  paddingRight: 360,
})

export const MagazineCard = styled.div({
  width: 512,
  height: 594,
})

export const SectionTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 18,
  fontWeight: '500',
  color: '#191919',
})

export const SectionSubTitle = styled(Typography)({
  fontSize: 12,
  fontWeight: '500',
  color: '#A9A9A9',
  marginTop: 5,
  marginBottom: 40,
})
