import useAuthRedirect from '@hooks/use-auth-redirect'
import Footer from '@components/footer'
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
      <Footer />
    </>
  )
}

export default GeneralLayout
