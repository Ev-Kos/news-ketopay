import styles from './styles.module.css'
import { Header } from './components/header/header'
import { useEffect, useState } from 'react'
import { News } from './components/news/news'
import { useAppDispatch } from './service/store';
import { fetchNews } from './service/slice/newsSlice';

function App() {
  const [date, setDate] = useState<{year: string, month: string}>()

  const dispatch = useAppDispatch();

  useEffect(() => {
    const now = new Date();
    const nowMonth = now.getMonth()+1;
    const nowYear = now.getFullYear();
    setDate({month: String(nowMonth), year: String(nowYear)})
  }, [])

  useEffect(() => {
    if(date) {
      dispatch(fetchNews(date));
      // setInterval(() => {
      //   dispatch(fetchNewsAction());
      // }, 30000);
    }

  }, [date]);

  

  return (
    <>
      <Header />
      <News />
    </>
  )
}

export default App
