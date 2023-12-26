export const noteQueryKeys = {
  notes: (id: number) => ['notes', {id: id}],
}

export const noteMutateKeys = {
  notes: ['notes'],
}

// /perfumes에서 향수를 조회하나 어떤 것을 불러오느냐에따라 api가 같은 경우 param으로 구분
// 단 향수 리뷰의 경우 향수를 조회하는게 아니므로 따로 구분
export const perfumeQueryKeys = {
  perfumes: (id: number) => ['perfumes', {id: id}],
  perfumeThemes: ['perfume-themes'],
  perfumesSearch: (query: string) => ['perfumes-search', {query: query}],
  perfumesSortFavorite: (
    sort: string = 'favorite',
    lastPerfumeId: number | null = null,
    pageSize: number,
  ) => [
    'perfumes',
    {sort: sort, lastPerfumeId: lastPerfumeId, pageSize: pageSize},
  ],
  perfumesStatistics: (id: number) => ['perfumes-statistics', {id: id}],
  perfumesCategory: (id: number, page: number, size: number) => [
    'perfumes',
    {id: id, page: page, size: size},
  ],
  perfumesBrand: (
    sort: string = 'brand',
    brandId: number | string,
    lastPerfumeId: number | string = '',
    pageSize: number,
  ) => [
    'perfumes',
    {
      sort: sort,
      brandId: brandId,
      lastPerfumeId: lastPerfumeId,
      pageSize: pageSize,
    },
  ],
  perfumesReviews: (
    id: number,
    page: number,
    size: number,
    sort: ('RECENT' | 'LIKE')[],
  ) => ['perfumes-reviews', {id: id, page: page, size: size, sort: sort}],
}

export const perfumeMutateKeys = {
  perfumes: ['perfumes'],
  perfumesFavorite: ['perfumes-favorite'],
}
