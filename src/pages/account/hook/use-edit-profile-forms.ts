import {useController, useFormContext} from 'react-hook-form'
import { FormDataType } from '../edit-profile/type'

const useEditProfileForms = () => {
  const {control} = useFormContext<FormDataType>()
  const thumbnail = useController({
    name: 'thumbnail',
    control,
  })
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
  return {control, thumbnail, username, bio, sex}
}

export default useEditProfileForms
