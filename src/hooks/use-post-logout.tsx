import {postLogout} from 'src/store/server/auth/mutations'
import useMutation from 'src/store/server/use-mutation'

const usePostLogout = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: postLogout,
    options: {
      onSuccess: () => {
        window.location.reload()
      },
    },
  })
}

export default usePostLogout
