import Loading from '@components/base/loading'
import useFetchAuthProfile from '@hooks/use-fetch-auth-profile'
import {ReactNode} from 'react'
import {Navigate, useLocation} from 'react-router-dom'

interface proptype {
  children: ReactNode
  flag: boolean | undefined
}

const AuthRedirect = ({children, flag}: proptype) => {
  if (!flag) {
    return children
  }
  return <Branch>{children}</Branch>
}

export default AuthRedirect

const Branch = ({children}: {children: ReactNode}) => {
  const {data: loginState, isLoading} = useFetchAuthProfile()
  const location = useLocation()

  if (isLoading) {
    return <Loading width="100%" height="100%" borderRadius={0} />
  }

  if (!loginState) {
    return <Navigate replace to="/sign-in" state={location} />
  }

  return children
}
