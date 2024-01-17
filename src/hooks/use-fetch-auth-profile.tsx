import {useQuery} from '@tanstack/react-query'
import {authQueryKeys} from 'src/react-query-keys/auth.keys'
import {fetchUserProfile} from 'src/store/server/auth/queries'

const useFetchAuthProfile = () => {
  return useQuery(authQueryKeys.userProfile, fetchUserProfile, {
    staleTime: Infinity,
    useErrorBoundary:false,
  })
}
export default useFetchAuthProfile
