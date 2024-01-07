import {fetchUserProfile} from 'src/store/server/auth/queries'
import {useRecoilState} from 'recoil'
import {UserProfileAtom} from 'src/store/client/auth/atoms'

import useQuery from 'src/store/server/use-query'

const useAuthRedirect = () => {
  const [isLoggined, setIsLoggined] = useRecoilState(UserProfileAtom)

  const {isLoading} = useQuery({
    queryFn: fetchUserProfile,
    queryKey: ['userProfile'],
    options: {
      onSuccess: data => {
        setIsLoggined(data)
      },
      onError: error => console.log(error, '토큰이없습니다'),
      staleTime: Infinity,
      retry: 0,
    },
  })

  return {isLoggined, isLoading}
}

export default useAuthRedirect
