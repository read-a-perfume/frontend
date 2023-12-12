import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {
  FollowCountType,
  ReviewCountType,
  UserTasteType,
  UserType,
} from 'types/api-res-type'

export const getCurUser = async (): Promise<UserType> => {
  try {
    const res: AxiosResponse<UserType> = await instance.get(`/me`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const getReviewCount = async (): Promise<ReviewCountType> => {
  try {
    const res: AxiosResponse<ReviewCountType> = await instance.get(
      `/mypage/reviews`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const getFollowCount = async (): Promise<FollowCountType> => {
  try {
    const res: AxiosResponse<FollowCountType> = await instance.get(
      `/mypage/follows`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export const getMytype = async (): Promise<UserTasteType[]> => {
  try {
    const res: AxiosResponse<UserTasteType[]> = await instance.get(
      `/user/tastes`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
