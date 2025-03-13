import { getImage } from '../../utils/getImage'
import { TNews } from '../../utils/types'
import { ImageIcon } from '../icons/imageIcon'
import styles from './styles.module.css'

type TNewsCard = {
  card: TNews
}

export const NewsCard = ({card}: TNewsCard) => {
  return (

    <li className={styles.cardContainer}>
      <a href={card.web_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardContainerLink}>
      {card.multimedia.length !== 0 ? (
        <img className={styles.cardImage} src={getImage(card.multimedia[0]?.url)} 
        alt={card.multimedia[0]?.caption ? card.multimedia[0].caption : 'photo'}/>
      ) : (
        <div className={styles.cardImageMock}>
          <ImageIcon />
        </div>
      )}
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{card.source}</h3>
        <p className={styles.cardText}>{card.abstract}</p>
        <p className={styles.cardDate}>{card.pub_date_detail}</p>
      </div>
      </a>
    </li>

  )
}
