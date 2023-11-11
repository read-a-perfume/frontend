import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/index'

export const FindSpan = styled(Typography)(({color}: {color?: string}) => ({
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: color === 'blue' ? '#379070' : theme.palette.grey[500],
  textDecoration: color === 'blue' ? 'underline' : 'none',
  cursor: color === 'blue' ? 'pointer' : 'auto',
}))

export const FindLayout = styled.div({
  // padding: '48px 58px 0px 58px'
})

export const Label = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  color: theme.palette.grey[700],
  marginBottom: '10px',
})

export const SendEmailSpan = styled(Typography)(
  ({textType}: {textType?: string}) => ({
    fontSize:
      textType === 'title'
        ? theme.typography.h1.fontSize
        : theme.typography.body2.fontSize,
    fontWeight: textType === 'title' ? 700 : 500,
    color: textType === 'title' ? 'black' : theme.palette.grey[800],
    marginBottom: textType === 'title' ? '16px' : '40px',
  }),
)

export const SendEmailContainer = styled.div({
  marginTop: '83px',
})
