import {useContext} from 'react'
import {SignUpContext} from '../sign-up-provider'

export const useSignUpContext = () => {
  const context = useContext(SignUpContext)
  if (!context) {
    throw new Error('컨텍스트 에러')
  }
  const {signUpState,updateSignUpState} =context
  return {signUpState,updateSignUpState}
}
