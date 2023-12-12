import instance from '@api/instance'
import {AxiosResponse} from 'axios'
import {eachReviewType} from 'src/type/api-res-type'

export const getReviews = async (page:number): Promise<eachReviewType[]> => {
  try {
    const res: AxiosResponse<eachReviewType[]> = await instance.get(
        `/reviews`,{params:{page:page,size:6}}
    )
    return res.data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
