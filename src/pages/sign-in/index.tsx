import styled from '@emotion/styled'
import SignInForm from './sign-in-form'

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInForm />
    </SignInContainer>
  )
}
export default SignIn

const SignInContainer = styled.div({
  width: '458px',
  margin: 'auto',
})
