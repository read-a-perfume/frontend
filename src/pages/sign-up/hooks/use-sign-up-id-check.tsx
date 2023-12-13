import {postSignUpIdDuplicationCheck} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const useSignUpIdCheck = () => {
  const {mutate} = useMutation({
    mutationFn: postSignUpIdDuplicationCheck,
    mutationKey: ['test'],
    options: {
      onError: () => console.log('d'),
    },
  })

  return {mutate}
}

export default useSignUpIdCheck
