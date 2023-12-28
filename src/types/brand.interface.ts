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
  brandUrl: string
}

export interface IfBrandPerfumeResponse {
  id: number
  name: string
  thumbnail: string
  brandName: string
  strength: string
  duration: string
  hasNext: boolean
}

export interface IfMagazineResponse {
  id: number
  title: string
  content: string
  coverThumbnailId: string
  tags: string[]
}

export interface IfMagazineListResponse {
  items: IfMagazineResponse[]
  hasNext: boolean
  hasPrev: boolean
  nextCursor: string
  prevCursor: string
}
