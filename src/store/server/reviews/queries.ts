import instance from '@api/instance'

// 각각 쿼리에  필요한 API 작성.
export const fetcTest = async data => {
  await instance.post('/Dummy', {...data})
}
