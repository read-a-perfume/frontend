import useAuthRedirect from '@hooks/use-auth-redirect'
import BottomFooter from '@components/bottom-footer'
import Header from '@components/header'

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
      <BottomFooter/>
    </>
  )
}

export default GeneralLayout
