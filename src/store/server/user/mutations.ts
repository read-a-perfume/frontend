import instance from '@api/instance'
import {IfPasswordPatch} from 'types/auth.interface'
import {IfUserTypePost} from 'types/user.interface'


export const patchPassword = async (data: IfPasswordPatch) => {
  try {
    const res: any = await instance.patch(`/account/password`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const patchProfileImage = async (data: File) => {
  try {
    const res: any = await instance.patch(`/user/profile-pic`, data, {
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8',
      },
    })
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const patchProfile = async (data: {
  bio: string
  birthday: string
  sex: string
}) => {
  try {
    const res: any = await instance.patch(`/user/profile`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postMyType = async (data: IfUserTypePost) => {
  try {
    const res: any = await instance.post(`/user/types`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
