import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {postSignUpIdDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'
import {IfUsePostCheckDuplicateProps} from '../types'
import {useSignUpContext} from './use-sign-up-context'

const usePostUserNameConfirm = ({
  successMessage,
  failedMessage,
  userId,
}: IfUsePostCheckDuplicateProps) => {
  const {signUpState, updateSignUpState} = useSignUpContext()
  const {setError, trigger} = useFormContext()

  //아이디 중복체크
  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: authMutationKeys.signUpIdCheck(userId),
    options: {
      onSuccess: () => {
        alert(successMessage)
        updateSignUpState({...signUpState, isUserNameCheck: true})
      },
      onError: () => {
        setError('username', {
          type: 'menual',
          message: failedMessage,
        })
        updateSignUpState({...signUpState, isUserNameCheck: false})
      },
    },
  })
  //이메일 인증 확인요청
  //아이디 중복체크
  const handleUserNameConfirm = async (usernameFildValue: string) => {
    if ((await trigger('username')) === true) {
      mutateCheckUserId(usernameFildValue)
    }
  }
  // 이메일 중복체크

  const handleUserNameChange = async () => {
    updateSignUpState({...signUpState, isUserNameCheck: false})
  }

  return {
    mutateCheckUserId,
    handleUserNameConfirm,
    handleUserNameChange,
  }
}

export default usePostUserNameConfirm
