import instance from '@api/instance'

// 향수 조회
export const fetchPerfume = async (id: string) => {
  try {
    const res = await instance.get(`/perfumes/${id}`)

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
  }
}

// 향수 테마 조회
export const fetchPerfumeTheme = async () => {
  try {
    const res = await instance.get('/perfume-themes/recent')

    const data = res.data

    return data
  } catch (error: any) {
    console.error('향수 테마 조회 중 오류 발생:', error)
  }
}

// 향수 통계 데이터 조회
export const fetchPerfumeGraph = async (id: string) => {
  try {
    const res = await instance.get(`/perfumes/${id}/statistics`)

    const data = res.data

    return data
  } catch (error: any) {
    console.error('향수 통계 데이터 조회 중 오류 발생:', error)
    throw error
  }
}

/**
 *  해당 향수 리뷰 데이터 조회
 *  향수 디테일 페이지 - 향수 리뷰 조회
 */

export const fetchPerfumeReviewData = async (
  id: string,
  page: number,
  sort: string,
) => {
  try {
    const res = await instance.get(
      `/perfumes/${id}/reviews?page=${page}&size=6&sort=${sort}`,
    )

    const data = res.data

    return data
  } catch (error: any) {
    console.error('향수 리뷰 데이터 조회 중 오류 발생:', error)
    throw error
  }
}
