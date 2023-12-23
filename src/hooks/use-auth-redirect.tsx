import {fetchUserProfile} from 'src/store/server/auth/queries'
import {useRecoilState} from 'recoil'
import {UserProfileAtom} from 'src/store/client/auth/atoms'
import {useRouter} from './use-router'
import useQuery from 'src/store/server/use-query'

const useAuthRedirect = () => {
  const [isLoggined, setIsLoggined] = useRecoilState(UserProfileAtom)

  const {routeTo} = useRouter()

  const {isLoading, data} = useQuery({
    queryFn: fetchUserProfile,
    queryKey: ['userProfile'],
    options: {
      onSuccess: () => {
        setIsLoggined(data)
      },
      onError: () => routeTo('/sign-in'),
      staleTime: Infinity,
    },
  })

  return {isLoggined, isLoading}
}

export default useAuthRedirect
