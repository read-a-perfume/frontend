import {Check} from '@mui/icons-material'
import {Box, styled} from '@mui/material'

interface proptype {
  flag: boolean
}

const SIZE = '25px'

const CustomCheck = ({flag}: proptype) => {
  return (
    <Container flag={flag}>
      <Check sx={{color: flag ? '#fff' : '#ddd'}} />
    </Container>
  )
}

export default CustomCheck

const Container = styled(Box)<{flag: boolean}>(({flag, theme}) => ({
  width: SIZE,
  height: SIZE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: flag ? theme.palette.primary.main : '#fff',
  alignSelf:'end',
  borderRadius: '50%',
}))
