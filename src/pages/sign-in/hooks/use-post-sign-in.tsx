import {isServerError} from '@api/instance'
import {useRouter} from '@hooks/use-router'
import {postLogin} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostSignIn = setError => {
  const {routeTo} = useRouter()
  return useMutation({
    mutationFn: postLogin,
    mutationKey: ['sign-in'],
    options: {
      onError: error => {
        if (isServerError(error) && error.response?.status === 401) {
          setError('username', {
            type: 'menual',
            message: '아이디 혹은 비밀번호가 틀렸습니다',
          })
          setError('password', {
            type: 'menual',
            message: '아이디 혹은 비밀번호가 틀렸습니다',
          })
        }
      },
      onSuccess: () => routeTo('/'),
    },
  })
}

export default usePostSignIn
