import {Box, styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailCheck from './email-check'
import {IfEmailConfirmSenderProps} from '@pages/sign-up/types'

const EmailConfirmSenderSection = ({
  email,
  handleEmailConfirmSend,
}: IfEmailConfirmSenderProps) => {
  return (
    <TextFiledWrapper>
      <SignUpLabel label="본인 확인 이메일" />
      <SignUpTextFiled
        type="email"
        method={email}
        placeholder="이메일을 입력하세요"
      />
      <EmailCheck
        title="전송"
        value={email.field.value}
        handleEmailDuplicateCheck={handleEmailConfirmSend}
      />
    </TextFiledWrapper>
  )
}

export default EmailConfirmSenderSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
