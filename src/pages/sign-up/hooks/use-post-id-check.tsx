import {useFormContext} from 'react-hook-form'
import {
  postSignUpEmailDuplicationCheck,
  postSignUpIdDuplicationCheck,
} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

interface IfProps {
  successMessage: string
  failedMessage: string
}

const usePostIdCheck = ({successMessage, failedMessage}: IfProps) => {
  const {setError} = useFormContext()
  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: ['userIdCheck'],
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

  const {mutate: checkEmailMutate, data: emailRes} = useMutation({
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

  return {mutateCheckUserId, checkEmailMutate, emailRes}
}

export default usePostIdCheck
