// ContactPage.jsx
import React, { useState, useEffect, useRef } from 'react';
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

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_a0kojyd';
  const EMAILJS_TEMPLATE_ID = 'template_6k0zlcy';
  const EMAILJS_PUBLIC_KEY = '8IfMH-tJ6Z8Kp9kE5';

  // Initialize EmailJS on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Create template parameters - MATCH THESE EXACTLY to your EmailJS template
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
      
      // Parse the error for better message
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
        userMessage += 'Please try again or contact us directly.';
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
            >
              <FaWhatsapp />
              <span>Chat with us on WhatsApp</span>
              <FaArrowRight className="whatsapp-arrow" />
            </a>

            <div className="social-icons">
              <a href="https://www.instagram.com/gopal_sanitary_house/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET" target="_blank" rel="noopener noreferrer" aria-label="Justdial" className="social-icon justdial">
                <FaStore />
              </a>
              <a href="https://www.indiamart.com/company/161003270/" target="_blank" rel="noopener noreferrer" aria-label="IndiaMART" className="social-icon indiamart">
                <FaBuilding />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2 className="contact-form-title">Send us a Message</h2>
            <div className="contact-info-line"></div>
            
            {isSubmitted && (
              <div className="success-message">
                <FaCheckCircle />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}
            
            {errorMessage && (
              <div className="error-message">
                <span>{errorMessage}</span>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Subject *</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Message *</label>
                <textarea 
                  name="message" 
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaArrowRight />}
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
              title="GOPAL SANITARY HOUSE - Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8176192644414!2d75.3968015!3d29.984671000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ed3027fa305%3A0x6762411a214a5ff9!2sGOPAL%20SANITARY%20HOUSE!5e0!3m2!1sen!2sin!4v1779599706025!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
  );
}

export default ContactPage;