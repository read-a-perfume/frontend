import Header from './header'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default GeneralLayout
