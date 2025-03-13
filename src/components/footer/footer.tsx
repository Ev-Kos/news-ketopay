import styles from './styles.module.css'
import footerLogo from '../../assets/footerLogo.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <li className={styles.footerText}>LogIn</li>
        <li className={styles.footerText}>About Us</li>
        <li className={styles.footerText}>Publishers</li>
        <li className={styles.footerText}>Sitemap</li>
      </nav>
      <div className={styles.footerLogo}>
        <p className={styles.footerText}>Powered by</p>
        <img src={footerLogo} alt='logo'/>
      </div>
      <p className={styles.footerText}>&copy; Bisider, Inspired by Insider</p>
    </footer>
  )
}
