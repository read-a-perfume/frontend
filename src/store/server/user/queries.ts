import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfCategory} from 'types/perfume.interface'
import {
  IfFollowResponse,
  IfReviewCount,
  IfUserType,
  IfUser,
  IfMe,
} from 'types/user.interface'

export const fetchCurUser = async (): Promise<IfMe> => {
  try {
    const res: AxiosResponse<IfMe> = await instance.get(`/me`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const fetchUserWithId = async (id: string): Promise<IfUser> => {
  try {
    const res: AxiosResponse<IfUser> = await instance.get(`/user/${id}`)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const fetchReviewCount = async (): Promise<IfReviewCount> => {
  try {
    const res: AxiosResponse<IfReviewCount> = await instance.get(
      `/mypage/reviews`,
    )
    return res.data
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const fetchFollowCount = async (
  id: string,
): Promise<IfFollowResponse> => {
  try {
    const res: AxiosResponse<IfFollowResponse> = await instance.get(
      `/mypage/${id}/follows`,
    )
    return res.data
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const fetchMytype = async (): Promise<IfUserType[]> => {
  try {
    const res: AxiosResponse<IfUserType[]> = await instance.get(`/user/tastes`)
    return res.data
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const fetchAlltype = async (): Promise<IfCategory[]> => {
  try {
    const res: AxiosResponse<IfCategory[]> = await instance.get(`/categories`)
    return res.data
  } catch (error: any) {
    console.error(error)
    //throw error
    return [] // 현재 api가 변경중인지 작동안됨
  }
}
