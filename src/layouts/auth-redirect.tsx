import Loading from '@components/base/loading'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'
import {ReactNode} from 'react'
import {Navigate, useLocation} from 'react-router-dom'

interface proptype {
  children: ReactNode
  flag: boolean | undefined
}

const AuthRedirect = ({children, flag}: proptype) => {
  const {isError, isLoading} = useFetchAuthProfile()
  const location = useLocation()

  if (!flag) {
    return <>{children}</>
  }
  if (isLoading) {
    return <Loading width="100%" height="100%" borderRadius={0} />
  }

  if (isError) {
    return <Navigate replace to="/sign-in" state={location} />
  }

  return <>{children}</>
}

export default AuthRedirect
