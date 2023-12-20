import styled from '@emotion/styled'
import {Typography} from '@mui/material'

export const ReviewLayout = styled.div<{width: string; height: string}>(
  ({width, height}) => ({
    maxWidth: 512,
    width,
    height,
    borderRadius: 16,
    border: '1px solid #EDEDED',
    background: 'white',
    padding: '17px 24px 0px 24px',
  }),
)

export const ReviewerID = styled(Typography)({
  fontSize: 16,
  fontWeight: '600',
  marginLeft: 16,
})

export const ImageBox = styled.div({
  marginTop: 20,
  marginBottom: 14,
})

export const SingleImageCover = styled.div({
  width: '100%',
  height: 184,
  borderRadius: 16,
  background: 'lightgrey',
})

export const MainImageCover = styled.div({
  width: 306,
  height: 184,
  borderRadius: 16,
  background: 'grey',
  overflow: 'hidden',
})

export const OtherImages = styled.div({
  width: 142,
  height: 184,
  borderRadius: 15,
})

export const OtherImagesTypo = styled(Typography)({
  fontSize: 22,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 2,
  width: 142,
  height: 184,
})

export const ReviewText = styled(Typography)({
  fontSize: 16,
  lineHeight: '150%',
  color: '#131313',
})

export const HashTags = styled(Typography)({
  fontSize: 14,
  color: '#FE7156',
})

export const Options = styled.div({
  width: '100%',
  height: 58,
  borderTop: '1px solid #EDEDED',
  display: 'flex',
  alignItems: 'center',
  gap: 22,
})

export const OptionsText = styled(Typography)({
  color: '#333',
  fontSize: 14,
  fontWeight: '500',
  marginLeft: 6,
})

export const ReviewImage = styled.img({
  width: 142,
  height: 184,
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 1,
  opacity: 0.75,
  borderRadius: 15,
})

export const ReviewMainImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const ReviewSingleImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 15,
})

export const MoreReviewsText = styled(Typography)({
  fontWeight: '500',
  color: '#707070',
})

export const ContentsBox = styled.div({
  // height: 100,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  paddingBottom: 17,
})
