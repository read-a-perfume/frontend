import axios from 'axios'
import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchUserProfile} from 'src/store/server/auth/queries'
import useMutation from 'src/store/server/use-mutation'

const useAuthRedirect = () => {
  const navigate = useNavigate()
  const redirectAuth = async () => {
    try {
      const res = await fetchUserProfile()
      return res
    } catch (error) {
      // 에러코드별로 에러 처리
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          case 400:
            // 잘못된 요청
            console.log('잘못된 요청입니다.')
            break
          case 401:
            // 인증 실패
            navigate('/sign-in')
            console.log('인증에 실패했습니다.')
            break
          case 403:
            // 권한 없음
            console.log('권한이 없습니다.')
            break
          case 404:
            // 리소스 없음
            console.log('리소스가 없습니다.')
            break
          default:
            // 기타 에러
            console.log('알 수 없는 에러가 발생했습니다.')
            break
        }
      }
    }
  }

  const {mutate} = useMutation({
    mutationKey: ['userProfile'],
    mutationFn: redirectAuth,
    options: {
      cacheTime: Infinity,
      onSuccess: data => console.log(data, 'data'),
    },
  })

  const loginAuthGuard = useCallback(() => {
    return mutate()
  }, [mutate])

  return {loginAuthGuard}
}

export default useAuthRedirect
