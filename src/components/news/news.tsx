import { useSelector } from 'react-redux'
import { getNews } from '../../service/selectors/newsSelector'
import { TNews } from '../../utils/types'
import styles from './styles.module.css'
import { v4 as uuidv4 } from 'uuid';
import { NewsCard } from '../news-card/news-card';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../service/store';
import { fetchNews, isNewsLoading } from '../../service/slice/newsSlice';
import { LoadingIcon } from '../icons/loadingIcon';

export const News = () => {
  const news = useSelector(getNews)
  const dispatch = useAppDispatch();
  const newsRef = useRef<HTMLUListElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [date, setDate] = useState<{year: string, month: string}>()
  const [newsArr, setNewsArr] = useState<[string, TNews[] | undefined][]>([])
  const isLoading = useSelector(isNewsLoading)

  useEffect(() => {
    const newsGroups = Object.groupBy(news, (item: TNews) =>
      item.pub_date
    )
    const sortedNews = Object.entries(newsGroups).reverse()
    setNewsArr([...newsArr,...sortedNews])
  }, [news])

  useEffect(() => {
    const now = new Date();
    const nowMonth = now.getMonth()+1;
    const nowYear = now.getFullYear();
    setDate({month: String(nowMonth), year: String(nowYear)})
  }, [])

  useEffect(() => {
    if(date) {
      dispatch(fetchNews(date))
      const startInterval = () => {
        intervalRef.current = setInterval(() => {
          dispatch(fetchNews(date))
        }, 30000)
      };
  
      startInterval();
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }

  }, [date]);

  const changeDate = () => {
    let month;
    let year = date?.year
    if(date?.month === "1") {
      month = "12"
      year = String(Number(year) - 1)
    } else {
      month = String(Number(date?.month) - 1)
    }
    setDate({month: month, year: String(year)})
  }

  const isBottom = (element: HTMLUListElement) => {
    if (!element) return false;
    const { scrollTop, scrollHeight, clientHeight } = element;
    return scrollHeight - scrollTop - clientHeight <= 1;
  };

  const handleScroll = useCallback(() => {
    const container = newsRef.current;
    if (container && isBottom(container) && !isLoading) {
      changeDate()
    }
  }, [isLoading]);

  useEffect(() => {
    const container = newsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (  
    <main className={styles.newsBlock}>
      {newsArr.length === 0 ? (
        <div className={styles.loaderEmptyData}>
          <LoadingIcon />
        </div>
      ) : (
        <>
        <ul className={styles.news} ref={newsRef}>
          {newsArr && newsArr.map((item) =>
            <li className={styles.newsContainer} key={uuidv4()}>
              <h2 className={styles.newsDate}>{`News for ${item[0]}`}</h2>
              <ul className={styles.newsCards}>
              {item[1] && item[1].map((item) => 
                <NewsCard card={item} key={uuidv4()}/>
              )}
              </ul>
            </li>
          )}
        </ul>
        <div className={isLoading ? styles.loaderAtive : styles.loader}>
          <LoadingIcon />
        </div>
        </>
      )}
    </main>
  )
}
