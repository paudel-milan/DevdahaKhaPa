import React, { useState, useEffect } from 'react';
import styles from './styles/HeroSection.module.css';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Added Chevron icons for navigation

// --- Dummy Data (from your input) ---
const personnelData = [
  {
    id: 1,
    name: "Mr. Guman Singh Kunwar",
    designation: "Chairman",
    phone: "+977 9856030725",
    image: "/personnel/chairman.jpg", // Path relative to public folder, OR import if in src/assets
    bioLink: "#" // Placeholder, update with actual bio page link
  },
  {
    id: 2,
    name: "Mrs. Anisha Paudel",
    designation: "Vice Chairman",
    phone: "+977 9846320810",
    image: "/personnel/vice-chairman.jpg",
    bioLink: "#"
  },
];

const carouselImages = [
  "/carousel_image/p1.jpg",
  "/carousel_image/p2.jpg",
  "/carousel_image/p3.jpg",
];
// ---------------------------------------------------------------------------------

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Auto-slide effect
  useEffect(() => {
    let slideInterval;
    if (carouselImages.length > 1) {
      slideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [carouselImages.length]); // Dependency array to re-run effect if image count changes

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        {/* Left Column: Automatic Carousel (~70%) */}
        <div className={styles.carouselContainer} role="region" aria-label="Image Carousel">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Devdaha Khanepani slide ${index + 1} of ${carouselImages.length}`}
              className={`${styles.carouselImage} ${index === currentSlide ? styles.active : ''}`}
              aria-hidden={index !== currentSlide} // Hide inactive images from screen readers
            />
          ))}

          {/* Carousel Navigation Arrows (Optional, can be added for manual control) */}
          {carouselImages.length > 1 && (
            <>
              <button
                className={`${styles.carouselNavButton} ${styles.prev}`}
                onClick={goToPrevSlide}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                className={`${styles.carouselNavButton} ${styles.next}`}
                onClick={goToNextSlide}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Carousel Dots */}
          <div className={styles.carouselDots} role="tablist">
            {carouselImages.map((_, idx) => (
              <button // Use button for accessibility
                key={idx}
                className={`${styles.dot} ${idx === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                role="tab" // Indicates it's a tab in a tablist
                aria-selected={idx === currentSlide ? "true" : "false"} // Indicates selection state
              ></button>
            ))}
          </div>
        </div>

        {/* Right Column: Personnel Information (~30%) */}
        <div className={styles.personnelContainer}>
          <h3 className={styles.personnelHeading}>Key Personnel</h3>
          <div className={styles.personnelList}> {/* Added wrapper for better layout control */}
            {personnelData.map(person => (
              <div key={person.id} className={styles.personnelCard}>
                <img src={person.image} alt={`${person.name}, ${person.designation}`} className={styles.personnelImage} />
                <div className={styles.personnelDetails}>
                  <h4 className={styles.personnelName}>{person.name}</h4>
                  <p className={styles.personnelDesignation}>{person.designation}</p>
                  {/* Added a mailto link for email if available */}
                  {person.phone && (
                    <p className={styles.personnelPhone}>
                      <a href={`tel:${person.phone.replace(/\s/g, '')}`} aria-label={`Call ${person.name} at ${person.phone}`}>
                        {person.phone}
                      </a>
                    </p>
                  )}
                  {person.bioLink && (
                    <a href={person.bioLink} className={styles.viewProfileButton} aria-label={`View profile for ${person.name}`}>
                      View Profile <FaExternalLinkAlt className={styles.profileIcon} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}