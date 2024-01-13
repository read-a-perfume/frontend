import {useContext} from 'react'
import {EmailFormDataType} from '../type'
import TypingContext from '../util/typing-context'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {
  postSignUpEmailConfirm,
  postSignUpEmailDuplicationCheck,
} from 'src/store/server/auth/mutations'
import { UseFormSetError, UseFormTrigger } from 'react-hook-form'
import { authQueryKeys } from 'src/react-query-keys/auth.keys'


const usePostEmail = (trigger:UseFormTrigger<EmailFormDataType>, setError:UseFormSetError<EmailFormDataType>) => {
  const {setIsTyping} = useContext(TypingContext)
  const QueryClient = useQueryClient()
  
  const emailCheck = useMutation(
    (email: string) => postSignUpEmailDuplicationCheck(email),
    {
      onSuccess: () => {
        alert('인증 코드를 확인해주세요')
        setIsTyping(true)
      },
      onError: () => {
        // alert('오류가 발생했습니다.')
        setError('email', {
          type: 'menual',
          message: '이메일 검증에 실패했습니다',
        })
      },
      useErrorBoundary: false,
    },
  )

  const emailSave = useMutation(
    (d: {email: string; code: string}) => postSignUpEmailConfirm(d),
    {
      onSuccess: d => {
        QueryClient.invalidateQueries({queryKey: authQueryKeys.userProfile})
        alert(`변경에 성공했습니다. 이메일:${d.email}`)
        setIsTyping(false)
      },
      onError: () => {
        //alert('오류가 발생했습니다.')
        setError('validationCode', {
          type: 'menual',
          message: '잘못된 코드입니다',
        })
      },
      useErrorBoundary: false,
    },
  )

  // 인증하기 버튼 누르면 제대로 된 이메일인지 체크 후 인증번호 받기
  const onEmailCheckSubmit = async (data: EmailFormDataType) => {
    if ((await trigger('email')) == true) {
      emailCheck.mutate(data.email)
    }
  }

  // 저장하기 버튼 누르면 인증번호 확인 후 이메일 변경
  const onEmailChangeSubmit = async (data: EmailFormDataType) => {
    if ((await trigger('validationCode')) === true) {
      emailSave.mutate({email: data.email, code: data.validationCode})
    }
  }

  const emailSaveLoading = emailSave.isLoading
  const emailCheckLoading = emailCheck.isLoading

  return {
    onEmailChangeSubmit,
    onEmailCheckSubmit,
    emailCheckLoading,
    emailSaveLoading,
  }
}

export default usePostEmail
