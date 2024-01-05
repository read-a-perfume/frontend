import {useFormContext} from 'react-hook-form'
import {authMutationKeys} from 'src/react-query-keys/auth.keys'
import {postSignUpIdDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'
import {IfUsePostCheckDuplicateProps} from '../types'
import {useSetRecoilState} from 'recoil'
import {SignUpAtoms} from 'src/store/client/auth'

const usePostUserNameConfirm = ({
  successMessage,
  failedMessage,
  userId,
}: IfUsePostCheckDuplicateProps) => {
  const setAuthCheck = useSetRecoilState(SignUpAtoms)
  const {setError, trigger} = useFormContext()

  //아이디 중복체크
  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: authMutationKeys.signUpIdCheck(userId),
    options: {
      onSuccess: () => {
        alert(successMessage)
        setAuthCheck(prevAtomState => {
          return {
            ...prevAtomState,
            isUserNameCheck: true,
          }
        })
      },
      onError: () => {
        setError('username', {
          type: 'menual',
          message: failedMessage,
        })
        setAuthCheck(prevAtomState => {
          return {
            ...prevAtomState,
            isUserNameCheck: false,
          }
        })
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

  return {
    mutateCheckUserId,
    handleUserNameConfirm,
  }
}

export default usePostUserNameConfirm
