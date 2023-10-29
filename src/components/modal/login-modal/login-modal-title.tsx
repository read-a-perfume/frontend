import {LoginModalTitleProps} from './login-modal.interface.js'
import {ModalTab, ModalTitle, TabContent} from './login-modal.style.js'

const LoginModalTitle = ({
  tabClick,
  setTabClick,
  setInputs,
}: LoginModalTitleProps) => {
  return (
    <>
      <ModalTitle>
        향기로움을 찾는
        <br />
        사람들의 리뷰 모음집
      </ModalTitle>
      <TabContent>
        <ModalTab
          onClick={() => {
            if (tabClick !== 'personal') {
              setTabClick('personal')
              setInputs({id: '', password: ''})
            }
          }}
          clicked={tabClick === 'personal'}
        >
          개인용
        </ModalTab>
        <ModalTab
          onClick={() => {
            if (tabClick !== 'company') {
              setTabClick('company')
              setInputs({id: '', password: ''})
            }
          }}
          clicked={tabClick === 'company'}
        >
          기업용
        </ModalTab>
      </TabContent>
    </>
  )
}

export default LoginModalTitle
