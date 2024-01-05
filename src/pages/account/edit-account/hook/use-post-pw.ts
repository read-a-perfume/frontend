import {UseFormReset} from 'react-hook-form'
import {PwFormDataType} from '../type'
import {useMutation} from '@tanstack/react-query'
import {IfPasswordPatch} from 'types/auth.interface'
import {patchPassword} from 'src/store/server/user/mutations'

const usePostPw = (reset: UseFormReset<PwFormDataType>) => {
  const patchPw = useMutation((d: IfPasswordPatch) => patchPassword(d), {
    onSuccess: () => {
      alert('비밀번호 변경 성공')
    },
    onError: () => {
      alert('비밀변호 변경 오류')
    },
    useErrorBoundary: false,
  })

  const onPwSubmit = (data: PwFormDataType) => {
    if (data.newPassword !== data.confirmPassword) {
      alert('새 비밀번호와 새 비밀번호 확인이 다릅니다.')
    } else {
      patchPw.mutate({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
    }
    reset()
  }

  return {onPwSubmit}
}

export default usePostPw
