import {useContext} from 'react'
import {EmailFormDataType} from '../type'
import TypingContext from '../util/typing-context'

const usePostEmail = () => {
  const {setIsTyping} = useContext(TypingContext)

  // 저장하기 버튼 누르면 인증번호 확인 후 이메일 변경
  const onEmailChangeSubmit = (data: EmailFormDataType) => {
    setIsTyping(false)
    console.log('change', data)
  }

  // 인증하기 버튼 누르면 제대로 된 이메일인지 체크 후 인증번호 받기
  const onEmailCheckSubmit = (data: EmailFormDataType) => {
    setIsTyping(true)
    console.log('check', data)
  }

  return {onEmailChangeSubmit, onEmailCheckSubmit}
}

export default usePostEmail
