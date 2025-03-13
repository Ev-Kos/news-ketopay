import { useState } from 'react';
import { Button } from '../button/button';
import styles from './styles.module.css';
import { Modal } from '../modal/modal';
import { news_desk } from '../../utils/constants';

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const handlerModal = () => {
		setMenuOpen(!isMenuOpen)
	}

	return (
		<header className={styles.header}>
			<Button onTouchStart={handlerModal}>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</Button>
			<h1 className={styles.title}>Besider</h1>
			{isMenuOpen && (
				<Modal closeModal={handlerModal}>
					<ul className={styles.list}>
						{news_desk.map((item, index) => 
							<li className={styles.listItem} key={index}>{item}</li>
						)}
					</ul>
				</Modal>
			)}
		</header>

		
	)
}
