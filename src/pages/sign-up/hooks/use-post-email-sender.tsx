import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {postSignUpEmailDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'
import {useSignUpContext} from './use-sign-up-context'

const usePostEmailSender = ({successMessage, failedMessage}: any) => {
  const {setError, getValues, trigger} = useFormContext()
  const {signUpState,updateSignUpState} = useSignUpContext()
  const {
    mutate: checkEmailMutate,
    isSuccess,
    isLoading,
  } = useMutation({
    mutationFn: postSignUpEmailDuplicationCheck,
    mutationKey: authMutationKeys.emailDuplicateCheck(getValues('email')),
    options: {
      onSuccess: () => {
        alert(successMessage)
        updateSignUpState({...signUpState, isEmailSenderCheck: true})
      },
      onError: () => {
        setError('email', {
          type: 'menual',
          message: failedMessage,
        })
        updateSignUpState({...signUpState, isEmailSenderCheck: false})
      },

      retry: 1,
    },
  })

  // 이메일 중복체크
  const handleEmailSend = async (emailFildValue: string) => {
    if ((await trigger('email')) === true && !isLoading) {
      checkEmailMutate(emailFildValue)
    }
  }
  //이메일 중복 체크 시 변경
  const handleEmailChange = async () => {
    updateSignUpState({...signUpState, isEmailSenderCheck: false})
  }

  return {checkEmailMutate, isSuccess, handleEmailSend, handleEmailChange}
}

export default usePostEmailSender
