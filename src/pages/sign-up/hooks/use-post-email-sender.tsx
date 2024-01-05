import {useFormContext} from 'react-hook-form'
import {useSetRecoilState} from 'recoil'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {SignUpAtoms} from 'src/store/client/auth'
import {postSignUpEmailDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostEmailSender = () => {
  const {setError, getValues, trigger} = useFormContext()
  const setAuthCheck = useSetRecoilState(SignUpAtoms)
  const {
    mutate: checkEmailMutate,
    isSuccess,
    isLoading,
  } = useMutation({
    mutationFn: postSignUpEmailDuplicationCheck,
    mutationKey: authMutationKeys.emailDuplicateCheck(getValues('email')),
    options: {
      onSuccess: () => {
        alert('이메일 전송이 성공적으로 보내졌습니다.')
        setAuthCheck(pre => {
          return {
            ...pre,
            isEmailSenderCheck: true,
          }
        })
      },
      onError: () => {
        setError('email', {
          type: 'menual',
          message: '중복된 이메일입니다.',
        })
        setAuthCheck(pre => {
          return {
            ...pre,
            isEmailSenderCheck: false,
          }
        })
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
    setAuthCheck(pre => {
      return {
        ...pre,
        isEmailSenderCheck: false,
      }
    })
  }

  return {checkEmailMutate, isSuccess, handleEmailSend, handleEmailChange}
}

export default usePostEmailSender
