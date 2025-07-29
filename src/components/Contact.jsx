// src/components/Contact.jsx
import React, { useState } from 'react';
import styles from './styles/Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'; // Import icons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server (e.g., using fetch API)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Google Maps Embed URL for Devdaha, Rupandehi.
  // This is a generic embed for Devdaha. For a precise location of Devdaha Khanepani,
  // go to Google Maps, find the exact location, click "Share" -> "Embed a map", and copy the src.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113977.89249787162!2d83.83447547076632!3d27.60833215981792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994519985a6a623%3A0x6a05e55e00b21718!2sDevdaha%20Municipality!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp";
  // NOTE: Replace '1700000000000' with an actual timestamp or current date for cache busting if needed, or simply use the generated one.
  // Using the current date: Tuesday, July 29, 2025 at 3:46:56 PM +0545, this translates to timestamp: 1753794416000

  const specificDevdahaKhanepaniLocationEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.467462089851!2d83.69345717466827!3d27.57503467641066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399476b7b7524853%3A0x8e5b4a9f9c73b0a2!2sDevdaha%20Khanepani%20Tatha%20Saral%20Safai%20Sansthan!5e0!3m2!1sen!2snp!4v1722248873095!5m2!1sen!2snp";
  // The above URL is a generated embed for 'Devdaha Khanepani Tatha Saral Safai Sansthan' - you should verify its accuracy on Google Maps.


  return (
    <section className={styles.contactSection} id="contact" aria-labelledby="contact-us-heading">
      <div className={styles.container}>
        <h2 id="contact-us-heading" className={styles.heading}>
          सम्पर्क <span className={styles.englishText}>/ Contact Us</span>
        </h2>

        <div className={styles.contentWrapper}>
          {/* Left Column: Contact Information and Map */}
          <div className={styles.contactInfo}>
            <h3 className={styles.subHeading}>Get in Touch</h3>
            <p className={styles.introText}>
              We are here to assist you with your water supply needs. Please feel free to reach out to us using the contact details below or by filling out the inquiry form.
            </p>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} aria-hidden="true" />
              <div>
                <strong>Our Location:</strong>
                <address> {/* Use <address> for semantic location info */}
                  Devdaha-7, Rupandehi, Lumbini Province, Nepal
                </address>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} aria-hidden="true" />
              <div>
                <strong>Phone:</strong>
                <p><a href="tel:+97771402402" className={styles.contactLink} aria-label="Call office phone number">+977-71-402402</a></p>
                <p><a href="tel:+9779800000000" className={styles.contactLink} aria-label="Call mobile number">+977-9800000000</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} aria-hidden="true" />
              <div>
                <strong>Email:</strong>
                <p><a href="mailto:info@devdahakhanepani.org.np" className={styles.contactLink} aria-label="Send email to info@devdahakhanepani.org.np">info@devdahakhanepani.org.np</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} aria-hidden="true" />
              <div>
                <strong>Office Hours:</strong>
                <p>Sunday - Friday: 10:00 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className={styles.mapContainer}>
              <h3 className={styles.mapHeading}>Find Us on Map</h3>
              <iframe
                src={specificDevdahaKhanepaniLocationEmbed} // Using the more specific embed URL
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Devdaha Khanepani Sansthan"
                aria-label="Location of Devdaha Khanepani Sansthan on Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.contactForm}>
            <h3 className={styles.subHeading}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} aria-label="Contact form to send a message">
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name:<span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  aria-required="true"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email:<span className={styles.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  aria-required="true"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject:<span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  aria-required="true"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message:<span className={styles.required}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  aria-required="true"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}