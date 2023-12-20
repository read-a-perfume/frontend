export interface IfMagazineRequest {
  title: string
  subTitle: string
  content: string
  coverThumbnailId: number
  thumbnailId: number
  tags: string[]
}

export interface IfBrandListResponse {
  id: number
  name: string
  story: string
  thumbnail: string
}