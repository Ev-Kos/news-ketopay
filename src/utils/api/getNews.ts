import { getEndPoint } from './getEndPoint'
import axiosInstance from './axios-instance'
import type { AxiosError } from 'axios'
import { TGetNewsResponse } from '../types'

export const getNewsApi = async (year: string, month: string) => {
  try {
    const result = await axiosInstance.get<TGetNewsResponse>(
      getEndPoint(`${year}`, `${month}.json?api-key=${import.meta.env.VITE_APIKEY}`)
    )
    return result.data.response
  } catch (e) {
    return e as AxiosError
  }
}


  //getEndPoint(`${month}`, `${year}.json?api-key=${import.meta.env.APIKEY}`)
