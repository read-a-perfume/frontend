import axios from 'axios'
axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
    'Access-Control-Allow-Origin': `http://localhost:5173`,
    'Access-Control-Allow-Credentials': 'true',
    withCredential: true,
  },
})

export default instance
