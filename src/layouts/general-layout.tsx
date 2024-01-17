import useAuthRedirect from '@hooks/use-auth-redirect'
import Footer from '@components/footer'
import Header from '@components/header'
import Box from '@mui/material/Box'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  useAuthRedirect()

  return (
    <>
      <Header />
      <Box minHeight="calc(100vh - 152px)">{children}</Box>
      <Footer />
    </>
  )
}

export default GeneralLayout
