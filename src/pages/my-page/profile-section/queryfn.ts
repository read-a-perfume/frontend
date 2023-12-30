import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import { IfFollowResponse, IfReviewCount, IfUserType, IfUser } from 'types/user.interface'

export const fetchCurUser = async (id:string): Promise<IfUser> => {
  try {
    const res: AxiosResponse<IfUser> = await instance.get(`/user/${id}`)
    return res.data
  } catch (error: any) {
    console.log(error)
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
    console.log(error)
    throw error
  }
}

export const fetchFollowCount = async (id:string): Promise<IfFollowResponse> => {
  try {
    const res: AxiosResponse<IfFollowResponse> = await instance.get(
      `/mypage/${id}/follows`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const fetchMytype = async (): Promise<IfUserType[]> => {
  try {
    const res: AxiosResponse<IfUserType[]> = await instance.get(
      `/user/tastes`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
