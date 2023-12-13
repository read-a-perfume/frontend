import instance from '@api/instance'

// 향수 조회
export const fetchPerfume = async (id: string) => {
  try {
    const res = await instance.get(`/perfumes/${id}`)

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

// 향수 통계 데이터 조회
export const fetchPerfumeGraph = async (id: string) => {
  try {
    const res = await instance.get(`/perfumes/${id}/statistics`)

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}

// 해당 향수 리뷰 데이터 조회
export const fetchPerfumeReviewData = async (id: string) => {
  try {
    const res = await instance.get(`perfumes/${id}/reviews?size=6&page=0`)

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
