import instance from '@api/instance'
import {IfLoginUserProfileResponse} from 'types/auth.interface'

export const fetchRefreshToken = async () => {
  const url = '/reissue'
  return await instance.get(url)
}
export const fetchUserProfile: () => Promise<IfLoginUserProfileResponse> =
  async () => {
    const res = await instance.get('/me')
    const data = await res.data
    return data
  }
