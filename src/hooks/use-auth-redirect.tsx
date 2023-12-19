import {fetchUserProfile} from 'src/store/server/auth/queries'
import {useRecoilState} from 'recoil'
import {UserAtom} from 'src/store/client/auth/atoms'
import {useRouter} from './use-router'
import useMutation from 'src/store/server/use-mutation'

const useAuthRedirect = () => {
  const [isLoggined, setIsLoggined] = useRecoilState(UserAtom)

  const {routeTo} = useRouter()

  const {
    mutate: redirectAuth,
    isLoading,
    data,
  } = useMutation({
    mutationFn: fetchUserProfile,
    mutationKey: ['auth'],
    options: {
      onSuccess: () => {
        setIsLoggined(data)
        routeTo('/')
      },
      onError: () => routeTo('/sign-in'),
      retry: 2,
      cacheTime: 1500,
    },
  })

  return {redirectAuth, isLoggined, isLoading}
}

export default useAuthRedirect
