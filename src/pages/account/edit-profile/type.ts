export interface FormInfoDataType {
  username: string
  bio: string
  sex: 'MALE' | 'FEMALE' | 'OTHER'
}

export interface FormThumbnailDataType {
  thumbnail: {file: File | null; url: string}
}
