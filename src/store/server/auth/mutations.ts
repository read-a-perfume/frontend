import instance from '@api/instance'
import {IfLogin, IfSignUp} from 'types/auth.interface'

export const postLogin = async (data: IfLogin) => {
  return await instance.post('/login', {...data})
}

export const postSignUp: (
  signUpdata: IfSignUp,
) => Promise<IfLogin> = async signUpdata => {
  const API_URL = '/signup/email'
  const res = await instance.post(API_URL, {
    ...signUpdata,
  })
  const data = await res.data
  return data
}

export const postSignUpIdDuplicationCheck = async (userId: string) => {
  const res = await instance.post('/signup/check-username', {
    userId,
  })
  const data = await res.data
  return data
}
