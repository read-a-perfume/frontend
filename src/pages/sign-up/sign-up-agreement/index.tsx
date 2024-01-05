import {Box, Button, Checkbox, Typography, styled} from '@mui/material'
import {useFormContext} from 'react-hook-form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckBoxItem from './checkbox-item'
import useFormValidate from '../hooks/use-form-validate'
import {useRecoilValue} from 'recoil'
import {SignUpAtoms} from 'src/store/client/auth'

const SignUpAgreement = () => {
  const isSignUpChecks = useRecoilValue(SignUpAtoms)
  const {watch, setValue} = useFormContext()
  const {allCheck, age, promotionConsent, marketingConsent} = useFormValidate()
  const {isEmailAuthCodeCheck, isEmailSenderCheck, isUserNameCheck} =
    isSignUpChecks
  const isAllCheck =
    isEmailAuthCodeCheck && isEmailSenderCheck && isUserNameCheck

  const handleUseFormAllCheck = () => {
    const newValue = watch('allCheck')
    setValue('allChecked', newValue)
    setValue('terms', newValue)
    setValue('age', newValue)
    setValue('privacy', newValue)
    setValue('marketingConsent', newValue)
    setValue('promotionConsent', newValue)
    //useState는 UI적 체크업데이트
    //useForm은 회원가입 시 실제 체크여부가 되었는지 확인해주는 역할
  }

  return (
    <>
      <AgreementWrapper>
        <Typography
          variant="body3"
          mb={2}
          sx={{position: 'absolute', top: -27}}
        >
          약관동의
        </Typography>
        <Box
          sx={{
            borderBottom: '1px solid #E7E7E7',
          }}
        >
          <Checkbox
            {...allCheck.field}
            icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
            checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
            checked={allCheck.field.value}
            onChange={e => {
              allCheck.field.onChange(e) // 기존 onChange 이벤트 호출
              handleUseFormAllCheck()
            }}
          />
          <Typography variant="body3">전체 동의</Typography>
        </Box>
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
          disabled={!isAllCheck}
          variant="contained"
          color="inherit"
          size="large"
          sx={{width: '100%'}}
        >
          회원가입하기
        </Button>
      </AgreementWrapper>
    </>
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
