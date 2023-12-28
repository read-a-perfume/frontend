import {
  IfReviewDetailResponse,
  IfReviewPerFumeSearch,
  IfReviewResponse,
} from './../../../types/review.interface'
import instance from '@api/instance'

// 각각 쿼리에  필요한 API 작성.

export const fetchPerfumeSearch: (
  keyword?: string,
) => Promise<IfReviewPerFumeSearch[]> = async (keyword?: string) => {
  const res = await instance.get(`/perfumes/search?query=${keyword}`)
  const data = await res.data
  return data
}

export const fetchReviewDeatils: (
  id: number,
) => Promise<IfReviewDetailResponse> = async id => {
  const res = await instance.get(`/reviews/${id}`)
  const data = await res.data
  return data
}

//리뷰페이지 리스트
export const fetchReviewPage: (
  sort: string,
  page: number,
  size: number,
) => Promise<IfReviewResponse> = async (sort, page, size) => {
  const res = await instance.get(
    `reviews?page=${page}&size=${size}&sort=${sort}`,
  )
  const data = await res.data
  return data
}
