export interface IfUserType {
  id: number
  name: string
  description: string
  thumbnail: string
}

export interface IfMe {
  userId: number
  username: string
  thumbnail: string
  sex: 'MALE' | 'FEMALE' | 'OTHER'
  birthday: string
  bio: string
  email: string
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
