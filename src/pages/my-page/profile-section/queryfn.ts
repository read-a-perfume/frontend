import instance from '@api/instance'
import {AxiosResponse} from 'axios'

export interface curUserType {
  userId: number
  username: string
  thumbnail: string
}

export const getCurUser = async (): Promise<curUserType> => {
  try {
    const res: AxiosResponse<curUserType> = await instance.get(`/me`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export interface reviewCountType {
  reviewCount: number
}

export const getReviewCount = async (): Promise<reviewCountType> => {
  try {
    const res: AxiosResponse<reviewCountType> = await instance.get(
      `/mypage/reviews`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export interface followCountType {
  followerCount: number
  followingCount: number
}

export const getFollowCount = async (): Promise<followCountType> => {
  try {
    const res: AxiosResponse<followCountType> = await instance.get(
      `/mypage/follows`,
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

export interface mytypeType {
  id: number
  name: string
  description: string
  thumbnail: string
}

export const getMytype = async (): Promise<mytypeType[]> => {
  try {
    const res: AxiosResponse<mytypeType[]> = await instance.get(`/user/tastes`)
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
