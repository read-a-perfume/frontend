import instance from '@api/instance'
import {IfLoginUserProfileResponse} from 'types/auth.interface'

export const fetchRefreshToken = async () => {
  const url = '/reissue'
  return await instance.get(url)
}
export const fetchUserProfile =
  async (): Promise<IfLoginUserProfileResponse> => {
    const {data} = await instance.get('/me')

    return data
  }
