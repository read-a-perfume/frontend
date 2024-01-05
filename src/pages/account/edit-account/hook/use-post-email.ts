import {useContext} from 'react'
import {EmailFormDataType} from '../type'
import TypingContext from '../util/typing-context'
import {useMutation} from '@tanstack/react-query'
import {
  postSignUpEmailConfirm,
  postSignUpEmailDuplicationCheck,
} from 'src/store/server/auth/mutations'

const usePostEmail = () => {
  const {setIsTyping} = useContext(TypingContext)

  const emailCheck = useMutation(
    (email: string) => postSignUpEmailDuplicationCheck(email),
    {
      onSuccess: () => {
        alert('인증 코드를 확인해주세요')
        setIsTyping(true)
      },
      onError: () => {
        alert('오류가 발생했습니다.')
      },
      useErrorBoundary: false,
    },
  )

  const emailSave = useMutation(
    (d: {email: string; code: string}) => postSignUpEmailConfirm(d),
    {
      onSuccess: d => {
        alert(`변경에 성공했습니다. 이메일:${d.email}`)
        setIsTyping(false)
      },
      onError: () => {
        alert('오류가 발생했습니다.')
      },
      useErrorBoundary: false,
    },
  )

  // 저장하기 버튼 누르면 인증번호 확인 후 이메일 변경
  const onEmailChangeSubmit = (data: EmailFormDataType) => {
    emailSave.mutate({email: data.email, code: data.validationCode})
  }

  // 인증하기 버튼 누르면 제대로 된 이메일인지 체크 후 인증번호 받기
  const onEmailCheckSubmit = (data: EmailFormDataType) => {
    emailCheck.mutate(data.email)
  }

  return {onEmailChangeSubmit, onEmailCheckSubmit}
}

export default usePostEmail
