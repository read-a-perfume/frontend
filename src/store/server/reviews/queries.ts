import instance from '@api/instance'
import {FetchPerFumeSearch} from './queries.interface'

// 각각 쿼리에  필요한 API 작성.
export const fetcTest = async data => {
  await instance.post('/Dummy', {...data})
}

export const fetchPerfumeSearch: (
  keyword?: string,
) => Promise<FetchPerFumeSearch[]> = async (keyword?: string) => {
  const res = await instance.get(`/perfumes/search?query=${keyword}`)
  console.log(res, 'Res')
  const data = await res.data
  return data
}
