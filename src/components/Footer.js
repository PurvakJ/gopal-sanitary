import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaArrowUp, FaBuilding, FaStore, FaWhatsapp, FaClock, FaTrophy, FaShieldAlt } from 'react-icons/fa';
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
    <footer className="footer" role="contentinfo">
      {/* Trust Badges Section */}
      <div className="footer-trust-badges">
        <div className="container">
          <div className="trust-badges-grid">
            <div className="trust-badge">
              <FaTrophy className="trust-icon" />
              <span>28+ Years of Excellence</span>
            </div>
            <div className="trust-badge">
              <FaShieldAlt className="trust-icon" />
              <span>100% Genuine Products</span>
            </div>
            <div className="trust-badge">
              <FaWhatsapp className="trust-icon" />
              <span>24/7 WhatsApp Support</span>
            </div>
            <div className="trust-badge">
              <FaClock className="trust-icon" />
              <span>Quick Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info Section */}
            <div className="footer-section">
              <h3>GOPAL <span>SANITARY HOUSE</span></h3>
              <p className="footer-location-badge">Mansa, Punjab | Since 1995</p>
              <p className="footer-description">
                Your Trusted Partner for Premium Sanitary Solutions Since 1995. 
                We provide high-quality bathroom fittings, faucets, showers, and sanitaryware 
                from top brands like JAQUAR, VGUARD, KITEC, and 50+ more.
              </p>
              <div className="social-icons" aria-label="Social media links">
                <a 
                  href="https://www.instagram.com/gopal_sanitary_house/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Gopal Sanitary House on Instagram" 
                  className="social-icon instagram"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
                <a 
                  href="https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Find Gopal Sanitary House on Justdial" 
                  className="social-icon justdial"
                >
                  <FaStore aria-hidden="true" />
                </a>
                <a 
                  href="https://www.indiamart.com/company/161003270/?srsltid=AfmBOoreP4x6VoHt9bXEWLrxdX5KvXbfSpbqiuinfAGDPtAHFh_NRxY6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Find Gopal Sanitary House on IndiaMART" 
                  className="social-icon indiamart"
                >
                  <FaBuilding aria-hidden="true" />
                </a>
                <a 
                  href="https://wa.me/919056262171" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Chat with Gopal Sanitary House on WhatsApp" 
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section">
              <h3>QUICK LINKS</h3>
              <ul className="footer-links" role="navigation" aria-label="Footer navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog - All Brands</Link></li>
                <li><Link to="/about">About Gopal Sanitary House</Link></li>
                <li><Link to="/contact">Contact & Store Location</Link></li>
              </ul>
            </div>

            {/* Products Section */}
            <div className="footer-section">
              <h3>OUR CATALOG</h3>
              <ul className="footer-links" role="navigation" aria-label="Product categories">
                <li><Link to="/catalog" state={{ selectedBrand: 'JAQUAR' }}>JAQUAR Products</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'VGUARD' }}>VGUARD Products</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'KITEC' }}>KITEC Products</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'NOVA' }}>NOVA Sanitaryware</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'EROS' }}>EROS Bathroom Fittings</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'AROFIC' }}>AROFIC Products</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'DEEPALI' }}>DEEPALI Sinks</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'SHEENZ' }}>SHEENZ Faucets</Link></li>
                <li><Link to="/catalog" state={{ selectedBrand: 'ZERO-B' }}>ZERO-B Water Purifiers</Link></li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="footer-section">
              <h3>CONTACT INFO</h3>
              <div className="contact-info">
                <p className="store-name">
                  <strong>GOPAL SANITARY HOUSE</strong>
                </p>
                <p>
                  <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
                  <span>Near Ganga Oil Mill, J.K. Road,<br />Mansa - 151505, Punjab, India</span>
                </p>
                <p>
                  <FaPhone className="contact-icon" aria-hidden="true" />
                  <a href="tel:+919056262171">+91 90562 62171</a> / <a href="tel:+919988883123">+91 99888 83123</a>
                </p>
                <p>
                  <FaEnvelope className="contact-icon" aria-hidden="true" />
                  <a href="mailto:gopalsanitaryhousemansa@gmail.com">gopalsanitaryhousemansa@gmail.com</a>
                </p>
                <p className="business-hours">
                  <FaClock className="contact-icon" aria-hidden="true" />
                  <span>Mon-Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 2:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Gopal Sanitary House, Mansa. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/contact">Sitemap</Link>
            </div>
          </div>
          <p className="footer-credit">
            Premium Sanitary Store in Mansa, Punjab | Authorized Dealer for JAQUAR, VGUARD, KITEC & 50+ Brands
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollButton ? 'show' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </footer>
  );
}

export default Footer;