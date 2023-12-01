import instance from '@api/instance'
import {ReviewCreate} from './mutations.interface'

export const fetchReviewCreate = async (data: ReviewCreate) => {
  await instance.post('/reviews', {...data})
}

// 각각 뮤테이션에 필요한 API 작성. 
