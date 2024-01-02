import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {
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
  const {setError, trigger} = useFormContext()
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

  const {mutate: checkEmailMutate} = useMutation({
    mutationFn: postSignUpEmailDuplicationCheck,
    mutationKey: ['email'],
    options: {
      onSuccess: () => alert('이메일 전송이 성공적으로 보내졌습니다.'),
      onError: () => {
        setError('email', {
          type: 'menual',
          message: '중복된 이메일입니다.',
        })
      },
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

  return {
    mutateCheckUserId,
    checkEmailMutate,
    handleIdDuplicateCheck,
    handleEmailDuplicateCheck,
  }
}

export default usePostCheckDuplicate
