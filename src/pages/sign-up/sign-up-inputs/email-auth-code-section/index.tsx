import {Box, styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import EmailAuthCodeConfirmButton from './email-auth-code-confirm-button'
import {useRecoilValue} from 'recoil'
import {SignUpAtoms} from 'src/store/client/auth'
import {useFormContext} from 'react-hook-form'

const EmailAuthCodeSection = ({
  emailAuthCode,
  handleEmailAuthCodeCheck,
}) => {
  const isSignUpChecks = useRecoilValue(SignUpAtoms)
  const isAuthCheck = isSignUpChecks.isEmailAuthCodeCheck
  console.log(isAuthCheck, 'isCheck')
  const {getValues} = useFormContext()
  const currentEmail = getValues('email')
  return (
    <TextFiledWrapper>
      <SignUpLabel label="이메일 인증코드 확인" />
      <SignUpTextFiled
        type="text"
        method={emailAuthCode}
        placeholder="인증코드를 입력하세요"
        isAuthCheck={isAuthCheck}
      />
      <EmailAuthCodeConfirmButton
        emailAdreess={currentEmail}
        emailCode={emailAuthCode.field.value}
        confirmEmail={handleEmailAuthCodeCheck}
        beforeTitle="인증 코드"
        afterTitle="인증 완료"
        isAuthCheck={isAuthCheck}
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
