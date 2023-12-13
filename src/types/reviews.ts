// 임시 타입
export interface UserType {
  id: number
  username: string
  thumbnail: string
}

export interface AuthorType {
  id: number
  name: string
}

export interface UserTasteType {
  id: number
  name: string
  description: string
  thumbnail: string
}

export interface ReviewCountType {
  reviewCount: number
}

export interface FollowCountType {
  followerCount: number
  followingCount: number
}

// ----------------

interface IfReviewBase {
  shortReview: string
  thumbnails: string[]
  keywords: string[]
}

interface IfReviewBaseDetail {
  fullReview: string
  dayType: string
  strength: string
  season: string
  duration: string
  perfumeId: number
}

// 리뷰 목록 조회
export interface IfReview extends IfReviewBase {
  id: number
  user: UserType // 수정 예정
  likeCount: number
  commentCount: number
}

// 리뷰 상세보기
export interface IfReviewDetail extends IfReviewBase, IfReviewBaseDetail {
  id: number
  likeCount: number
  commentCount: number
  author: AuthorType // 수정 예정
}

// 리뷰 생성
export interface IfReviewPost extends IfReviewBase, IfReviewBaseDetail {}

// 리뷰 삭제
export interface IfReviewDelete {
  id: number
}

// 댓글 생성
export interface IfComment {
  content: string
}

// 댓글 삭제
export interface IfCommentDelete {
  id: number
}

// 좋아요 표시/취소
export interface IfLike {
  id: number
}

// 리뷰 옵션
export interface IfReviewOption {
  name: string
  code: string
}
