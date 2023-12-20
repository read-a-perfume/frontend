import useAuthRedirect from '@hooks/use-auth-redirect'
import Header from './header'
import {useEffect} from 'react'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const {redirectAuth, isLoading} = useAuthRedirect()

  useEffect(() => {
    redirectAuth()
  }, [redirectAuth])
  //유저 프로필 API 요청중일때는 컴포넌트가 안보이게 함.
  if (isLoading) {
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
