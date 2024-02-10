import {useQuery, useQueryClient} from '@tanstack/react-query'
import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {fetchUserProfile} from 'src/store/server/auth/queries'

const useFetchAuthProfile = (enabled = false) => {
  const queryClient = useQueryClient()
  return useQuery(authQueryKeys.userProfile, fetchUserProfile, {
    staleTime: 1000 * 60 * 15,
    cacheTime: 1000 * 60 * 15,
    useErrorBoundary: false,
    enabled: enabled,
    onSuccess: data => {
      queryClient.setQueryData(authQueryKeys.userProfile, data)
    },
    onError() {
      queryClient.setQueryData(authQueryKeys.userProfile, false)
    },
  })
}
export default useFetchAuthProfile
