import {useController, useFormContext} from 'react-hook-form'
import {FormDataType} from '../type'

const useEditPwForms = () => {
  const {control} = useFormContext<FormDataType>()
  const oldPassword = useController({
    name: 'oldPassword',
    control,
  })
  const newPassword = useController({
    name: 'newPassword',
    control,
  })
  const confirmPassword = useController({
    name: 'confirmPassword',
    control,
  })

  return {control, oldPassword, confirmPassword, newPassword}
}

export default useEditPwForms
