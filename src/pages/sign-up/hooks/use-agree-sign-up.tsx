import {useFormContext} from 'react-hook-form'

const useAgreeSignUp = () => {
  const {watch, setValue} = useFormContext()


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
  return {
    handleUseFormAllCheck,
  }
}

export default useAgreeSignUp
