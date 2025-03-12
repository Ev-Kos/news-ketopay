import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TNews } from '../../utils/types'
import { getNewsApi } from '../../utils/api/getNews'
import { isAxiosSuccessResponse } from '../../utils/isAxiosSuccessResponse'
import { updateGetNewsData } from '../../utils/updateGetNewsData'


type TNewsSlice = {
  news: TNews[]
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
    })

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = [...state.news, ...action.payload]
    })

    builder.addCase(fetchNews.rejected, (state, _) => {
      state.news = []
    })
  },
})

export const { getNewsAtion } = newsSlice.actions
export default newsSlice.reducer
