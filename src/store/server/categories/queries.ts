import instance from '@api/instance'
import {IfCategory} from 'types/perfume.interface'

/** 카테고리 목록 조회 */
export const fetchCategories = async (): Promise<IfCategory[]> => {
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
export const fetchPerfumeList = async (
  queryCategoryId: number,
  page: number,
  size?: number,
) => {
  try {
    // console.log(queryCategoryId, page, size)
    const res = await instance.get(`/perfumes/category/${queryCategoryId}`, {
      params: {page: page, size: size ? size : '10'},
    })

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
