import instance from '@api/instance'
import {FetchLoginProps} from './mutations.interface'

export const fetchLogin = async (data: FetchLoginProps) => {
  return await instance.post('/login', {...data})
}

export const fetchUserProfile = async () => {
 await instance.get('/me')
}
