import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaArrowRight, FaCheckCircle, FaBuilding, FaStore } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init({
          publicKey: EMAILJS_PUBLIC_KEY,
        });
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('EmailJS initialization error:', error);
      }
    } else {
      console.warn('EmailJS public key not found in environment variables');
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('Email service configuration error. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    // Create template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'GOPAL SANITARY HOUSE, MANSA',
      reply_to: formData.email,
    };

    console.log('Sending with params:', templateParams);

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Success! Response:', response);
      
      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      let userMessage = 'Failed to send message. ';
      
      if (error.status === 400) {
        if (error.text && error.text.includes('Public Key')) {
          userMessage += 'Invalid public key. Please check your EmailJS configuration.';
        } else {
          userMessage += 'Bad request. Please check your template configuration.';
        }
      } else if (error.status === 404) {
        userMessage += 'Service or Template not found. Please verify your IDs.';
      } else if (error.status === 401) {
        userMessage += 'Authentication failed. Please check your public key.';
      } else if (error.message && error.message.includes('Failed to fetch')) {
        userMessage += 'Network error. Please check your internet connection.';
      } else if (error.text) {
        userMessage += error.text;
      } else {
        userMessage += 'Please try again or contact us directly at +91 90562 62171.';
      }
      
      setErrorMessage(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '919056262171';
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your premium bathroom fittings and sanitary products available at Gopal Sanitary House, Mansa.');

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Visit Our Store', details: ['GOPAL SANITARY HOUSE', 'Near Ganga Oil Mill, J.K. Road', 'Mansa - 151505, Punjab, India'] },
    { icon: <FaPhone />, title: 'Call Us', details: ['+91 90562 62171', '+91 99888 83123'], links: ['tel:+919056262171', 'tel:+919988883123'] },
    { icon: <FaEnvelope />, title: 'Email Us', details: ['gopalsanitaryhousemansa@gmail.com'], links: ['mailto:gopalsanitaryhousemansa@gmail.com'] },
    { icon: <FaClock />, title: 'Business Hours', details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 2:00 PM (For urgent inquiries)'] },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Gopal Sanitary House Mansa | Premium Bathroom Fittings Dealer | Call +91 90562 62171</title>
        <meta name="description" content="Contact Gopal Sanitary House, the leading sanitary store in Mansa, Punjab. Call +91 90562 62171, email us, or visit our store for premium bathroom fittings, faucets, showers, and sanitaryware from top brands like Jaquar, VGUARD, and KITEC." />
        <meta name="keywords" content="Gopal Sanitary House Mansa contact, sanitary store Mansa phone number, bathroom fittings dealer Mansa, sanitary shop near me Mansa, Gopal Sanitary contact number, bathroom accessories Mansa Punjab, Jaquar dealer contact Mansa, VGUARD dealer contact, sanitaryware shop Mansa" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gopal Sanitary House, Mansa Punjab" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Mansa" />
        <meta name="geo.position" content="29.984671;75.3968015" />
        <meta name="ICBM" content="29.984671, 75.3968015" />
        <link rel="canonical" href="https://gopalsanitaryhouse.com/contact" />
        <meta property="og:title" content="Contact Gopal Sanitary House | Best Sanitary Store in Mansa, Punjab" />
        <meta property="og:description" content="Get in touch with Gopal Sanitary House in Mansa. Premium bathroom fittings, faucets, showers & sanitaryware from top brands. Call +91 90562 62171 or visit our store." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalsanitaryhouse.com/contact" />
        <meta property="og:image" content="https://gopalsanitaryhouse.com/contact-og-image.jpg" />
        <meta property="og:site_name" content="Gopal Sanitary House" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gopal Sanitary House Mansa | Premium Sanitary Solutions" />
        <meta name="twitter:description" content="Visit Gopal Sanitary House in Mansa for premium bathroom fittings, faucets, and sanitaryware from top brands. Call +91 90562 62171 today!" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gopal Sanitary House",
              "image": "https://gopalsanitaryhouse.com/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Ganga Oil Mill, J.K. Road",
                "addressLocality": "Mansa",
                "addressRegion": "Punjab",
                "postalCode": "151505",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.984671,
                "longitude": 75.3968015
              },
              "url": "https://gopalsanitaryhouse.com",
              "telephone": "+919056262171",
              "email": "gopalsanitaryhousemansa@gmail.com",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 09:00-20:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday"],
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/gopal_sanitary_house/",
                "https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET",
                "https://www.indiamart.com/company/161003270/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919056262171",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Punjabi"]
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Bathroom Faucets",
                    "brand": ["JAQUAR", "VGUARD", "KITEC"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Sanitaryware",
                    "brand": ["NOVA", "EROS", "AROFIC"]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Showers",
                    "brand": ["JAQUAR", "GROHE", "SHEENZ"]
                  }
                }
              ],
              "areaServed": {
                "@type": "City",
                "name": "Mansa"
              },
              "description": "Gopal Sanitary House is the leading sanitary store in Mansa, Punjab, offering premium bathroom fittings, faucets, showers, and sanitaryware from top brands like Jaquar, VGUARD, and KITEC since 1995."
            }
          `}
        </script>
      </Helmet>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="container">
              <h1 className="contact-hero-title">Contact Gopal Sanitary House, Mansa</h1>
              <p className="contact-hero-subtitle">Your Trusted Sanitary Store in Mansa, Punjab - Get in Touch Today</p>
              <div className="contact-hero-line"></div>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Contact Info Section */}
            <div className="contact-info-section">
              <h2 className="contact-info-title">Get in Touch</h2>
              <div className="contact-info-line"></div>
              <p className="contact-info-description">
                Have questions about our premium bathroom fittings? Need assistance with product selection? 
                Our expert team at Gopal Sanitary House in Mansa is here to help you. Visit our store, call us, or send a message.
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        item.links && item.links[idx] ? (
                          <a key={idx} href={item.links[idx]} className="contact-link">
                            {detail}
                          </a>
                        ) : (
                          <p key={idx}>{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
                <span>Chat with us on WhatsApp</span>
                <FaArrowRight className="whatsapp-arrow" aria-hidden="true" />
              </a>

              <div className="social-icons" aria-label="Social media links">
                <a href="https://www.instagram.com/gopal_sanitary_house/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="social-icon instagram">
                  <FaInstagram aria-hidden="true" />
                </a>
                <a href="https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET" target="_blank" rel="noopener noreferrer" aria-label="Find us on Justdial" className="social-icon justdial">
                  <FaStore aria-hidden="true" />
                </a>
                <a href="https://www.indiamart.com/company/161003270/" target="_blank" rel="noopener noreferrer" aria-label="Find us on IndiaMART" className="social-icon indiamart">
                  <FaBuilding aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
              <h2 className="contact-form-title">Send us a Message</h2>
              <div className="contact-info-line"></div>
              
              {isSubmitted && (
                <div className="success-message" role="alert">
                  <FaCheckCircle aria-hidden="true" />
                  <span>Thank you! Your message has been sent to Gopal Sanitary House, Mansa successfully. Our team will get back to you soon.</span>
                </div>
              )}
              
              {errorMessage && (
                <div className="error-message" role="alert">
                  <span>{errorMessage}</span>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input 
                    id="subject"
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    placeholder="e.g., Product Inquiry, Bulk Order, Installation Support"
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements - bathroom fittings, faucets, sanitaryware, or any other product from our collection..."
                    disabled={isSubmitting}
                    aria-required="true"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message to Gopal Sanitary House'}
                  {!isSubmitting && <FaArrowRight aria-hidden="true" />}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2 className="map-title">Visit Our Store Location in Mansa, Punjab</h2>
            <div className="section-line centered"></div>
            <div className="map-container">
              <iframe 
                title="Gopal Sanitary House - Store Location in Mansa, Punjab - Near Ganga Oil Mill, J.K. Road"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8176192644414!2d75.3968015!3d29.984671000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ed3027fa305%3A0x6762411a214a5ff9!2sGOPAL%20SANITARY%20HOUSE!5e0!3m2!1sen!2sin!4v1779599706025!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps location of Gopal Sanitary House near Ganga Oil Mill, J.K. Road, Mansa, Punjab"
              ></iframe>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions - Gopal Sanitary House, Mansa</h2>
            <div className="section-line centered"></div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do you offer home delivery in Mansa and nearby areas?</h3>
                <p>Yes, Gopal Sanitary House offers home delivery across Mansa city and surrounding areas in Punjab. For locations outside Mansa, shipping charges may apply based on distance and order value.</p>
              </div>
              <div className="faq-item">
                <h3>Are your bathroom products 100% genuine?</h3>
                <p>Absolutely! We are authorized retailers for all major brands including JAQUAR, VGUARD, KITEC, NOVA, EROS, and more. We provide 100% genuine products with manufacturer warranty.</p>
              </div>
              <div className="faq-item">
                <h3>Can I visit your sanitary store in Mansa?</h3>
                <p>Yes, our store is located at Near Ganga Oil Mill, J.K. Road, Mansa. We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 2:00 PM.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide installation services for bathroom fittings?</h3>
                <p>Yes, Gopal Sanitary House provides professional installation services for all our products including faucets, showers, wash basins, and bathtubs at an additional cost.</p>
              </div>
              <div className="faq-item">
                <h3>What brands of sanitary products do you sell?</h3>
                <p>We offer premium brands including VGUARD, JAQUAR, KITEC, NOVA, EROS, AROFIC, DEEPALI, SHEENZ, ZERO-B, GROHE, ASHIRVAD, FINOLEX, and many more.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer bulk orders for contractors and builders?</h3>
                <p>Yes, we welcome bulk orders from contractors, builders, and interior designers. Contact us at +91 90562 62171 for special pricing and bulk discounts.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactPage;