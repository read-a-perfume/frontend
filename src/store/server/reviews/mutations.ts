import instance from '@api/instance'
import {
  IfCommentDeleteRequset,
  IfCommentRequest,
  IfReviewRequest,
} from 'types/review.interface'

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

export const postReviewComment = async ({content}: IfCommentRequest) => {
  const res = await instance.post('/reviews/11/comments', {content})
  return res.data
}
export const deleteReviewComment = async (id: IfCommentDeleteRequset) => {
  const res = await instance.delete(`/reviews/6/comments/${id}`)
  return res.data
}

// 각각 뮤테이션에 필요한 API 작성.
