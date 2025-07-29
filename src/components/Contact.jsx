import React, { useState } from 'react';
import styles from './styles/Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'; // Import icons

// You might need to install react-icons: npm install react-icons

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

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>सम्पर्क <span className={styles.englishText}>/ Contact Us</span></h2>

        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subHeading}>Get in Touch</h3>
            <p className={styles.introText}>
              We are here to assist you with your water supply needs. Please feel free to reach out to us using the contact details below or by filling out the inquiry form.
            </p>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <strong>Our Location:</strong>
                <p>Devdaha-7, Rupandehi, Lumbini Province, Nepal</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <strong>Phone:</strong>
                <p>+977-71-402402</p> {/* Example Phone Number */}
                <p>+977-9800000000</p> {/* Example Mobile Number */}
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div>
                <strong>Email:</strong>
                <p><a href="mailto:info@devdahakhanepani.org.np">info@devdahakhanepani.org.np</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14137.954605953041!2d83.57948210344445!3d27.640955938562363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399430c72c11e737%3A0xcb1e9b2b5f6a9e8b!2sDevdaha!5e0!3m2!1sen!2snp!4v1701388800000!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Devdaha Municipality Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3 className={styles.subHeading}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
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