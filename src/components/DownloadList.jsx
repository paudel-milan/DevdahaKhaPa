import downloads from '../data/downloads.json'
import styles from './styles/DownloadList.module.css'

export default function DownloadList() {
  return (
    <section className={styles.downloads} id="downloads">
      <h2 className={styles.heading}>डाउनलोडहरू / Downloads</h2>
      <ul className={styles.list}>
        {downloads.map((d, index) => (
          <li key={index}>
            <a href={d.file} target="_blank" rel="noreferrer">{d.title}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
