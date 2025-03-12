import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

type TButtonProps = {
	children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...props}: TButtonProps) => {
  return (
		<button className={styles.buttonMenu} type='button' {...props}>
			{children}
		</button>
	)
}
