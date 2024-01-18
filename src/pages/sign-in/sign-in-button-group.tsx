import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import {Link} from 'react-router-dom'

const SignInButtonGroup = () => {
  return (
    <>
      <CustomButton
        variant="contained"
        type="submit"
        sx={{background: '#202020'}}
      >
        로그인
      </CustomButton>
      <Box>
        <Line variant="body4">또는</Line>
      </Box>
      <CustomButton
        variant="outlined"
        sx={{mt: 1, background: '#fff', color: '#000'}}
      >
        Google 로그인
      </CustomButton>
      <AdditionOptions variant="body4">
        아직 회원이 아니신가요? <Link to="/sign-up">회원가입하기</Link>
      </AdditionOptions>
    </>
  )
}

export default SignInButtonGroup

const CustomButton = styled(Button)({
  boxShadow: 'none',
  width: 342,
  height: 54,
  color: '#fff',
  borderRadius: 10,
  borderColor: '#EFEFEF',
  '&:hover': {
    borderColor: '#EFEFEF',
  },
})

const Line = styled(Typography)({
  '&': {
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  '&:before,&:after': {
    content: "''",
    width: '136px',
    height: '1px',
    backgroundColor: '#B4B4B4',
  },
  '&:before': {
    marginRight: '21px',
  },
  '&:after': {
    marginLeft: '21px',
  },
})

const AdditionOptions = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
  '& a': {
    marginLeft: '10px',
    color: '#000',
    fontWeight: '600',
  },
})
