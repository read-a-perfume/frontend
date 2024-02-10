import {isServerError} from '@api/instance'
import {useRouter} from '@hooks/use-router'
import {useQueryClient} from '@tanstack/react-query'
import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {postLogin} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostSignIn = setError => {
  const {routeTo} = useRouter()
  const queryClient = useQueryClient()
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
      onSuccess: data => {
        routeTo('/')
        queryClient.setQueryData(authQueryKeys.userProfile, data.data)
      },
    },
  })
}

export default usePostSignIn
