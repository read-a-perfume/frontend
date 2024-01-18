import Box from '@mui/material/Box'
import SignUpForm from './sign-up-form'
import styled from '@mui/material/styles/styled'
export type SignUpType = 'personal' | 'enterprise' | ''

export default function SignUp() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  )
}

const Container = styled(Box)(() => ({
  background: '#FAFAFA',
}))
