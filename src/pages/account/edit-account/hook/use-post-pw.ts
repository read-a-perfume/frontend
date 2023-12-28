import { UseFormReset } from 'react-hook-form'
import {FormDataType} from '../type'

const usePostPw = (reset:UseFormReset<FormDataType>) => {
  
  const onSubmit = (data: FormDataType) => {
    console.log(data)
    reset()
  }

  return {onSubmit}
}

export default usePostPw
