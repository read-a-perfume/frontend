import axios from 'axios'
import {fetchRefreshToken} from 'src/store/server/auth/queries'

axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    withCredential: true,
  },
})

export default instance
instance.interceptors.response.use(
  response => {
    return response
  },
  async function refresh(error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const response = await fetchRefreshToken()
      if (response?.status === 200) {
        return instance(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)
