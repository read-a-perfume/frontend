import instance from '@api/instance'
import { IfLoginUserProfile } from 'types/auth.interface'

export const fetchRefreshToken = async () => {
  const url = '/reissue'
  return await instance.get(url)
}
export const fetchUserProfile: () => Promise<IfLoginUserProfile> = async () => {
  const res = await instance.get('/me')
  const data = await res.data
  return data
}