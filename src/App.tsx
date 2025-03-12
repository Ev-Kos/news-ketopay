import styles from './styles.module.css'
import { Header } from './components/header/header'
import { useEffect, useState } from 'react'
import { News } from './components/news/news'
import { useAppDispatch } from './service/store';
import { fetchNews } from './service/slice/newsSlice';

function App() {
  const [date, setDate] = useState<Date>()

  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    // setInterval(() => {
    //   dispatch(fetchNewsAction());
    // }, 30000);
  }, [dispatch]);

  

  return (
    <>
      <Header />
      <News />
    </>
  )
}

export default App
