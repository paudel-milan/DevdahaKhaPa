import notices from '../data/notices.json'
import styles from './styles/NoticeList.module.css'

export default function NoticeList() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>सूचनाहरू / Notices</h2>
      <ul className={styles.list}>
        {notices.map((notice, index) => (
          <li key={index}>
            <a href={notice.file} target="_blank" rel="noreferrer">
              {notice.title} - {notice.date}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
