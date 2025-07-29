import React from 'react';
import styles from './styles/About.module.css';
import aboutImage from '../assets/about-us-water.png'; // !!! IMPORTANT: Add a relevant image to src/assets !!!

export default function About() {
  return (
    <section className={styles.aboutSection} id="about" aria-labelledby="about-us-heading">
      <div className={styles.container}>
        <h2 id="about-us-heading" className={styles.heading}>
          हाम्रो बारेमा <span className={styles.englishText}>/ About Us</span>
        </h2>

        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <p className={styles.introParagraph}>
              Devdaha Khanepani Sansthan is a public institution located in Devdaha Municipality, Lumbini Province, Nepal.
              We are dedicated to continuously providing pure, safe, and reliable drinking water services to the residents of this area.
              Since its establishment, the Sansthan has aimed to improve the health and living standards of the community.
            </p>

            <p className={styles.detailParagraph}>
              We are fully committed to technical improvement, transparency in service delivery, and customer satisfaction.
              We are continuously working on water source conservation, quality control, and modernization of the distribution system.
              Our team is determined to meet the community's needs and achieve excellence in water management.
            </p>

            {/* "Read more" button as per requirement */}
            <a href="/about-us" className={styles.learnMoreButton} aria-label="Learn more about Devdaha Khanepani Sansthan">
              Read more
            </a>
          </div>

          <div className={styles.imageColumn}>
            <img src={aboutImage} alt="Clean water flowing from a tap, symbolizing reliable water supply" className={styles.aboutImage} />
            {/* Optional: Add a caption if needed */}
            {/* <p className={styles.imageCaption}>Our commitment to clean and safe water supply.</p> */}
          </div>
        </div>

        {/* Optional: Mission/Vision/Values section - uncomment and populate if desired */}
        {/*
        <div className={styles.missionVision}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>To ensure access to quality drinking water 24/7 for every household in the Devdaha area.</p>
          </div>
          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>To establish ourselves as a leading and transparent institution in water management.</p>
          </div>
          <div className={styles.card}>
            <h3>Our Values</h3>
            <ul>
              <li>Integrity</li>
              <li>Customer Focus</li>
              <li>Sustainability</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}