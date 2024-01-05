import {List} from '@mui/material'
import usePostCheckDuplicate from '../hooks/use-post-check-duplicate '
import useFormValidate from '../hooks/use-form-validate'
import UserNameSection from './sign-up-validation/user-name-section'
import PasswordSection from './sign-up-validation/password-section'
import PasswordConfirmSection from './sign-up-validation/password-confirm-section'
import EmailConfirmSenderSection from './sign-up-validation/email-confirm-sender-section'
import EmailAuthCodeConfirmSection from './sign-up-validation/email-auth-code-confirm-section'

const SignupInputs = () => {
  const {username, password, passwordConfirm, email, emailAuth} =
    useFormValidate()
  const {handleUsernameCheck, handleEmailConfirmSend, handleEmailComfirmCheck} =
    usePostCheckDuplicate({
      successMessage: '사용 가능합니다',
      failedMessage: '아이디 중복입니다.',
      userId: username.field.value,
    })

  return (
    <List sx={{width: '100%'}}>
      <UserNameSection
        username={username}
        handleUsernameCheck={handleUsernameCheck}
      />
      <PasswordSection password={password} />
      <PasswordConfirmSection passwordConfirm={passwordConfirm} />
      <EmailConfirmSenderSection
        email={email}
        handleEmailConfirmSend={handleEmailConfirmSend}
      />
      <EmailAuthCodeConfirmSection
        emailCode={emailAuth}
        confirmEmail={handleEmailComfirmCheck}
      />
    </List>
  )
}

export default SignupInputs
