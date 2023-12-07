import instance from '@api/instance'
import {FetchLoginProps} from './mutations.interface'

export const fetchLogin = async (data: FetchLoginProps) => {
  return await instance.post('/login', {...data})
}

export const fetchUserProfile = async () => {
  return await instance.get('/me')
}

export const fetchSignUp = async data => {
  const API_URL = '/signup/email'
  return await instance.post(API_URL, {
    ...data,
  })
}
