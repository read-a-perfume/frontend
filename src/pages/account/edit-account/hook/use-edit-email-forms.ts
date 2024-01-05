import {useController, useFormContext} from 'react-hook-form'
import {EmailFormDataType} from '../type'

const useEditEmailForms = () => {
  const methods = useFormContext<EmailFormDataType>()
  const control = methods.control
  const email = useController({
    name: 'email',
    control,
    //rules:{}
  })
  const validationCode = useController({
    name: 'validationCode',
    control,
    //rules:[]
  })

  return {email, validationCode, methods}
}

export default useEditEmailForms
