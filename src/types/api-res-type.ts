export interface userType {
  id: number
  username: string
  thumbnail: string
}

export interface authorType {
  id: number
  name: string
}

export interface eachReviewType {
  // 리뷰 목록을 불러올때 각 리뷰에 대한 타입
  id: number
  shortReview: string
  user: userType
  thumbnails: string // 왜 user와 달리 복수일까요?
  keywords: string[]
  likeCount: number
  commentCount: number
}

export interface detailReviewType {
  // 각 리뷰를 상세히 볼때 타입
  id: number
  shortReview: string
  fullReview: string
  dayType: string
  strength: string
  season: string
  duration: string
  perfumeId: number
  author: authorType
  keywords: string[]
  thumbnails: string
  likeCount: number
  commentCount: number
}

export interface followCountType {
  // 유저의 팔로우(워)수에 대한 타입
  followerCount: number
  followingCount: number
}
