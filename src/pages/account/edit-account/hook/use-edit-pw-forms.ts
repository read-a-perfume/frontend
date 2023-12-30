import {useController, useFormContext} from 'react-hook-form'
import {FormDataType} from '../type'
import formValidation from '../util/form-validation'

const useEditPwForms = () => {
  const {control} = useFormContext<FormDataType>()
  const oldPassword = useController({
    name: 'oldPassword',
    control,
    rules: {
      ...formValidation.oldPassword,
    },
  })
  const newPassword = useController({
    name: 'newPassword',
    control,
    rules: {
      ...formValidation.newPassword,
    },
  })
  const confirmPassword = useController({
    name: 'confirmPassword',
    control,
    rules: {
      ...formValidation.confirmPassword,
    },
    
  })

  return {control, oldPassword, confirmPassword, newPassword}
}

export default useEditPwForms
