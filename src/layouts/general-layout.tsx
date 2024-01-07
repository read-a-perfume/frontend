import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'
import BottomFooter from '@components/bottom-footer'

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
