import Loading from '@components/base/loading'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'
import {ReactNode} from 'react'

interface proptype {
  children: ReactNode
  flag: boolean | undefined
}

const AuthRedirect = ({children, flag}: proptype) => {
  const {isError, isLoading} = useFetchAuthProfile()

  if (!flag) {
    return <>{children}</>
  }
  if (isLoading) {
    return <Loading width="100%" height="100%" borderRadius={0} />
  }
  console.log('err', isError)
  if (isError) {
    window.location.href = '/sign-in'
  }

  return <>{children}</>
}

export default AuthRedirect
