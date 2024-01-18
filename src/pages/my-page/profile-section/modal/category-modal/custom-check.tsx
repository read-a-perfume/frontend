import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check'

const SIZE = '25px'

const CustomCheck = ({flag}) => {
  return (
    <Container flag={flag}>
      <Icon flag={flag} />
    </Container>
  )
}

export default CustomCheck

const Container = styled(Box)<{flag: boolean}>(({theme, flag}) => ({
  zIndex: 1,
  alignSelf: 'end',
  width: SIZE,
  height: SIZE,
  backgroundColor: flag ? theme.palette.primary.main : '#fff',
  borderRadius: '50%',
}))

const Icon = styled(CheckIcon)<{flag: boolean}>(({flag}) => ({
  width: SIZE,
  height: SIZE,
  color: flag ? '#fff' : '#bbb',
}))