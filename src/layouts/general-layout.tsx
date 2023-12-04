import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'
import {useEffect} from 'react'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const {logigAuthGuard} = useAuthRedirect()
  useEffect(() => {
    logigAuthGuard()
  }, [logigAuthGuard])

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default GeneralLayout
