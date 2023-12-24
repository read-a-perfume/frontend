import {FormDataType} from '../edit-profile/type'

const usePostProfile = () => {
  const onSubmit = (data: FormDataType) => {
    console.log(data)
  }

  return {onSubmit}
}

export default usePostProfile
