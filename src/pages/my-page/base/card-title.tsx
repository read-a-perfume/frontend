import {Typography, styled} from '@mui/material'

const CardTitle = styled(Typography)(({theme}) => ({
  fontFamily: 'Pretendard',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: theme.palette.grey['500'],
  marginBottom: '24px',
}))

export default CardTitle

CardTitle.defaultProps = {
  variant: 'h2',
}
