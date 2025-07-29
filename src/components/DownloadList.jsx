import React from 'react';
import downloads from '../data/downloads.json'; // Make sure this path is correct
import styles from './styles/DownloadList.module.css';
import { FaCalendarAlt, FaFilePdf, FaFileWord, FaFileExcel, FaDownload } from 'react-icons/fa'; // Import icons

// You might need to install react-icons: npm install react-icons

export default function DownloadList() {
  // Function to get the appropriate icon based on file type
  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FaFilePdf className={styles.typeIcon} />;
      case 'docx':
      case 'doc':
        return <FaFileWord className={styles.typeIcon} />;
      case 'xlsx':
      case 'xls':
        return <FaFileExcel className={styles.typeIcon} />;
      default:
        return <FaDownload className={styles.typeIcon} />; // Generic download icon
    }
  };

  // Sort downloads by date, newest first (assuming date format is consistent like YYYY/MM/DD)
  const sortedDownloads = [...downloads].sort((a, b) => {
    // Extract YYYY/MM/DD part for consistent comparison
    const dateA = a.date.split(' ')[0];
    const dateB = b.date.split(' ')[0];
    return dateB.localeCompare(dateA);
  });

  // Limit the number of downloads shown on the main page (e.g., 6)
  const downloadsToShow = sortedDownloads.slice(0, 6); // Display top 6 downloads

  return (
    <section className={styles.downloadSection} id="downloads">
      <div className={styles.container}>
        <h2 className={styles.heading}>डाउनलोडहरू <span className={styles.englishText}>/ Downloads</span></h2>

        {downloadsToShow.length > 0 ? (
          <div className={styles.downloadGrid}>
            {downloadsToShow.map((download) => (
              <div key={download.id} className={styles.downloadCard}>
                <div className={styles.cardHeader}>
                  {getFileIcon(download.type || 'unknown')} {/* Display file type icon */}
                  <h3 className={styles.downloadTitle}>{download.title}</h3>
                </div>
                <p className={styles.downloadMeta}>
                  <FaCalendarAlt className={styles.icon} /> {download.date}
                  {download.size && <span className={styles.fileSize}> | {download.size}</span>}
                </p>
                <a
                  href={download.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  download // Suggests browser to download the file
                >
                  <FaDownload className={styles.buttonIcon} /> Download {download.type || 'File'}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noDownloads}>No new downloads available at the moment.</p>
        )}

        {sortedDownloads.length > downloadsToShow.length && (
          <div className={styles.viewAllContainer}>
            <a href="/all-downloads" className={styles.viewAllButton}>
              View All Downloads <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}