import instance from '@api/instance'
import {IfReviewRequest} from 'types/review.interface'

export const postReviewCreate: (
  data: IfReviewRequest,
) => Promise<IfReviewRequest> = async (data: IfReviewRequest) => {
  const res = await instance.post('/reviews', {...data})
  return res.data
}

export const postReviewImageFileUpload = async (data: any) => {
  const res = await instance.post('/files', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return res.data
}

// 각각 뮤테이션에 필요한 API 작성.
