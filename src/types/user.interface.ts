export interface IfUserType {
  id: number
  name: string
  description: string
  thumbnail: string
}

export interface IfUser {
  id: number
  username: string
  thumbnail: string
  sex: 'MALE' | 'FEMALE' | 'OTHER'
  bio: string
}

export interface IfFollowRequest {
  id: number
}

export interface IfFollowResponse {
  followerCount: number
  followingCount: number
}

export interface IfReviewCount {
  reviewCount: number
}

export interface IfUserTypePost {
  categoryIds: number[]
}