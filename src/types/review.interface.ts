// api와 통신하진 않지만 api 데이터내에 포함된 리뷰 작성자
export interface IfReviewAuthor {
  id: number
  name: string
}

// api와 통신하진 않지만 api 대이터내에 포함된 리뷰 작성자
export interface IfReviewUser {
  id: number
  username: string
  thumbnail: string
}

interface IfReviewBase {
  shortReview: string
  thumbnails: string[] //생성할땐 키워드가 넘버형식이고 받을때는 string 형식임.
  keywords: string[] //생성할땐 키워드가 넘버형식이고 받을때는 string 형식임.
}

interface IfReviewBaseDetail {
  fullReview: string
  dayType: string
  strength: string
  season: string
  duration: string
  perfumeId: number
}
//API 구조 변경됨에 따라 기존 IfReviewRespnose데이터는 content로 가게됨.
export interface IfReviewContent extends IfReviewBase {
  id: number
  author: IfReviewUser
  likeCount: number
  commentCount: number
}

// 리뷰 목록 조회
export interface IfReviewResponse {
  content: IfReviewContent[]
  first: boolean
  last: boolean
  hasNext: boolean
  totalPages: number
  totalElements: number
  pageNumber: number
  size: number
}

// 리뷰 상세보기
export interface IfReviewDetailResponse
  extends IfReviewBase,
    IfReviewBaseDetail {
  id: number
  likeCount: number
  commentCount: number
  author: IfReviewAuthor
}

// 리뷰 생성
// 리뷰 생성

export interface IfReviewRequest extends Omit<IfReviewBaseDetail, 'perfumeId'> {
  shortReview: string
  thumbnails: File[] | number[]
  keywords: number[]
  perfume: {
    id: number
    name: string
  }
}

// 리뷰 삭제
export interface IfReviewDeleteRequest {
  id: number
}

// 댓글 생성
export interface IfCommentRequest {
  content: string
}

// 댓글 삭제
export interface IfCommentDeleteRequset {
  id: number
}

// 좋아요 표시/취소
export interface IfLikeRequest {
  id: number
}

// 리뷰 옵션
export interface IfReviewOption {
  name: string
  code: string
}

//리뷰 페이지 향수 검색
export interface IfReviewPerFumeSearch {
  perfumeNameWithBrand: string
  perfumeId: number
}

export interface IfReviewCommentResponse {
  items: IfReviewCommentBase[]
  hasNext: boolean
  hasPrev: boolean
  nextCursor: boolean
  prevCursor: boolean
}

export interface IfReviewCommentBase {
  id: number
  content: string
  createdAt: string
  author: {
    id: number
    name: string
    thumbnail: string
  }
}
