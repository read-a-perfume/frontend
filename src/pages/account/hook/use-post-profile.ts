import {useMutation} from '@tanstack/react-query'
import {FormDataType} from '../edit-profile/type'
import {patchProfile, patchProfileImage} from '../queryfn'

const usePostProfile = () => {
  const profileImage = useMutation((d: any) => patchProfileImage(d), {
    onSuccess: () => {},
    onError: () => {
      alert('프로필 사진 변경 실패')
    },
    useErrorBoundary:false,
  })

  const profile = useMutation(
    (d: {bio: string; birthday: string; sex: string}) => patchProfile(d),
    {
      onSuccess: () => {
        alert('프로필 정보 변경 성공')
      },
      onError: () => {
        alert('프로필 정보 변경 실패')
      },
      useErrorBoundary:false,
    },
  )

  const onSubmit = (data: FormDataType) => {
    try {
      if (data.thumbnail === null) {
        alert('프로필 이미지를 지정해주세요')
      } else {
        const formData = new FormData()
        formData.append('file',data.thumbnail)
        profileImage.mutate(formData)
        profile.mutate({bio: data.bio, sex: data.sex, birthday: '20000101'})
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  return {onSubmit}
}

export default usePostProfile
