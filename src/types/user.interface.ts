export interface IfUserType {
  id: number
  name: string
  description:string
  thumbnail: string
}

export interface IfMe{
    userId:number
    username:string
    thumbnail:string
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
