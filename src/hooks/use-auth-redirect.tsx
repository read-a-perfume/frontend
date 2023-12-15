import {useCallback, useState} from 'react'
import {fetchUserProfile} from 'src/store/server/auth/queries'
import {useRouter} from './use-router'

const useAuthRedirect = () => {
  const [isLoggined, setIsLoggined] = useState(false)
  const {routeTo} = useRouter()
  const redirectAuth = useCallback(async () => {
    try {
      await fetchUserProfile()
      setIsLoggined(true)
      routeTo('/')
    } catch {
      setIsLoggined(false)
      routeTo('/sign-in')
    }
  }, [routeTo])

  return {redirectAuth, isLoggined, routeTo}
}

export default useAuthRedirect
