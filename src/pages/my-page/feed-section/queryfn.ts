
import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import { EachReviewType } from 'types/api-res-type'

export const getReviews = async (page: number): Promise<EachReviewType[]> => {
  try {
    const res: AxiosResponse<EachReviewType[]> = await instance.get(
      `/reviews`,
      {params: {page: page, size: 6}},
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
