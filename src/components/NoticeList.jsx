// src/components/NoticeList.jsx
import React from 'react';
import notices from '../data/notices.json'; // Make sure this path is correct
import styles from './styles/NoticeList.module.css';
import { FaCalendarAlt, FaDownload, FaEye } from 'react-icons/fa'; // Import icons

export default function NoticeList() {
  // Function to parse Nepali date "YYYY/MM/DD" into a sortable format
  const parseNepaliDate = (dateString) => {
    if (!dateString) return 0;
    // Extract the Nepali date part (e.g., "2081/04/10")
    const nepalDatePart = dateString.split(' ')[0];
    const parts = nepalDatePart.split('/');
    if (parts.length === 3) {
      // Return as YYYYMMDD integer for numerical comparison
      return parseInt(`${parts[0]}${parts[1].padStart(2, '0')}${parts[2].padStart(2, '0')}`, 10);
    }
    return 0; // Fallback for invalid formats
  };

  const sortedNotices = [...notices].sort((a, b) => {
    // Sort by Nepali date, newest first
    // CORRECTED TYPO HERE: parseNepaliDate instead of parseNepaliNepaliDate
    return parseNepaliDate(b.date) - parseNepaliDate(a.date);
  });

  // Limit the number of notices shown on the main page (e.g., 6)
  const noticesToShow = sortedNotices.slice(0, 6); // Display top 6 recent notices

  return (
    <section className={styles.noticeSection} id="notices" aria-labelledby="notices-heading">
      <div className={styles.container}>
        <h2 id="notices-heading" className={styles.heading}>
          सूचनाहरू <span className={styles.englishText}>/ Notices</span>
        </h2>

        {noticesToShow.length > 0 ? (
          <div className={styles.noticeGrid}>
            {noticesToShow.map((notice) => (
              <article key={notice.id} className={styles.noticeCard}> {/* Use <article> for individual notice */}
                <h3 className={styles.noticeTitle}>{notice.title}</h3>
                <p className={styles.noticeMeta}>
                  <FaCalendarAlt className={styles.icon} aria-hidden="true" /> {/* Hide decorative icon */}
                  <span className={styles.noticeDate}>{notice.date}</span>
                </p>
                {notice.excerpt && <p className={styles.noticeExcerpt}>{notice.excerpt}</p>}
                
                {/* Link to view/download notice */}
                <a
                  href={notice.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                  aria-label={`${notice.type === 'PDF' ? 'Download' : 'View details for'} ${notice.title}`}
                >
                  {notice.type === 'PDF' ? (
                    <>
                      <FaDownload className={styles.buttonIcon} aria-hidden="true" /> Download PDF
                    </>
                  ) : (
                    <>
                      <FaEye className={styles.buttonIcon} aria-hidden="true" /> View Details
                    </>
                  )}
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.noNotices} role="status">No new notices available at the moment.</p> 
        )}

        {sortedNotices.length > noticesToShow.length && (
          <div className={styles.viewAllContainer}>
            <a href="/all-notices" className={styles.viewAllButton} aria-label="View all past notices">
              View All Notices <span className={styles.arrow} aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}