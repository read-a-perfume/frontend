export const reviewQueryKeys = {
  search: (keyword: string) => [`perfume-search-${keyword}`],
  list: ({page, size, sort}: {page: number; size: number; sort: string}) => [
    'review-list',
    page,
    size,
    sort,
  ],
  details: (id: number) => [`review-details-${id}`],
  options: ['review-options'],
}

export const reviewMuationKeys = {
  create: ['review-write'],
  remove: ['review-remove'],
  commenntAdd: ['review-comment-add'],
  commenntRemove: ['review-comment-remove'],
  likeAddRemove: (id: number) => [`review-like-${id}`],
  fileUpload: ['file-upload'],
}
