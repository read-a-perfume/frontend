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

export const postReviewComment = async ({
  id,
  content,
}: {
  id: number
  content: string
}) => {
  const res = await instance.post(`/reviews/${id}/comments`, {content})
  return res.data
}
export const deleteReviewComment = async data => {
  const {commentId, userId} = data
  const res = await instance.delete(`/reviews/${commentId}/comments/${userId}`)
  return res.data
}

// 각각 뮤테이션에 필요한 API 작성.
