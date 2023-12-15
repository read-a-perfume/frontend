import {useCallback} from 'react'
import {fetchUserProfile} from 'src/store/server/auth/queries'
import {useRouter} from './use-router'
import {useRecoilState} from 'recoil'
import {UserAtom} from 'src/store/client/auth/atoms'

const useAuthRedirect = () => {
  const [isLoggined, setIsLoggined] = useRecoilState(UserAtom)
  const {routeTo} = useRouter()
  const redirectAuth = useCallback(async () => {
    const userProfile = await fetchUserProfile()

    if (userProfile === null) {
      routeTo("/sign-in");
      return null
    }
    setIsLoggined(userProfile)

  }, [])

  return {redirectAuth, isLoggined, routeTo}
}

export default useAuthRedirect
