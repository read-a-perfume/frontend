// 노트 조회
export interface IfPerfumeNote {
  id: number
  thumbnail: string
  name: string
}

// 자세한 노트 조회
export interface InPerfumeNoteDetail extends IfPerfumeNote {
  description: string
}

// 향수 리스트 향수 조회
export interface IfPerfume {
  id: number
  name: string
  thumbnail: string
  brandName: string
  strength: string
  duration: string
}


interface IfPerfumeBase {
  name: string
  story: string
  concentration: string
  perfumeShopUrl: string
}

// 자세한 향수 조회
export interface IfPerfumeDetail extends IfPerfumeBase {
  brandName: string
  categoryName: string
  categoryTags: string
  thumbnail: string
  topNotes: IfPerfumeNote[]
  middleNotes: IfPerfumeNote[]
  baseNotes: IfPerfumeNote[]
}

// 향수 생성
export interface IfPerfumeRequest extends IfPerfumeBase {
  brandId: number
  categoryId: number
  thumbnailId: number
  topNoteIds: number[]
  middleNoteIds: number[]
  baseNoteIds: number[]
}

// 선호 향수
export interface IfPerfumeFavorite {
  perfumeName: string
}

// 향수 검색
export interface IfPerfumeSearch {
  perfumeNameWithBrand: string
  perfumeId: string
}

// 향수 통계 데이터
export interface IfPerfumeStatistic {
  strength: {HEAVY: number; MODERATE: number; LIGHT: number}
  duration: {LONG: number; TOO_SHORT: number; SHORT: number; MEDIUM: number}
  season: {SUMMER: number; WINTER: number; SPRING: number; FALL: number}
  dayType: {SPECIAL: number; REST: number; TRAVEL: number; DAILY: number}
  sex: {MALE: number; OTHER: number; FEMALE: number}
}

// 카테고리 조회
export interface IfCategory {
  id: number
  name: string
  description: string
  tags: string // 어 원래 문자열에 #붙혀서 줬나요?
  thumbnail: string
}

// 브랜드 조회
export interface IfBrand {
  name: string
  story: string
  thumbnail: string
}
