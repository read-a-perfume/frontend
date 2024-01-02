import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfPasswordPatch} from 'types/auth.interface'
import {IfMe} from 'types/user.interface'

export const fetchCurUser = async (): Promise<IfMe> => {
  try {
    const res: AxiosResponse<IfMe> = await instance.get(`/me`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const patchPassword = async (data: IfPasswordPatch) => {
  try {
    const res: any = await instance.patch(`/account/password`, data)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const patchProfileImage = async (data: any) => {
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
