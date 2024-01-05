import {List} from '@mui/material'
import useFormValidate from '../hooks/use-form-validate'
import UserNameSection from './user-name-section'
import PasswordSection from './password-section'
import PasswordConfirmSection from './password-confirm-section'
import EmailAuthCodeSection from './email-auth-code-section'
import usePostEmailSender from '../hooks/use-post-email-sender'
import usePostEmailAuthCode from '../hooks/use-post-email-auth-code'
import EmailSenderSection from './email-sender-section'
import usePostUserNameConfirm from '../hooks/use-post-user-name-confirm '

const SignupInputs = () => {
  const {username, password, passwordConfirm, email, emailAuthCode} =
    useFormValidate()
  const {handleUserNameConfirm } = usePostUserNameConfirm({
    successMessage: '사용 가능합니다',
    failedMessage: '아이디 중복입니다.',
    userId: username.field.value,
  })
  const {handleEmailAuthCodeCheck} = usePostEmailAuthCode()
  const {handleEmailSend, handleEmailChange} = usePostEmailSender()

  return (
    <List sx={{width: '100%'}}>
      <UserNameSection
        username={username}
        handleUserNameConfirm ={handleUserNameConfirm }
      />
      <PasswordSection password={password} />
      <PasswordConfirmSection passwordConfirm={passwordConfirm} />
      <EmailSenderSection
        email={email}
        handleEmailSend={handleEmailSend}
        handleEmailChange={handleEmailChange}
      />
      <EmailAuthCodeSection
        emailAuthCode={emailAuthCode}
        handleEmailAuthCodeCheck={handleEmailAuthCodeCheck}
      />
    </List>
  )
}

export default SignupInputs
