import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'
import {useEffect} from 'react'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const {isLoggined, routeTo, redirectAuth} = useAuthRedirect()

  useEffect(() => {
    redirectAuth()
  }, [redirectAuth])

  if (!isLoggined) {
    routeTo('/sign-in')
    return <></>
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default GeneralLayout
