// Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaArrowUp, FaBuilding, FaStore } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>GOPAL <span>SANITARY</span></h3>
          <p className="footer-description">
            Your Trusted Partner for Premium Sanitary Solutions Since 1995. 
            We provide high-quality bathroom and sanitary products at competitive prices.
          </p>
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/gopal_sanitary_house/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Justdial" 
              className="social-icon justdial"
            >
              <FaStore />
            </a>
            <a 
              href="https://www.indiamart.com/company/161003270/?srsltid=AfmBOoreP4x6VoHt9bXEWLrxdX5KvXbfSpbqiuinfAGDPtAHFh_NRxY6" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="IndiaMART" 
              className="social-icon indiamart"
            >
              <FaBuilding />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3>CATALOG</h3>
          <ul className="footer-links">
            <li><Link to="/catalog">Wash Basins</Link></li>
            <li><Link to="/catalog">Faucets</Link></li>
            <li><Link to="/catalog">Bathtubs</Link></li>
            <li><Link to="/catalog">Showers</Link></li>
            <li><Link to="/catalog">Mirrors</Link></li>
            <li><Link to="/catalog">Grab Rails</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>CONTACT INFO</h3>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Near Ganga Oil Mill, J.K. Road, Mansa, Punjab - 151505</span>
            </p>
            <p>
              <FaPhone className="contact-icon" />
              <span>+91 90562 62171</span>
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              <span>info@gopalsanitary.com</span>
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Gopal Sanitary. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollButton ? 'show' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;