import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {postSignUpEmailConfirm} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'
import { useSignUpContext } from './use-sign-up-context'

const usePostEmailAuthCode = ({successMessage,failedMessage}:any) => {
  const {signUpState,updateSignUpState} = useSignUpContext()
  const {setError, trigger, getValues} = useFormContext()
  //이메일 인증코드 확인 요청

  const {mutate: confirmEmail} = useMutation({
    mutationFn: postSignUpEmailConfirm,
    mutationKey: authMutationKeys.emailAuthCodeConfirm(getValues('emailAuth')),
    options: {
      onSuccess: () => {
        alert(successMessage)
        updateSignUpState({...signUpState,isEmailAuthCodeCheck:true})
      },
      onError: () => {
        setError('emailAuth', {
          type: 'menual',
          message: failedMessage,
        })
        updateSignUpState({...signUpState,isEmailAuthCodeCheck:false})
      },
      retry: 1,
    },
  })
  const handleEmailAuthCodeCheck = async (emailFildValue: any) => {
    if ((await trigger('emailAuth')) === true) {
      confirmEmail(emailFildValue)
    }
  }

  return {
    handleEmailAuthCodeCheck,
  }
}

export default usePostEmailAuthCode
