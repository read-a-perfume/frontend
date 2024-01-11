import useAuthRedirect from "@hooks/use-auth-redirect"
import { ReactNode } from "react"

interface proptype{
    children:ReactNode
}

const AuthRedirect = ({children}:proptype) => {
    const data = useAuthRedirect()

  if (data.isLoading){
    return <></>
  }

  

  if (data.isLoggined === null) {
    window.location.href = "/"
    return <></>
  }

  return <>{children}</>
}

export default AuthRedirect