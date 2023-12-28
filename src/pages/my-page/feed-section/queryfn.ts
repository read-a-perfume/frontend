import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {IfReviewResponse} from 'types/review.interface'

export const fetchReviews = async (page: number): Promise<IfReviewResponse> => {
  try {
    const res: AxiosResponse<IfReviewResponse> = await instance.get(
      `/reviews`,
      {params: {page: page, size: 6}},
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
