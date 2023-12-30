import {useController, useFormContext} from 'react-hook-form'
import {FormThumbnailDataType} from '../edit-profile/type'

const useEditThumbnailForms = () => {
  const {control} = useFormContext<FormThumbnailDataType>()

  const thumbnail = useController({
    name: 'thumbnail',
    control,
  })

  return {control, thumbnail}
}

export default useEditThumbnailForms
