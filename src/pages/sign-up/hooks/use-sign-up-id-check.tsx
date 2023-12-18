import {useState} from 'react'
import {postSignUpIdDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

interface IfProps {
  success: string
  failed: string
}

const useSignUpIdCheck = ({success, failed}: IfProps) => {
  const [idCheckMessage, setIdCheckMessage] = useState('')

  const {mutate: mutateCheckUserId} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: ['userIdCheck'],
    options: {
      onSuccess: () => setIdCheckMessage(success),
      onError: () => setIdCheckMessage(failed),
    },
  })

  return {mutateCheckUserId, idCheckMessage}
}

export default useSignUpIdCheck
