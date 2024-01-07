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
      staleTime: 9999999,
    },
  })

  return {isLoggined, isLoading}
}

export default useAuthRedirect
