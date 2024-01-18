import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import CheckBoxItem from './checkbox-item'
import {useSignUpContext} from '../hooks/use-sign-up-context'
import useFormValidate from '../hooks/use-form-validate'
import AllAgreeChecbox from './all-agrre-checkbox'

const SignUpAgreement = () => {
  const {allCheck, age, promotionConsent, marketingConsent} = useFormValidate()
  const {signUpState} = useSignUpContext()
  const {isEmailAuthCodeCheck, isEmailSenderCheck, isUserNameCheck} =
    signUpState

  const isAuthAllCheck =
    isEmailAuthCodeCheck && isEmailSenderCheck && isUserNameCheck

  return (
    <AgreementWrapper>
      <AgrrementTitle variant="body3">약관동의</AgrrementTitle>
      <AllAgreeChecbox title="전체 동의" allCheck={allCheck} />
      <CheckBoxItem label="만 14세 이상입니다." method={age} />
      <CheckBoxItem
        label="개인정보 마케팅 활용 동의"
        method={marketingConsent}
      />
      <CheckBoxItem
        label="이벤트, 쿠폰, 특가 알림 메일 수신"
        method={promotionConsent}
      />
      <Button
        type="submit"
        disabled={!isAuthAllCheck}
        variant="contained"
        color="inherit"
        size="large"
        sx={{width: '100%'}}
      >
        회원가입하기
      </Button>
    </AgreementWrapper>
  )
}

export default SignUpAgreement

const AgreementWrapper = styled(Box)({
  width: 342,
  background: '#fff',
  border: '1px solid #E7E7E7',
  borderRadius: '16px',
  position: 'relative',
})

const AgrrementTitle = styled(Typography)({
  position: 'absolute',
  top: -27,
  marginBottom: 2,
})
