// src/components/DownloadList.jsx
import React from 'react';
import downloads from '../data/downloads.json'; // Make sure this path is correct
import styles from './styles/DownloadList.module.css';
import { FaCalendarAlt, FaFilePdf, FaFileWord, FaFileExcel, FaDownload } from 'react-icons/fa'; // Import icons

export default function DownloadList() {
  // Function to get the appropriate icon based on file type
  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FaFilePdf className={styles.typeIcon} aria-hidden="true" />;
      case 'docx':
      case 'doc':
        return <FaFileWord className={styles.typeIcon} aria-hidden="true" />;
      case 'xlsx':
      case 'xls':
        return <FaFileExcel className={styles.typeIcon} aria-hidden="true" />;
      default:
        return <FaDownload className={styles.typeIcon} aria-hidden="true" />; // Generic download icon
    }
  };

  // Function to parse Nepali date "YYYY/MM/DD" into a sortable format (re-used from NoticeList)
  const parseNepaliDate = (dateString) => {
    if (!dateString) return 0;
    const nepalDatePart = dateString.split(' ')[0];
    const parts = nepalDatePart.split('/');
    if (parts.length === 3) {
      return parseInt(`${parts[0]}${parts[1].padStart(2, '0')}${parts[2].padStart(2, '0')}`, 10);
    }
    return 0;
  };

  // Sort downloads by date, newest first
  const sortedDownloads = [...downloads].sort((a, b) => {
    return parseNepaliDate(b.date) - parseNepaliDate(a.date);
  });

  // Limit the number of downloads shown on the main page (e.g., 6)
  const downloadsToShow = sortedDownloads.slice(0, 6); // Display top 6 downloads

  return (
    <section className={styles.downloadSection} id="downloads" aria-labelledby="downloads-heading">
      <div className={styles.container}>
        <h2 id="downloads-heading" className={styles.heading}>
          डाउनलोडहरू <span className={styles.englishText}>/ Downloads</span>
        </h2>

        {downloadsToShow.length > 0 ? (
          <div className={styles.downloadGrid}>
            {downloadsToShow.map((download) => (
              <article key={download.id} className={styles.downloadCard}> {/* Use <article> for semantic grouping */}
                <div className={styles.cardHeader}>
                  {getFileIcon(download.type || 'unknown')} {/* Display file type icon */}
                  <h3 className={styles.downloadTitle}>{download.title}</h3>
                </div>
                <p className={styles.downloadMeta}>
                  <FaCalendarAlt className={styles.icon} aria-hidden="true" /> {/* Hide decorative icon */}
                  <span className={styles.downloadDate}>{download.date}</span>
                  {download.size && <span className={styles.fileSize} aria-label={`File size: ${download.size}`}> | {download.size}</span>}
                </p>
                
                {/* Download Button */}
                <a
                  href={download.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  download // Suggests browser to download the file
                  aria-label={`Download ${download.title} (${download.type || 'file'})`}
                >
                  <FaDownload className={styles.buttonIcon} aria-hidden="true" /> Download {download.type ? download.type.toUpperCase() : 'File'}
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.noDownloads} role="status">No new downloads available at the moment.</p> 
        )}

        {sortedDownloads.length > downloadsToShow.length && (
          <div className={styles.viewAllContainer}>
            <a href="/all-downloads" className={styles.viewAllButton} aria-label="View all available downloads">
              View All Downloads <span className={styles.arrow} aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}