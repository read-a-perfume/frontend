import {Box, styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailCheck from './email-check'
import {IfEmailConfirmSenderProps} from '@pages/sign-up/types'
import {SignUpAtoms} from 'src/store/client/auth'
import {useRecoilValue} from 'recoil'

const EmailSenderSection = ({
  email,
  handleEmailSend,
  handleEmailChange,
}: IfEmailConfirmSenderProps) => {
  const isSignUpChecks = useRecoilValue(SignUpAtoms)
  const isAuthCheck = isSignUpChecks.isEmailSenderCheck

  return (
    <TextFiledWrapper>
      <SignUpLabel label="본인 확인 이메일" />
      <SignUpTextFiled
        type="email"
        method={email}
        placeholder="이메일을 입력하세요"
        isAuthCheck={isAuthCheck}
      />
      <EmailCheck
        beforeTitle="전송"
        afterTitle="재전송"
        value={email.field.value}
        handleEmailSend={handleEmailSend}
        handleEmailChange={handleEmailChange}
        isAuthCheck={isAuthCheck}
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
