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

const usePostCheckDuplicate = ({successMessage, failedMessage}: IfProps) => {
  const {setError,trigger} = useFormContext()
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
  const handleIdDuplicateCheck = async (usernameFildValue:string) => {
    if ((await trigger('username')) === true) {
      mutateCheckUserId(usernameFildValue)
    }
  }
  // 이메일 중복체크 
  const handleEmailDuplicateCheck = async (emailFildValue:string) => {
    if ((await trigger('email')) === true) {
      checkEmailMutate(emailFildValue)
    }
  }

  return {mutateCheckUserId, checkEmailMutate, handleIdDuplicateCheck,handleEmailDuplicateCheck }
}

export default usePostCheckDuplicate
