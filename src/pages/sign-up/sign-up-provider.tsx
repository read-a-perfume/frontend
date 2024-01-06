import {createContext, useState} from 'react'
interface IfSignUpContext {
  signUpState: {
    isEmailSenderCheck: boolean
    isEmailAuthCodeCheck: boolean
    isUserNameCheck: boolean
  }
  updateSignUpState: (newState: Partial<IfSignUpContext['signUpState']>) => void
}

export const SignUpContext = createContext<IfSignUpContext | null>(null)

export const SignUpProvider = ({children}) => {
  const [signUpState, setSignUpState] = useState({
    isEmailSenderCheck: false, // 이메일 전송여부//
    isEmailAuthCodeCheck: false, // 이메일 인증코드 처리했는지 여부
    isUserNameCheck: false, //아이디 중복체크 여부 확인되었는지
  })

  const updateSignUpState = newState => {
    setSignUpState(prevSignUpState => ({
      ...prevSignUpState,
      ...newState,
    }))
  }

  return (
    <SignUpContext.Provider value={{signUpState, updateSignUpState}}>
      {children}
    </SignUpContext.Provider>
  )
}
