import {Chip, styled} from '@mui/material'

interface proptype {
  active: boolean
}

const FeedChip = styled(Chip)<proptype>(({theme, active}) => ({
  margin: '0 28px 0 0',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.6',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: active ? '#fff' : '#a9a9a9',
  padding: '12px 0',
  height: '42px',
  backgroundColor: active ? theme.palette.primary.main : '',
}))

export default FeedChip
