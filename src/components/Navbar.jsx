import styles from './styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Devdaha Khanepani</div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#notices">Notices</a></li>
        <li><a href="#downloads">Downloads</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
