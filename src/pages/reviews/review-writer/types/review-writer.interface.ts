export interface ReviewWriterFormProps {
    perfumeId: number //향수 ID
    season: string // 어울리는 계절
    dayType: string
    strength: string // 향수 강도
    duration: string //향수 지속력
    shortReview: string // 한줄 리뷰
    fullReview: string // 상세 리뷰
    keywords: number[]  //리뷰 태그
    thumbnails: any //리뷰 썸네일 이미지
  }
  
  export interface IfPerfumeReviewFormBaseProps {
    formValues: ReviewWriterFormProps
    handleFormDataChange: (event: React.ChangeEvent) => void
  }
  