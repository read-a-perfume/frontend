import {useController, useFormContext} from 'react-hook-form'
import {PwFormDataType} from '../type'
import {pwFormValidation} from '../util/form-validation'

const useEditPwForms = () => {
  const {control} = useFormContext<PwFormDataType>()
  const oldPassword = useController({
    name: 'oldPassword',
    control,
    rules: {
      ...pwFormValidation.oldPassword,
    },
  })
  const newPassword = useController({
    name: 'newPassword',
    control,
    rules: {
      ...pwFormValidation.newPassword,
    },
  })
  const confirmPassword = useController({
    name: 'confirmPassword',
    control,
    rules: {
      ...pwFormValidation.confirmPassword,
    },
    
  })

  return {control, oldPassword, confirmPassword, newPassword}
}

export default useEditPwForms
