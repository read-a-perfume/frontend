export interface IfReviewFormProgassStateProps {
  prograss: number
}

//해당 페이지에서 Pros 공통적으로 쓰이는 Props들 적으면 좋을것같아요
export interface IfMainPreviewImageProps {
  thumbnailsFiles: File
}
export interface IfSubPreviewImageProps {
  thumbnailsFiles: File[]
  handleThumbnailDelete: (file: File) => void
  value: number
}
export interface IfReviewFormPreNextProps {
  handleNextPage: () => void
  handlePrevPage: () => void
  prograss: number
}
