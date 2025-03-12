import { useSelector } from 'react-redux'
import { getNews } from '../../service/selectors/newsSelector'
import { TNews } from '../../utils/types'
import { getDate } from '../../utils/getDate'
import { useEffect, useState } from 'react'

export const News = () => {
  const news = useSelector(getNews)

  const newsGroups = Object.groupBy(news, (item: TNews) =>
    item.pub_date
  )
  const sortedNews = Object.entries(newsGroups).reverse();

  return (
    <ul>
      {/* {sortedNews && sortedNews.map((item) =>
         <li>{item}</li>
      )} */}
    </ul>
  )
}
