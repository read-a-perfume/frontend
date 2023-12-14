
import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import { IfReview } from 'types/reviews'


export const getReviews = async (page: number): Promise<IfReview[]> => {
  try {
    const res: AxiosResponse<IfReview[]> = await instance.get(
      `/reviews`,
      {params: {page: page, size: 6}},
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}