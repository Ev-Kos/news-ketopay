import { ButtonMenu } from '../button-menu/button-menu';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<ButtonMenu onTouchStart={() => console.log(1)}/>
		</header>
	)
}
