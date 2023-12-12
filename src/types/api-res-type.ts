export interface UserType {
  id: number
  username: string
  thumbnail: string
}

export interface AuthorType {
  id: number
  name: string
}

export interface EachReviewType {
  // 리뷰 목록을 불러올때 각 리뷰에 대한 타입
  id: number
  shortReview: string
  user: UserType
  thumbnails: string // 왜 user와 달리 복수일까요?
  keywords: string[]
  likeCount: number
  commentCount: number
}

export interface DetailReviewType {
  // 각 리뷰를 상세히 볼때 타입
  id: number
  shortReview: string
  fullReview: string
  dayType: string
  strength: string
  season: string
  duration: string
  perfumeId: number
  author: AuthorType
  keywords: string[]
  thumbnails: string
  likeCount: number
  commentCount: number
}

export interface FollowCountType {
  // 유저의 팔로우(워)수에 대한 타입
  followerCount: number
  followingCount: number
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