import useAuthRedirect from '@hooks/use-auth-redirect'
import Footer from '@components/footer'
import Header from '@components/header'
import { Suspense } from 'react'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  useAuthRedirect()

  return (
    <>
      <Header />
        <Suspense fallback={<div>로딩중입니다</div>}>
        {children}
        </Suspense>
      <Footer />
    </>
  )
}

export default GeneralLayout
