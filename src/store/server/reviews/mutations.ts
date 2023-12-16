import instance from '@api/instance'
import {IfReviewRequest} from 'types/review.interface'

export const fetchReviewCreate = async (data: IfReviewRequest) => {
  const res = await instance.post('/reviews', {...data})
  console.log(res, 'Res')
}

// 각각 뮤테이션에 필요한 API 작성.
