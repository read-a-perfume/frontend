import instance from '@api/instance'

// 향수 조회
export const getPerfume = async (id: string) => {
  try {
    const res = await instance.get(`/perfumes/${id}`)

    const data = res.data

    return data
  } catch (error: any) {
    console.log(error)
    throw error
  }
}
