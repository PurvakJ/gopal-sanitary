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
      to_name: 'GOPAL SANITARY HOUSE',
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
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your products');

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Visit Our Store', details: ['GOPAL SANITARY HOUSE', 'Near Ganga Oil Mill, J.K. Road', 'Mansa - 151505'] },
    { icon: <FaPhone />, title: 'Call Us', details: ['+91 90562 62171', '+91 99888 83123'], links: ['tel:+919056262171', 'tel:+919988883123'] },
    { icon: <FaEnvelope />, title: 'Email Us', details: ['gopalsanitaryhousemansa@gmail.com'], links: ['mailto:gopalsanitaryhousemansa@gmail.com'] },
    { icon: <FaClock />, title: 'Business Hours', details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 2:00 PM'] },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Gopal Sanitary | Get in Touch for Premium Sanitary Solutions</title>
        <meta name="description" content="Contact Gopal Sanitary House in Mansa, Punjab. Call +91 90562 62171, email us, or visit our store for premium bathroom fittings and sanitary products." />
        <meta name="keywords" content="contact Gopal Sanitary, sanitary store phone number, Mansa sanitary shop, bathroom fittings contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="container">
              <h1 className="contact-hero-title">Contact Us</h1>
              <p className="contact-hero-subtitle">We'd love to hear from you. Get in touch with our team</p>
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
                Have questions about our products? Need assistance with your order? 
                Our team is here to help you. Reach out to us through any of the following channels.
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
                <a href="https://www.instagram.com/gopal_sanitary_house/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                  <FaInstagram aria-hidden="true" />
                </a>
                <a href="https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET" target="_blank" rel="noopener noreferrer" aria-label="Justdial" className="social-icon justdial">
                  <FaStore aria-hidden="true" />
                </a>
                <a href="https://www.indiamart.com/company/161003270/" target="_blank" rel="noopener noreferrer" aria-label="IndiaMART" className="social-icon indiamart">
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
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
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
                    placeholder="What is this regarding?"
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
                    placeholder="Tell us how we can help you..."
                    disabled={isSubmitting}
                    aria-required="true"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FaArrowRight aria-hidden="true" />}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2 className="map-title">Find Us Here</h2>
            <div className="section-line centered"></div>
            <div className="map-container">
              <iframe 
                title="GOPAL SANITARY HOUSE - Store Location in Mansa, Punjab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8176192644414!2d75.3968015!3d29.984671000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ed3027fa305%3A0x6762411a214a5ff9!2sGOPAL%20SANITARY%20HOUSE!5e0!3m2!1sen!2sin!4v1779599706025!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps location of Gopal Sanitary House"
              ></iframe>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-line centered"></div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do you offer home delivery?</h3>
                <p>Yes, we offer home delivery across India. Shipping charges may apply based on location and order value.</p>
              </div>
              <div className="faq-item">
                <h3>Are your products genuine?</h3>
                <p>Absolutely! We are authorized retailers for all major brands and provide 100% genuine products with manufacturer warranty.</p>
              </div>
              <div className="faq-item">
                <h3>Can I visit your store?</h3>
                <p>Yes, our store is open 6 days a week. Please check our business hours above before visiting.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide installation services?</h3>
                <p>Yes, we provide professional installation services for all our products at an additional cost.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactPage;