import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {
  postSignUpEmailConfirm,
  postSignUpEmailDuplicationCheck,
  postSignUpIdDuplicationCheck,
} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'
import {IfUsePostCheckDuplicateProps} from '../types'

const usePostCheckDuplicate = ({
  successMessage,
  failedMessage,
  userId,
}: IfUsePostCheckDuplicateProps) => {
  const {setError, trigger, getValues} = useFormContext()
  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: authMutationKeys.signUpIdCheck(userId),
    options: {
      onSuccess: () => alert(successMessage),
      onError: () => {
        setError('username', {
          type: 'menual',
          message: failedMessage,
        })
      },
    },
  })
  //이메일 인증 확인요청

  const {
    mutate: checkEmailMutate,
    isSuccess,
    data: emailData,
  } = useMutation({
    mutationFn: postSignUpEmailDuplicationCheck,
    mutationKey: authMutationKeys.emailDuplicateCheck(getValues('email')),
    options: {
      onSuccess: () => alert('이메일 전송이 성공적으로 보내졌습니다.'),
      onError: () => {
        setError('email', {
          type: 'menual',
          message: '중복된 이메일입니다.',
        })
      },

      retry: 1,
    },
  })

  //이메일 인증코드 확인 요청

  const {mutate: confirmEmail} = useMutation({
    mutationFn: postSignUpEmailConfirm,
    mutationKey: authMutationKeys.emailAuthCodeConfirm(getValues('emailAuth')),
    options: {
      onSuccess: () => alert('이메일 인증이 성공적으로 되었습니다.'),
      onError: () => {
        setError('emailAuth', {
          type: 'menual',
          message: '이메일 인증에 실패했습니다',
        })
      },
      retry: 1,
    },
  })

  //아이디 중복체크
  const handleIdDuplicateCheck = async (usernameFildValue: string) => {
    if ((await trigger('username')) === true) {
      mutateCheckUserId(usernameFildValue)
    }
  }
  // 이메일 중복체크
  const handleEmailDuplicateCheck = async (emailFildValue: string) => {
    if ((await trigger('email')) === true) {
      checkEmailMutate(emailFildValue)
    }
  }

  const handleEmailComfirmCheck = async (emailFildValue: any) => {
    if ((await trigger('emailAuth')) === true) {
      confirmEmail(emailFildValue)
    }
  }

  return {
    mutateCheckUserId,
    checkEmailMutate,
    handleIdDuplicateCheck,
    handleEmailDuplicateCheck,
    handleEmailComfirmCheck,
    isSuccess,
    emailData,
  }
}

export default usePostCheckDuplicate
