import {ChangeEvent} from 'react'
import {useFormContext} from 'react-hook-form'

const useAgreeSignUp = () => {
  const {setValue} = useFormContext()

  const handleUseFormAllCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    setValue('age', value)
    setValue('marketingConsent', value)
    setValue('promotionConsent', value)
    //useState는 UI적 체크업데이트
    //useForm은 회원가입 시 실제 체크여부가 되었는지 확인해주는 역할
  }
  return {
    handleUseFormAllCheck,
  }
}

export default useAgreeSignUp
