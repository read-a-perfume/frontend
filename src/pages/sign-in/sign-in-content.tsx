import {Dialog} from '@mui/material'
import styled from '@emotion/styled'
import SignInForm from './sign-in-form.js'

type SignIn = {
  isDialog: boolean
  changeSignInDialog: any
}

const SignInContent = ({...props}: SignIn) => {
  return (
    <SignInDialog
      open={props.isDialog}
      onClose={props.changeSignInDialog}
      fullWidth
    >
      <SignInForm />
    </SignInDialog>
  )
}

export default SignInContent
const SignInDialog = styled(Dialog)(() => ({
  maxWidth: 420,
  margin: '0 auto',
}))
