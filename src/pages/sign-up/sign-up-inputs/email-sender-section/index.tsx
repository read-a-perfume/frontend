import Box from '@mui/material/Box'
import {styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailCheck from './email-check'
import {IfEmailConfirmSenderProps} from '@pages/sign-up/types'
import {useSignUpContext} from '@pages/sign-up/hooks/use-sign-up-context'

const EmailSenderSection = ({
  email,
  handleEmailSend,
  handleEmailChange,
}: IfEmailConfirmSenderProps) => {
  const {signUpState} = useSignUpContext()

  return (
    <TextFiledWrapper>
      <SignUpLabel label="본인 확인 이메일" />
      <SignUpTextFiled
        type="email"
        method={email}
        placeholder="이메일을 입력하세요"
        isAuthCheck={signUpState.isEmailSenderCheck}
      />
      <EmailCheck
        beforeTitle="전송"
        afterTitle="재전송"
        value={email.field.value}
        handleEmailSend={handleEmailSend}
        handleEmailChange={handleEmailChange}
        isAuthCheck={signUpState.isEmailSenderCheck}
      />
    </TextFiledWrapper>
  )
}

export default EmailSenderSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
