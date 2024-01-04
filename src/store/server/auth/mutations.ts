import instance from '@api/instance'
import {IfLoginRequeset, IfSignUpRequest} from 'types/auth.interface'

export const postLogin = async (data: IfLoginRequeset) => {
  return await instance.post('/login', {...data})
}

export const postLogout = async () => {
  return await instance.post('/logout')
}

export const postSignUp: (
  signUpdata: IfSignUpRequest,
) => Promise<IfLoginRequeset> = async signUpdata => {
  const API_URL = '/signup/email'
  const res = await instance.post(API_URL, {
    ...signUpdata,
  })
  const data = await res.data
  return data
}

export const postSignUpIdDuplicationCheck = async (userId: string) => {
  const res = await instance.post('/signup/check-username', {
    username: userId,
  })
  return res.data
}
export const postSignUpEmailDuplicationCheck = async (email: string) => {
  const res = await instance.post('/signup/email-verify/request', {
    email,
  })
  return res.data
}
export const postSignUpEmailConfirm = async obj => {
  const {email, code} = obj
  const res = await instance.post('/signup/email-verify/confirm', {
    email,
    code,
  })
  return res.data
}
