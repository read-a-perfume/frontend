import {useController, useFormContext} from 'react-hook-form'
import {EmailFormDataType} from '../type'

const useEditEmailForms = () => {
  const {control} = useFormContext<EmailFormDataType>()
  const email = useController({
    name: 'email',
    control,
    //rules:{}
  })
  const validationCode = useController({
    name:'validationCode',
    control,
    //rules:[]
  })

  return {control, email,validationCode}
}

export default useEditEmailForms
