import notices from '../data/notices.json'; // Make sure this path is correct
import styles from './styles/NoticeList.module.css';
import { FaCalendarAlt, FaDownload, FaEye } from 'react-icons/fa'; // Import icons

// You might need to install react-icons: npm install react-icons

export default function NoticeList() {

  const sortedNotices = [...notices].sort((a, b) => {

    const dateA = a.date.split(' ')[0];
    const dateB = b.date.split(' ')[0];
    return dateB.localeCompare(dateA);
  });

  // Limit the number of notices shown on the main page (e.g., 6)
  const noticesToShow = sortedNotices.slice(0, 6); // Display top 6 notices

  return (
    <section className={styles.noticeSection} id="notices">
      <div className={styles.container}>
        <h2 className={styles.heading}>सूचनाहरू <span className={styles.englishText}>/ Notices</span></h2>

        {noticesToShow.length > 0 ? (
          <div className={styles.noticeGrid}>
            {noticesToShow.map((notice) => (
              <div key={notice.id} className={styles.noticeCard}>
                <h3 className={styles.noticeTitle}>{notice.title}</h3>
                <p className={styles.noticeMeta}>
                  <FaCalendarAlt className={styles.icon} /> {notice.date}
                </p>
                {notice.excerpt && <p className={styles.noticeExcerpt}>{notice.excerpt}</p>}
                <a
                  href={notice.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  {notice.type === 'PDF' ? (
                    <>
                      <FaDownload className={styles.buttonIcon} /> Download PDF
                    </>
                  ) : (
                    <>
                      <FaEye className={styles.buttonIcon} /> View Details
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noNotices}>No new notices available at the moment.</p>
        )}

        {sortedNotices.length > noticesToShow.length && (
          <div className={styles.viewAllContainer}>
            <a href="/all-notices" className={styles.viewAllButton}>
              View All Notices <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}