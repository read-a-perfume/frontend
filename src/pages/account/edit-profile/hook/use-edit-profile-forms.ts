import {useController, useFormContext} from 'react-hook-form'
import { FormInfoDataType } from '../type'

const useEditProfileForms = () => {
  const {control} = useFormContext<FormInfoDataType>()

  const username = useController({
    name: 'username',
    control,
  })
  const bio = useController({
    name: 'bio',
    control,
  })
  const sex = useController({
    name: 'sex',
    control,
  })
  return {control, username, bio, sex}
}

export default useEditProfileForms
