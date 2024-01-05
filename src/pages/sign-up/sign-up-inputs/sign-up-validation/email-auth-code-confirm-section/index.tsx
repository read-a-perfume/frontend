import {Box, styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailAuthCodeConfirmButton from './email-auth-code-confirm-button'

const EmailAuthCodeConfirmSection = ({emailCode, confirmEmail}) => {
  return (
    <TextFiledWrapper>
      <SignUpLabel label="이메일 인증코드 확인" />
      <SignUpTextFiled
        type="text"
        method={emailCode}
        placeholder="인증코드를 입력하세요"
      />
      <EmailAuthCodeConfirmButton
        emailAdreess="dssd"
        emailCode={emailCode.field.value}
        confirmEmail={confirmEmail}
        title="인증 코드"
      />
    </TextFiledWrapper>
  )
}

export default EmailAuthCodeConfirmSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
