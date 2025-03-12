import axios from 'axios'
import { TIMEOUT } from '../constants'

const API_URL = '/nytimes-api/svc/archive/v1/'

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: TIMEOUT,
    headers: {
      'Accept': 'application/json',
    },
})

export default axiosInstance
