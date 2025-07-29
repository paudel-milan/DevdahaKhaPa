import React from 'react';
import styles from './styles/TopInfoBar.module.css'; // New CSS Module
import { FaMapMarkerAlt, FaFacebookF, FaYoutube } from 'react-icons/fa'; // Icons

export default function TopInfoBar() {
  return (
    <div className={styles.topInfoBar}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <FaMapMarkerAlt className={styles.icon} aria-hidden="true" />
          <span className={styles.locationText}>Devdaha-7, Rupandehi, Nepal</span>
        </div>
        <div className={styles.rightContent}>
          <a
            href="https://www.facebook.com/devdahakhanepani"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Visit us on Facebook"
          >
            <FaFacebookF className={styles.icon} aria-hidden="true" />
          </a>
          {/* Add YouTube Icon */}
          <a
            href="https://www.youtube.com/@DevdahaKhanepani" // Placeholder URL, update as needed
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Visit us on YouTube"
          >
            <FaYoutube className={styles.icon} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}