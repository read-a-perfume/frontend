import {List} from '@mui/material'
import SignUpValidation from './sign-up-validation'
import usePostCheckDuplicate from '../hooks/use-post-check-duplicate '
import useFormValidate from '../hooks/use-form-validate'
import signUpvalidate from '../utils/sign-up-validate'
import EmailConfirm from './sign-up-validation/email-confirm'
import IdCheck from './sign-up-validation/id-check'
import EmailCheck from './sign-up-validation/email-check'

const SignupInputs = () => {
  const {username, password, confirmPassword, email, emailAuth} =
    useFormValidate()
  const {
    handleIdDuplicateCheck,
    handleEmailDuplicateCheck,
    handleEmailComfirmCheck,
    isSuccess,
  } = usePostCheckDuplicate({
    successMessage: '사용 가능합니다',
    failedMessage: '아이디 중복입니다.',
    userId: username.field.value,
  })

  return (
    <List sx={{width: '100%'}}>
      <SignUpValidation
        placeholder={signUpvalidate.username.placeholder}
        name="아이디"
        type="text"
        method={username}
        compoment={
          <IdCheck
            title="중복확인"
            value={username.field.value}
            handleIdDuplicateCheck={handleIdDuplicateCheck}
          />
        }
      />

      <SignUpValidation
        placeholder={signUpvalidate.password.placeholder}
        type="password"
        method={password}
        name="비밀번호"
      />

      <SignUpValidation
        placeholder={signUpvalidate.password.placeholder}
        type="password"
        method={confirmPassword}
        name="비밀번호 확인"
      />

      <SignUpValidation
        placeholder={signUpvalidate.email.placeholder}
        type="email"
        method={email}
        name="본인 확인 이메일"
        compoment={
          <EmailCheck
            title="인증"
            value={email.field.value}
            handleEmailDuplicateCheck={handleEmailDuplicateCheck}
          />
        }
      />

      {isSuccess && (
        <SignUpValidation
          placeholder="이메일 인증 코드를 적으시오"
          method={emailAuth}
          name="이메일 인증 코드"
          compoment={
            <EmailConfirm
              title="확인"
              emailAdreess={email.field.value}
              emailCode={emailAuth.field.value}
              confirmEmail={handleEmailComfirmCheck}
            />
          }
          type="text"
        />
      )}
    </List>
  )
}

export default SignupInputs
