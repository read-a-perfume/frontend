import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const {isLoggined, isLoading} = useAuthRedirect()

  if (!isLoggined && isLoading) {
    return
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default GeneralLayout
