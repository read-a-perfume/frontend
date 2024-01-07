import useAuthRedirect from '@hooks/use-auth-redirect'
import BottomFooter from '@components/bottom-footer'
import Header from '@components/header'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {

  useAuthRedirect()
  
  return (
    <>
      <Header />
      {children}
      <BottomFooter/>
    </>
  )
}

export default GeneralLayout
