import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import { getNews } from '../../service/selectors/newsSelector'
import { useEffect } from 'react'
import { useAppDispatch } from '../../service/store'
import { fetchNews } from '../../service/slice/newsSlice'

type TNewsProps = {
  pub_date: string
}

export const News = () => {
  const news = useSelector(getNews)
console.log(news)
  return (
    <div></div>
  )
}
