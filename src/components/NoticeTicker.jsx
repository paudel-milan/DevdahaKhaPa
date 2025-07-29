import React from 'react';
import styles from './styles/NoticeTicker.module.css';
import allNotices from '../data/notices.json'; // Assuming your notices data is here

export default function NoticeTicker() {
  // Sort notices by date (newest first) and select a few for the ticker
  const recentNotices = [...allNotices]
    .sort((a, b) => {
      // Robust date parsing for comparison, assuming date format includes YYYY/MM/DD like "2081/04/10 (July 25, 2024)"
      // Extract the Nepali date part (e.g., "2081/04/10")
      const getDateSortable = (dateString) => {
        if (!dateString) return 0; // Handle cases where date might be missing
        const datePart = dateString.split(' ')[0]; // Get "2081/04/10"
        // Ensure format is YYYY/MM/DD and convert to a comparable number
        const parts = datePart.split('/');
        if (parts.length === 3) {
          return parseInt(`${parts[0]}${parts[1].padStart(2, '0')}${parts[2].padStart(2, '0')}`, 10);
        }
        return 0; // Fallback for invalid formats
      };

      const sortableDateA = getDateSortable(a.date);
      const sortableDateB = getDateSortable(b.date);

      return sortableDateB - sortableDateA; // Newest first
    })
    .slice(0, 5); // Display top 5 recent notices

  if (recentNotices.length === 0) {
    return null; // Don't render if no notices
  }

  // Prepare content for animation. We'll render multiple identical `tickerText` elements
  // inside the `tickerContent` to create a seamless loop using CSS animation.
  const tickerItems = recentNotices.map((notice, index) => (
    <a
      key={notice.id || index} // Use unique ID or index as key
      href={notice.file || `#notice-${notice.id}`} // Link to the notice file or an internal anchor
      target="_blank"
      rel="noopener noreferrer"
      className={styles.tickerItem}
      aria-label={`Notice: ${notice.title} on ${notice.date.split(' ')[0]}`}
    >
      {notice.title} ({notice.date.split(' ')[0]})
      {index < recentNotices.length - 1 && <span className={styles.separator}> • </span>}
    </a>
  ));

  return (
    <div className={styles.noticeTicker} role="marquee" aria-live="off" aria-label="Latest Notices">
      <div className={styles.container}>
        <span className={styles.tickerLabel}>LATEST NOTICE:</span>
        <div className={styles.tickerContentWrapper}>
          {/* We'll repeat the content directly in JSX for the CSS animation */}
          <div className={styles.tickerContent}>
            {tickerItems}
            {/* Repeat content for seamless loop effect */}
            {tickerItems}
            {tickerItems}
          </div>
        </div>
      </div>
    </div>
  );
}