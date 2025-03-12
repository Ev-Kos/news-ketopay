import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from '../store'

const getNewsSliceState = (state: RootState) => state.newsSlice

export const getNews= createSelector(
  getNewsSliceState,
  newsState => newsState.news,
)
