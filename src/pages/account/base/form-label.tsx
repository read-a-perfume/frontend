import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'

const FormLabel = styled(Typography)(({theme}) => ({
  color: '#303030',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  marginBottom: '6px',
}))

export default FormLabel
