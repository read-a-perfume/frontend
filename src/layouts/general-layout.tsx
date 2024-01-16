import useAuthRedirect from '@hooks/use-auth-redirect'
import Footer from '@components/footer'
import Header from '@components/header'
import {Suspense} from 'react'
import Box from '@mui/material/Box'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  useAuthRedirect()

  return (
    <>
      <Header />
      <Suspense
        fallback={<Box width="100%" height="100vh"/>}
      >
        {children}
      </Suspense>
      <Footer />
    </>
  )
}

export default GeneralLayout
