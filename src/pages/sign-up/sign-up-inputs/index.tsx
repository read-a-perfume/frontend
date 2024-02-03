import List from '@mui/material/List'
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
  const {handleUserNameConfirm, handleUserNameChange} = usePostUserNameConfirm({
    successMessage: '사용 가능한 아이디입니다',
    failedMessage: '아이디 중복입니다.',
    userId: username.field.value,
  })
  const {handleEmailAuthCodeCheck} = usePostEmailAuthCode({
    successMessage: '이메일 인증이 완료되었습니다.',
    failedMessage: '이메일 인증이 실패했습니다.',
  })
  const {handleEmailSend, handleEmailChange} = usePostEmailSender({
    successMessage: '인증코드가 전송되었습니다.',
    failedMessage: '중복된 이메일입니다.',
  })

  return (
    <List sx={{width: '100%'}}>
      <UserNameSection
        username={username}
        handleUserNameConfirm={handleUserNameConfirm}
        handleUserNameChange={handleUserNameChange}
      />
      <PasswordSection password={password} />
      <PasswordConfirmSection passwordConfirm={passwordConfirm} />
      <EmailSenderSection
        email={email}
        handleEmailSend={handleEmailSend}
        handleEmailChange={handleEmailChange}
      />
      <EmailAuthCodeSection
        currentEmail={email.field.value}
        emailAuthCode={emailAuthCode}
        handleEmailAuthCodeCheck={handleEmailAuthCodeCheck}
      />
    </List>
  )
}

export default SignupInputs
