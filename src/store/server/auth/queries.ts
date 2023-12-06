import instance from '@api/instance'

export const fetchRefreshToken = async () => {
  const url = '/reissue'
  return await instance.get(url)
}
