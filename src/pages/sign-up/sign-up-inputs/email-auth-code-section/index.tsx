import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailAuthCodeConfirmButton from './email-auth-code-confirm-button'
import {useSignUpContext} from '@pages/sign-up/hooks/use-sign-up-context'

const EmailAuthCodeSection = ({
  currentEmail,
  emailAuthCode,
  handleEmailAuthCodeCheck,
}) => {
  const {signUpState} = useSignUpContext()

  return (
    <TextFiledWrapper>
      <SignUpLabel label="이메일 인증코드 확인" />
      <SignUpTextFiled
        type="text"
        method={emailAuthCode}
        placeholder="인증코드를 입력하세요"
        isAuthCheck={signUpState.isEmailAuthCodeCheck}
      />
      <EmailAuthCodeConfirmButton
        emailAdreess={currentEmail}
        emailCode={emailAuthCode.field.value}
        confirmEmail={handleEmailAuthCodeCheck}
        beforeTitle="인증 코드"
        afterTitle="인증 완료"
        isAuthCheck={signUpState.isEmailAuthCodeCheck}
      />
    </TextFiledWrapper>
  )
}

export default EmailAuthCodeSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
