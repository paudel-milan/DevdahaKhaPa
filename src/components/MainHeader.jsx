import React from 'react';
import styles from './styles/MainHeader.module.css'; // New CSS Module
import logo from '../assets/logo.png'; // Your existing logo
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Icons for phone and email

export default function MainHeader() {
  return (
    <header className={styles.mainHeader} role="banner"> {/* Use <header> for semantic meaning */}
      <div className={styles.container}>
        {/* Left Section: Logo, Name, Slogan */}
        <div className={styles.brandInfo}>
          <a href="/" className={styles.logoLink} aria-label="Devdaha Khanepani Sansthan Homepage">
            <img src={logo} alt="Devdaha Khanepani Sansthan Logo" className={styles.logoImg} />
          </a>
          <div className={styles.orgDetails}>
            <h1 className={styles.orgName}>देवदह खानेपानी तथा सरसफाई संस्था</h1>
            <p className={styles.slogan}>Providing Reliable and Clean Drinking Water</p>
          </div>
        </div>

        {/* Right Section: Call and Email details */}
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} aria-hidden="true" /> {/* Hide decorative icon from screen readers */}
            <div className={styles.contactTextGroup}>
              <span className={styles.contactLabel}>Call Us Today</span> {/* Use span for label if not heading */}
              <a href="tel:+97771402402" className={styles.contactValue}>+977-71-402402</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} aria-hidden="true" /> {/* Hide decorative icon from screen readers */}
            <div className={styles.contactTextGroup}>
              <span className={styles.contactLabel}>Email Us</span>
              <a href="mailto:info@devdahakhanepani.org.np" className={styles.contactValue}>info@devdahakhanepani.org.np</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}