// opinion: 유저(사람)에 대한 것끼리, 리뷰에 대한 것 끼리, 향수에 대한 것 끼리
// 우선 GET에 대해서만 작업

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

export interface ReviewOptionType {
  name: string
  code: string
}

export interface PerfumeStatisticType {
  strength: {HEAVY: number; MODERATE: number; LIGHT: number}
  duration: {LONG: number; TOO_SHORT: number; SHORT: number; MEDIUM: number}
  season: {SUMMER: number; WINTER: number; SPRING: number; FALL: number}
  dayType: {SPECIAL: number; REST: number; TRAVEL: number; DAILY: number}
  sex: {MALE: number; OTHER: number; FEMALE: number}
}

export interface PerfumeType {
  id: number
  name: number
  thumbnail: number
  brandName: number
  strength: number
  duration: number
}

export interface FavoritePerfumeType {
  perfumeName: string
}

export interface SearchPerfumeType {
  perfumeNameWithBrand: string
  perfumeId: string
}

export interface PerfumeNoteType {
  id: number
  thumbnail: string
  name: string
  // description:string 무슨 차이일까요?
}

export interface DetailPerfumeType {
  name: string
  story: string
  concentration: string
  perfumeShopUrl: string
  brandName: string
  categoryName: string
  categoryTags: string
  thumbnail: string
  topNotes: PerfumeNoteType[]
  middleNotes: PerfumeNoteType[]
  baseNotes: PerfumeNoteType[]
}

export interface CategoryType {
  id: number
  name: string
  description: string
  tags: string // 어 원래 문자열에 #붙혀서 줬나요?
  thumbnail: string
}

export interface BrandType {
  name: string
  story: string
  thumbnail: string
}
