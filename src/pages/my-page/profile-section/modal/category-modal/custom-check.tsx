import {Box, styled} from '@mui/material'
//import CheckIcon from '@mui/icons-material/Check'

const SIZE = '25px'
/*
const CustomCheck = styled(Checkbox)<{flag: boolean}>(({flag, theme}) => ({
  zIndex: 1,
  alignSelf: 'end',
  width: SIZE,
  height: SIZE,
  backgroundColor: flag ? theme.palette.primary.main : '#fff',
  padding: 0,
  '& .MuiSvgIcon-root': {fontSize: SIZE},
  '&:hover': {
    opacity: 0.7,
    backgroundColor: flag ? theme.palette.primary.main : '#fff',
  },
}))

CustomCheck.defaultProps = {
  icon: <CheckIcon sx={{color: '#ddd'}} />,
  checkedIcon: <CheckIcon sx={{color: '#fff'}} />,
}
*/
const CustomCheck = ({flag}) => {
  return <Container flag={flag}></Container>
}

const Container = styled(Box)<{flag: boolean}>(({theme, flag}) => ({
  zIndex: 1,
  alignSelf: 'end',
  width: SIZE,
  height: SIZE,
  backgroundColor: flag ? theme.palette.primary.main : '#fff',
  borderRadius:'50%',
}))

export default CustomCheck
