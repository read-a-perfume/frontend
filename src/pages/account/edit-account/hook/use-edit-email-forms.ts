import {emailFormValidation} from './../util/form-validation'
import {useController, useFormContext} from 'react-hook-form'
import {EmailFormDataType} from '../type'

const useEditEmailForms = () => {
  const methods = useFormContext<EmailFormDataType>()
  const control = methods.control
  const email = useController({
    name: 'email',
    control,
    rules: {...emailFormValidation.email},
  })
  const validationCode = useController({
    name: 'validationCode',
    control,
    //rules: {...emailFormValidation.validationCode},
  })

  return {email, validationCode, methods}
}

export default useEditEmailForms
