import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'
import {useEffect} from 'react'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const {loginAuthGuard} = useAuthRedirect()
  useEffect(() => {
    loginAuthGuard()
  }, [loginAuthGuard])

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default GeneralLayout
