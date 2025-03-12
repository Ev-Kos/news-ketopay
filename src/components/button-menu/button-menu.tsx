import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

export const ButtonMenu = ({...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
		<button className={styles.buttonMenu} type='button' {...props}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	)
}
