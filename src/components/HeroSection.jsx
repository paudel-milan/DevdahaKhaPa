import styles from './styles/HeroSection.module.css'
import logo from '../assets/logo.png'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>देवदह खानेपानी संस्थान</h1>
        <p className={styles.subtitle}>Reliable and clean drinking water for all.</p>
      </div>
    </section>
  )
}
