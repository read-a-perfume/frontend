import styled from '@emotion/styled'
import {Box, Button, Modal, TextField, Typography} from '@mui/material'
import {theme} from '../../../theme'
import {FcGoogle} from 'react-icons/fc'
import CustomIcons from '../../../assets/icons/custom-Icons'

export const ModalInputStyle = {
  outline: 'none',
  '& .MuiInputBase-root': {
    height: 48,
    fontSize: theme.typography.body3.fontSize,
    fontWeight: 500,
  },
  '& fieldset': {
    border: 'none',
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.body3.fontSize,
      color: theme.palette.grey[500],
    },
  },
  '&:focus-within fieldset, &:focus-visible fieldset': {
    border: '1px solid #B4B4B4',
  },
}

export const inputStyle = {
  marginBottom: '28px',
  background: theme.palette.grey[100],
  ...ModalInputStyle,
}

export const ModalStyle = styled(Modal)({
  width: '458px',
  // minHeight: '683px',
  // maxHeight: '750px',
  top: '213px',
  left: '35%',
  bottom: '9%',
})

export const ModalLayout = styled(Box)({
  width: '100%',
  height: '100%',
  background: 'white',
  padding: '50px 58px 0px 58px',
})

export const ModalTitle = styled(Typography)({
  fontSize: theme.typography.h1.fontSize,
  color: theme.palette.grey[800],
  fontWeight: '400',
  marginBottom: '27px',
})

export const ModalTab = styled.div(({clicked}: {clicked: boolean}) => ({
  height: '56px',
  width: '171px',
  borderBottom: clicked
    ? '1px solid black'
    : `1px solid ${theme.palette.grey[400]}`,
  color: clicked ? 'black' : theme.palette.grey[400],
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))

export const NotChecked = styled(CustomIcons.DefaultCheckIcon)({
  marginRight: '6px',
  cursor: 'pointer',
})

export const Checked = styled(CustomIcons.YellowCheckIcon)({
  marginRight: '6px',
  cursor: 'pointer',
})

export const ModalInputs = styled(TextField)({
  background: theme.palette.grey[100],
  borderRadius: '4px',
  fontSize: theme.typography.body3.fontSize,
  color: theme.palette.grey[400],
  marginBottom: '10px',
})

export const FindPassword = styled(Typography)({
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: theme.palette.grey[400],
  paddingRight: '11px',
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  height: '12px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const FindId = styled(Typography)({
  fontWeight: 500,
  fontSize: theme.typography.body4.fontSize,
  color: theme.palette.grey[400],
  marginLeft: '11px',
  cursor: 'pointer',
})

export const GoogleButton = styled(Button)({
  height: '54px',
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  color: theme.palette.grey[800],
  background: 'white',
  border: '1px solid #EFEFEF',
  display: 'flex',
  justifyContent: 'left',
  marginTop: '24px',
  textTransform: 'none',
  '&:hover': {
    background: '#fff',
  },
})

export const Divider = styled.hr({
  height: '0px',
  border: '0.7px solid #B4B4B4',
  marginTop: '35px',
  position: 'relative',
  zIndex: 1,
})

export const DividerText = styled(Typography)({
  position: 'relative',
  zIndex: 2,
  marginTop: '-9px',
  background: 'white',
  width: '63px',
  textAlign: 'center',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  color: theme.palette.grey[400],
})

export const GoogleIcon = styled(FcGoogle)({
  marginLeft: '14px',
  marginRight: '67px',
  width: '24px',
  height: '24px',
})

export const ModalSpan = styled(Typography)(({color}: {color?: string}) => ({
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: color === 'blue' ? '#379070' : theme.palette.grey[500],
  textDecoration: color === 'blue' ? 'underline' : 'none',
  cursor: color === 'blue' ? 'pointer' : 'auto',
}))

export const TabContent = styled.div({
  display: 'flex',
  marginBottom: '34px',
})

export const ErrorText = styled(Typography)({
  color: theme.palette.warning.main,
  fontSize: theme.typography.body5.fontSize,
  fontWeight: 500,
  marginTop: '18px',
  marginBottom: '28px',
})
