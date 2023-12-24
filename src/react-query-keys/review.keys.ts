export const reviewQueryKeys = {
  search: (keyword: string) => [`perfume-search-${keyword}`],
}

export const reviewMuationKeys = {
  create: ['review-write'],
  fileUpload: ['file-upload'],
}