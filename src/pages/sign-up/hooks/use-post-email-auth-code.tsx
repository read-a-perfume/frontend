import {useFormContext} from 'react-hook-form'
import {useSetRecoilState} from 'recoil'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {SignUpAtoms} from 'src/store/client/auth'
import {postSignUpEmailConfirm} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostEmailAuthCode = () => {
  const setAuthCheck = useSetRecoilState(SignUpAtoms)
  const {setError, trigger, getValues} = useFormContext()
  //이메일 인증코드 확인 요청

  const {mutate: confirmEmail} = useMutation({
    mutationFn: postSignUpEmailConfirm,
    mutationKey: authMutationKeys.emailAuthCodeConfirm(getValues('emailAuth')),
    options: {
      onSuccess: () => {
        alert('이메일 인증코드가 성공적으로 되었습니다.')
        setAuthCheck(pre => {
          return {
            ...pre,
            isEmailAuthCodeCheck: true,
          }
        })
      },
      onError: () => {
        setError('emailAuth', {
          type: 'menual',
          message: '이메일 인증에 실패했습니다',
        })
        setAuthCheck(pre => {
          return {
            ...pre,
            isEmailAuthCodeCheck: false,
          }
        })
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
