import {useRouter} from '@hooks/use-router'
import axios from 'axios'
import {postSignUp} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostSignUpCreate = () => {
  const {routeTo} = useRouter()
  const {mutate:createSignUp} = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: postSignUp,
    options: {
      onSuccess: () => routeTo('/'),
      onError: error => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 409) {
            alert(error.response.data.message)
          }
        } else {
          alert('회원가입에 실패 했습니다.')
        }
      },
    },
  })
  return {createSignUp}
}

export default usePostSignUpCreate
