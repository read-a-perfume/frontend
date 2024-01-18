import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'

const Content = styled(Typography)<{$flag: boolean}>(({theme, $flag}) => ({
  padding: '0 23px',
  fontSize: theme.typography.body4.fontSize,
  borderRight: `${$flag ? '1px solid #707070' : 'none'}`,
  color: 'white',
  height: '18px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}))

export default Content
