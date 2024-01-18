import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import {Link} from 'react-router-dom'
import {IfFormFooterProps} from '../types'

const SignUpFooter = ({subText, title}: IfFormFooterProps) => {
  return (
    <LoginLinkFooter>
      <Typography color={theme => theme.palette.grey[400]} variant="body4">
        {subText}
      </Typography>
      <CustomLink to="#">{title}</CustomLink>
    </LoginLinkFooter>
  )
}
export default SignUpFooter

const CustomLink = styled(Link)(({theme}) => ({
  cursor: 'pointer',
  margin: '0px 4px',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  color: theme.palette.secondary.main,
  textDecoration: 'underline',
  marginLeft: 8,
}))

const LoginLinkFooter = styled(Box)(({theme}) => ({
  display: 'flex',
  '& *': {
    fontSize: theme.typography.body4.fontSize,
  },
  marginLeft: '68px',
}))
