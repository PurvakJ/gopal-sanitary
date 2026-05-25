// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          GOPAL <span>SANITARY</span>
        </Link>

        {/* Mobile Menu Icon - Hamburger */}
        <div className="mobile-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/catalog" 
              className={`nav-link ${location.pathname === '/catalog' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;