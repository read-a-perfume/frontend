import Box from '@mui/material/Box'
import {styled} from '@mui/material'
import SignInForm from './sign-in-form'

const SignIn = () => {
  return (
    <Wrapper>
      <Container>
        <SignInForm />
      </Container>
    </Wrapper>
  )
}
export default SignIn

const Wrapper = styled(Box)({
  position: 'relative',
  height: 'calc(100vh - 150px)',
})

const Container = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '458px',
})
