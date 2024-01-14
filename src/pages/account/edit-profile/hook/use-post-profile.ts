import {useMutation, useQueryClient} from '@tanstack/react-query'
import {FormInfoDataType, FormThumbnailDataType} from '../type'
import { patchProfile, patchProfileImage } from 'src/store/server/user/mutations'
import { authQueryKeys } from 'src/react-query-keys/auth.keys'


const usePostProfile = () => {

  const QueryClient = useQueryClient()

  const profileImage = useMutation((d: any) => patchProfileImage(d), {
    onSuccess: () => {
      QueryClient.invalidateQueries({queryKey:authQueryKeys.userProfile})
      alert('프로필 사진 변경 성공')
    },
    onError: () => {
      alert('프로필 사진 변경 실패')
    },
    useErrorBoundary: false,
  })

  const profile = useMutation(
    (d: {bio: string; birthday: string; sex: string}) => patchProfile(d),
    {
      onSuccess: () => {
        QueryClient.invalidateQueries({queryKey:authQueryKeys.userProfile})
        alert('프로필 정보 변경 성공')
      },
      onError: () => {
        alert('프로필 정보 변경 실패')
      },
      useErrorBoundary: false,
    },
  )

  const onSubmit = (data: FormInfoDataType) => {
    try {
      profile.mutate({bio: data.bio, sex: data.sex, birthday: '20000101'})
    } catch (error: any) {
      alert(error.message)
    }
  }

  const onSubmitThumbnail = (data: FormThumbnailDataType) => {
    try {
      if (data.thumbnail !== null) {
        const formData = new FormData()
        formData.append('file', data.thumbnail)
        profileImage.mutate(formData)
      } else {
        alert('프로필 사진을 지정해주세요')
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  const profileLoading = profile.isLoading
  const profileImageLoading = profileImage.isLoading

  return {onSubmit, onSubmitThumbnail,profileImageLoading,profileLoading}
}

export default usePostProfile
