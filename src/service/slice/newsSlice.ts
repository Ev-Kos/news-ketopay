import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TNews } from '../../utils/types'
import { getNewsApi } from '../../utils/api/getNews'
import { isAxiosSuccessResponse } from '../../utils/isAxiosSuccessResponse'
import { updateGetNewsData } from '../../utils/updateGetNewsData'
import { type RootState } from '../store'


type TNewsSlice = {
  news: TNews[]
  isLoading: boolean
}

type TDate = {
  year: string,
  month: string
}

export const fetchNews = createAsyncThunk('data/fetchNews', async (date: TDate) => {
  const response = await getNewsApi(date.year, date.month)
  if(isAxiosSuccessResponse(response, 'docs')){ 
    return updateGetNewsData(response)
  } else return []
    
})

const initialState: TNewsSlice = {
  news: [],
  isLoading: false
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsAtion(state, action) {
      state.news = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, (state, _) => {
      state.news = []
      state.isLoading = true
    })

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload
      state.isLoading = false
    })

    builder.addCase(fetchNews.rejected, (state, _) => {
      state.news = []
      state.isLoading = false
    })
  },
})

export const { getNewsAtion } = newsSlice.actions
export const isNewsLoading = (state: RootState) => state.newsSlice.isLoading
export default newsSlice.reducer
