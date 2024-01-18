import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {fetchUserProfile} from 'src/store/server/auth/queries'
import useQuery from 'src/store/server/use-query'

const useAuthRedirect = () => {
  const {isLoading} = useQuery({
    queryFn: fetchUserProfile,
    queryKey: authQueryKeys.userProfile,
    options: {
      onError: error => console.log(error, '토큰이없습니다'),
      staleTime: Infinity,
      retry: 0,
    },
  })

  return {isLoading}
}

export default useAuthRedirect
