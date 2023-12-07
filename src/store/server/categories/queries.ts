import instance from '@api/instance'

/** 카테고리 목록 조회 */
export const fetchGetCategories = async () => {
  try {
    const res = await instance.get('/categories')
    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

// 카테고리별 향수 조회
export const getPerfumeList = async (queryCategoryId: number, page: number) => {
  try {
    console.log(queryCategoryId, page)

    // 임시,
    // 백엔드쪽에서 page=1로 설정해주면 page ${page}로 바꿀것
    const res = await instance.get(
      `/perfumes/category/${queryCategoryId}?page=0&size=10`,
    )

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
