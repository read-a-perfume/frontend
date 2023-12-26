import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import { IfFollowResponse, IfReviewCount, IfMe, IfUserType } from 'types/user.interface'

export const fetchCurUser = async (): Promise<IfMe> => {
  try {
    const res: AxiosResponse<IfMe> = await instance.get(`/me`)
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

export const fetchFollowCount = async (): Promise<IfFollowResponse> => {
  try {
    const res: AxiosResponse<IfFollowResponse> = await instance.get(
      `/mypage/100/follows`,
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
