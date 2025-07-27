import styles from './styles/About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>हाम्रो बारेमा / About Us</h2>
      <p>
        देवदह खानेपानी संस्थान समुदायलाई शुद्ध, सुरक्षित र भरपर्दो पानी आपूर्ति गर्न समर्पित एक सार्वजनिक संस्था हो। 
        हामी प्राविधिक सुधार, पारदर्शिता र सेवाग्राही सन्तुष्टि प्रति प्रतिबद्ध छौं।
      </p>
    </section>
  )
}
