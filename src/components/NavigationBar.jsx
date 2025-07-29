import React, { useState, useEffect, useRef } from 'react'; // Added useRef for dropdown
import styles from './styles/NavigationBar.module.css';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null); // Ref for the About Us dropdown
  const mobileBreakpoint = 992; // Define your mobile breakpoint consistently (adjust if different in CSS)

  // Function to toggle the main mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // When opening/closing main menu, ensure dropdown is closed
    if (isMenuOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  // Function to close all menus (used when clicking a link or outside)
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  // Function to toggle the About dropdown
  const toggleAboutDropdown = (e) => {
    // Only prevent default and toggle on mobile breakpoint or smaller
    if (window.innerWidth <= mobileBreakpoint) {
      e.preventDefault(); // Prevent navigation on mobile click
      setIsAboutDropdownOpen((prev) => !prev);
    }
    // On desktop, the dropdown is typically handled by CSS hover
  };

  // Handle clicks outside the dropdown to close it (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isAboutDropdownOpen &&
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        window.innerWidth <= mobileBreakpoint
      ) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAboutDropdownOpen]);


  // Effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isMenuOpen]);

  // Close menus if window is resized to desktop from mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${styles.navigationBar} ${styles.sticky}`} role="navigation" aria-label="Main Navigation">
      <div className={styles.container}>
        {/* Hamburger/Close Button for mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="main-navigation-menu" // Link button to nav content
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links and CTA */}
        <div id="main-navigation-menu" className={`${styles.navContent} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="/" className={styles.navLink} onClick={closeAllMenus}>Home</a></li> {/* Use / for homepage */}

            {/* About Us with Dropdown */}
            <li className={`${styles.dropdown} ${isAboutDropdownOpen ? styles.dropdownActiveMobile : ''}`} ref={aboutDropdownRef}>
              <a
                href="#about" // Keep a fallback href for accessibility, though JS handles click on mobile
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                onClick={toggleAboutDropdown}
                aria-haspopup="true" // Indicates a dropdown menu
                aria-expanded={isAboutDropdownOpen ? "true" : "false"}
              >
                About Us
                <FaChevronDown className={`${styles.dropdownArrow} ${isAboutDropdownOpen ? styles.rotateArrow : ''}`} aria-hidden="true" />
              </a>
              <ul className={styles.dropdownMenu} aria-labelledby="about-us-dropdown-toggle"> {/* Link to toggle button */}
                <li><a href="/board-members" className={styles.dropdownItem} onClick={closeAllMenus}>Board Members</a></li>
                <li><a href="/staffs" className={styles.dropdownItem} onClick={closeAllMenus}>Staffs</a></li>
              </ul>
            </li>

            <li><a href="#notices" className={styles.navLink} onClick={closeAllMenus}>Notices</a></li>
            <li><a href="#gallery" className={styles.navLink} onClick={closeAllMenus}>Gallery</a></li> {/* Added Gallery based on requirements */}
            <li><a href="#contact" className={styles.navLink} onClick={closeAllMenus}>Contact Us</a></li> {/* Changed to Contact Us */}
          </ul>

          {/* Prominent CTA Button */}
          <a href="#" className={styles.ctaButton} onClick={closeAllMenus} aria-label="New Tap Water Connection Form">
            नयाँ धारा जडान
          </a>
        </div>
      </div>
    </nav>
  );
}