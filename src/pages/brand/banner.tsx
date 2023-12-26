import {Box, styled} from '@mui/material'

interface proptype {
  fileURL: string
}

const Banner = ({fileURL}: proptype) => {
  return (
    <BannerContainer flag={fileURL !== ''}>
      {fileURL && <BannerImage src={fileURL} alt="banner" />}
    </BannerContainer>
  )
}

export default Banner

const BannerContainer = styled(Box)<{flag: boolean}>(({flag}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: flag ? '470px' : '235px',
  backgroundColor: '#F1F1F1',
  position: 'relative',
  top: 0,
  borderBottom:'0.5px solid #ccc',
}))

const BannerImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
  objectFit: 'fill',
}))
