import React from 'react';
import styles from './styles/Footer.module.css';
import logo from '../assets/logo.png'; // Assuming logo.png is in src/assets
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// You might need to install react-icons: npm install react-icons

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get current year

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Column 1: Logo and About */}
          <div className={styles.footerColumn}>
            <a href="/" className={styles.footerLogoLink}>
              <img src={logo} alt="Devdaha Khanepani Sansthan Logo" className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>Devdaha Khanepani</span>
            </a>
            <p className={styles.footerAboutText}>
              Committed to providing pure, safe, and reliable drinking water services to the community of Devdaha Municipality.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/devdahakhanepani" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/devdahakhanepani" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/devdahakhanepani" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com/devdahakhanepani" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/" className={styles.footerLink}>Home</a></li>
              <li><a href="#about" className={styles.footerLink}>About Us</a></li>
              <li><a href="#notices" className={styles.footerLink}>Notices</a></li>
              <li><a href="#downloads" className={styles.footerLink}>Downloads</a></li>
              <li><a href="#contact" className={styles.footerLink}>Contact Us</a></li>
              <li><a href="/faq" className={styles.footerLink}>FAQ</a></li> {/* Example: Add FAQ page */}
              <li><a href="/careers" className={styles.footerLink}>Careers</a></li> {/* Example: Add Careers page */}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Info</h3>
            <address className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <p>Devdaha-7, Rupandehi, Lumbini Province, Nepal</p>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <p><a href="tel:+97771402402">+977-71-402402</a></p>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <p><a href="mailto:info@devdahakhanepani.org.np">info@devdahakhanepani.org.np</a></p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Devdaha Khanepani Sansthan. सबै अधिकारहरू सुरक्षित छन्। All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}