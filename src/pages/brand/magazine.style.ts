import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {AddBannerSpan, AddImageButton} from './brand.style'
import {theme} from '@theme/index'
import CustomIcons from '@assets/icons/custom-Icons'

// PostMagazine

export const HeaderImage = styled.header({
  width: '100%',
  height: '470px',
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BannerContent = styled(AddBannerSpan)({
  zIndex: 2,
  textAlign: 'center',
  marginBottom: 106,
})

export const BannerButton = styled(AddImageButton)(
  ({image}: {image: boolean}) => ({
    zIndex: 2,
    background: image ? '#FE7156' : '#202020',
  }),
)

export const EditorTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: '500',
  color: '#191919',
  marginRight: 40,
})

export const TitleInput = styled.input({
  height: 55,
  border: 'none',
  borderBottom: '1px solid #DBDBDB',
  fontSize: 18,
  fontWeight: '500',
})

export const AddButton = styled.div({
  width: 112,
  height: '100%',
  borderLeft: '1px solid #DBDBDB',
  borderRight: '1px solid #DBDBDB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:nth-of-type(3)': {
    borderRight: '1px solid #DBDBDB',
  },
  '&:hover': {
    background: 'transparent',
  },
})

export const AttributeText = styled(Typography)({
  color: '#191919',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: '500',
  marginLeft: 2,
})

export const AddImage = styled.div({
  width: 1192,
  height: 586,
  borderRadius: 16,
  background: '#F1F1F5',
  border: '1px solid #EDEDED',
  display: 'flex',
  flexDirection: 'column',
})

export const ContentImage = styled.img({
  width: 1192,
  height: 586,
  objectFit: 'fill',
  position: 'absolute',
  zIndex: 1,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
  borderRadius: 16,
})

export const OptionsIcon = styled(CustomIcons.HamburgerIcon)({
  zIndex: 2,
  position: 'absolute',
  marginTop: 32,
  cursor: 'pointer',
})

export const AddButtonText = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: '#191919',
  marginLeft: 6,
})

export const TextBox = styled.div({
  marginLeft: 160,
  marginRight: 160,
  marginTop: 34,
})

export const ImageDefault = styled.div({
  width: 1192,
  marginTop: 34,
  marginBottom: 34,
  height: 586,
  background: '#F1F1F5',
  border: '1px solid #EDEDED',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PostFooter = styled.div({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  height: 112,
  borderTop: '1px solid black',
  padding: '0px 160px',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
