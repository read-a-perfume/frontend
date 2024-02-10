import {useQueryClient} from '@tanstack/react-query'
import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {postLogout} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostLogout = () => {
  const QueryClient = useQueryClient()

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: postLogout,
    options: {
      onSuccess: () => {
        QueryClient.removeQueries(authQueryKeys.userProfile)
        window.location.reload()
        alert('로그아웃 성공')
      },
      onError: () => {
        alert('로그아웃 에러 발생')
      },
    },
  })
}

export default usePostLogout
