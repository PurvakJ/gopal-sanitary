import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrophy, FaUsers, FaClock, FaAward, FaHandshake, FaShieldAlt, FaTruck, FaGem, FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsData = [
    { id: 1, number: '28+', label: 'Years of Excellence', icon: <FaTrophy /> },
    { id: 2, number: '15,000+', label: 'Happy Customers', icon: <FaUsers /> },
    { id: 3, number: '50+', label: 'Trusted Brands', icon: <FaAward /> },
    { id: 4, number: '100%', label: 'Genuine Products', icon: <FaShieldAlt /> },
  ];

  const valuesData = [
    { id: 1, title: 'Quality First', description: 'We never compromise on product quality at Gopal Sanitary House', icon: <FaGem /> },
    { id: 2, title: 'Customer Trust', description: 'Building lasting relationships with our customers in Mansa & across Punjab', icon: <FaHandshake /> },
    { id: 3, title: 'Timely Delivery', description: 'Ensuring products reach you on time across India', icon: <FaTruck /> },
    { id: 4, title: 'Best Prices', description: 'Competitive pricing on all premium bathroom products', icon: <FaAward /> },
  ];

  const partnerBrands = [
    { id: 1, name: 'VGUARD', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/V-Guard_Industries.svg/1280px-V-Guard_Industries.svg.png' },
    { id: 2, name: 'JAQUAR', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jaquar_logo.svg/250px-Jaquar_logo.svg.png' },
    { id: 3, name: 'KITEC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryvzpG8NkfNXsqlusu3I92Ywo3VUXUC7vxQ&s' },
    { id: 4, name: 'ASHIRVAD', img: 'https://vectorseek.com/wp-content/uploads/2023/09/Ashirvad-Logo-Vector.svg-.png' },
    { id: 5, name: 'FINOLEX', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xH7BCgeIR9VEu74S9_gWT_vS3vmr4D0XmQ&s' },
    { id: 6, name: 'GROHE', img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Grohe-logo.png' },
    { id: 7, name: 'NOVA', img: 'https://media.licdn.com/dms/image/v2/C560BAQHzK_9Ycov6qw/company-logo_200_200/company-logo_200_200/0/1630575485997/nova_plastik_san_tic_a__logo?e=2147483647&v=beta&t=bX0tDdf3LFvKxD0iP2fAkYTk3DO3g8ny-8UM6Kw9qHw' },
    { id: 8, name: 'EROS', img: 'https://i.pinimg.com/736x/e0/3e/57/e03e570adbacaec736c6d1d865bcc903.jpg' },
  ];

  return (
    <>
      <Helmet>
        <title>About Gopal Sanitary House Mansa | 28+ Years of Excellence in Sanitary Solutions | Punjab's Trusted Sanitary Store</title>
        <meta name="description" content="Learn about Gopal Sanitary House in Mansa, Punjab - your trusted partner for premium sanitary products since 1995. Authorized retailer for JAQUAR, VGUARD, KITEC, GROHE and 50+ brands. 28+ years of experience, 15,000+ happy customers. Visit our store at Near Ganga Oil Mill, J.K. Road, Mansa." />
        <meta name="keywords" content="Gopal Sanitary House Mansa, about Gopal Sanitary, sanitary store history Mansa, trusted sanitary brand Punjab, bathroom fittings dealer Mansa, sanitary shop near me, authorized dealer JAQUAR Mansa, VGUARD dealer Punjab, best sanitary store in Mansa" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gopal Sanitary House, Mansa Punjab" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Mansa" />
        <meta name="geo.position" content="29.984671;75.3968015" />
        <meta name="ICBM" content="29.984671, 75.3968015" />
        <link rel="canonical" href="https://gopalsanitaryhouse.com/about" />
        <meta property="og:title" content="About Gopal Sanitary House Mansa | 28+ Years of Excellence in Sanitary Solutions" />
        <meta property="og:description" content="Gopal Sanitary House - Mansa's most trusted sanitary store since 1995. Authorized dealer for JAQUAR, VGUARD, KITEC, and 50+ premium brands. 28+ years of experience, 15,000+ happy customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalsanitaryhouse.com/about" />
        <meta property="og:image" content="https://gopalsanitaryhouse.com/about-og-image.jpg" />
        <meta property="og:site_name" content="Gopal Sanitary House" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Gopal Sanitary House Mansa | Punjab's Trusted Sanitary Store Since 1995" />
        <meta name="twitter:description" content="28+ years of excellence in sanitary solutions. Authorized retailer for 50+ premium brands. Visit our store in Mansa, Punjab." />
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
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/gopal_sanitary_house/",
                "https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET",
                "https://www.indiamart.com/company/161003270/"
              ],
              "foundingDate": "1995",
              "brand": ["VGUARD", "JAQUAR", "KITEC", "NOVA", "EROS", "AROFIC", "DEEPALI", "SHEENZ", "ZERO-B", "GROHE", "ASHIRVAD", "FINOLEX"],
              "description": "Gopal Sanitary House is the leading sanitary store in Mansa, Punjab, offering premium bathroom fittings, faucets, showers, and sanitaryware from top brands like Jaquar, VGUARD, and KITEC since 1995.",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "10"
              },
              "areaServed": {
                "@type": "City",
                "name": "Mansa"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero" style={{
          backgroundImage: 'url("https://i.postimg.cc/MH6dM3Jb/2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="about-hero-overlay">
            <div className="container">
              <h1 className="about-hero-title">About Gopal Sanitary House, Mansa</h1>
              <p className="about-hero-subtitle">Excellence in Sanitary Solutions Since 1995 | Mansa, Punjab</p>
              <div className="about-hero-line"></div>
              <p className="about-hero-location">
                <FaMapMarkerAlt /> Near Ganga Oil Mill, J.K. Road, Mansa - 151505, Punjab, India
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <div className="section-line"></div>
                <p>
                  Established in 1995, <strong>Gopal Sanitary House</strong> has been a trusted name in Mansa, Punjab for premium 
                  sanitary solutions. With over 28 years of experience, we have built strong relationships with leading 
                  manufacturers like <strong>JAQUAR, VGUARD, KITEC, ASHIRVAD, FINOLEX, GROHE</strong>, and many more.
                </p>
                <p>
                  What started as a small sanitary store in the heart of Mansa has now grown into one of Punjab's most 
                  trusted destinations for premium bathroom fittings and sanitaryware. Our journey has been driven by 
                  one simple philosophy - providing high-quality products at competitive prices without compromising 
                  on authenticity.
                </p>
                <p>
                  As an <strong>authorized retail partner</strong> for all major brands, we guarantee 100% genuine products 
                  with complete manufacturer warranty. Our team of sanitary experts is always ready to guide you 
                  in choosing the perfect products for your home or project.
                </p>
                <p>
                  Today, Gopal Sanitary House proudly serves <strong>15,000+ happy customers</strong> across Mansa, Punjab, 
                  and throughout India with our pan-India delivery service.
                </p>
                <div className="story-highlights">
                  <div className="highlight">
                    <FaTrophy className="highlight-icon" />
                    <span>28+ Years of Excellence</span>
                  </div>
                  <div className="highlight">
                    <FaShieldAlt className="highlight-icon" />
                    <span>100% Genuine Products</span>
                  </div>
                  <div className="highlight">
                    <FaTruck className="highlight-icon" />
                    <span>Pan India Delivery</span>
                  </div>
                  <div className="highlight">
                    <FaStar className="highlight-icon" />
                    <span>15,000+ Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="story-image">
                <img loading="lazy" src="https://i.postimg.cc/VvfDrZP0/1-(2).jpg" alt="Luxury Bathroom Collection at Gopal Sanitary House, Mansa" />
                <div className="story-image-overlay">
                  <span>Quality Since 1995 | Mansa, Punjab</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {statsData.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="values-section">
          <div className="values-bg-overlay"></div>
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="section-line centered"></div>
            <p className="values-subtitle">
              The principles that guide everything we do at Gopal Sanitary House, Mansa
            </p>
            <div className="values-grid">
              {valuesData.map((value) => (
                <div key={value.id} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2 className="section-title">Why Choose Gopal Sanitary House?</h2>
            <div className="section-line centered"></div>
            <p className="why-subtitle">Mansa's most trusted sanitary store for premium bathroom solutions</p>
            <div className="why-choose-grid">
              <div className="why-card">
                <div className="why-icon">
                  <FaGem />
                </div>
                <h3>Premium Quality</h3>
                <p>We source products from top brands ensuring the highest quality standards for your bathroom</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <FaUsers />
                </div>
                <h3>Expert Guidance</h3>
                <p>Our experienced team helps you choose the perfect products for your specific needs and budget</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <FaHandshake />
                </div>
                <h3>Authorized Dealer</h3>
                <p>Official retailer for JAQUAR, VGUARD, KITEC, and 50+ premium brands with genuine warranty</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <FaClock />
                </div>
                <h3>Timely Support</h3>
                <p>Dedicated customer support for all your queries and professional after-sales service</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Visit Our Store</h3>
                <p>See products in person at our showroom in Mansa - Near Ganga Oil Mill, J.K. Road</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <FaPhoneAlt />
                </div>
                <h3>Quick Support</h3>
                <p>Call us at +91 90562 62171 for instant assistance and product inquiries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <h2 className="section-title">Our Trusted Brand Partners</h2>
            <div className="section-line centered"></div>
            <p className="partners-subtitle">
              We collaborate with the world's leading brands to bring you exceptional quality at Gopal Sanitary House, Mansa
            </p>
            <div className="partners-grid-about">
              {partnerBrands.map((brand) => (
                <div key={brand.id} className="partner-card-about">
                  <img loading="lazy" src={brand.img} alt={`${brand.name} - Authorized dealer at Gopal Sanitary House, Mansa, Punjab`} />
                  <div className="partner-overlay">
                    <h4>{brand.name}</h4>
                    <p>Available in Mansa</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-more-brands">
              <p>... and 40+ more premium brands available at our store</p>
            </div>
          </div>
        </section>

        {/* Store Location Section */}
        <section className="store-location-section">
          <div className="container">
            <h2 className="section-title">Visit Our Store in Mansa</h2>
            <div className="section-line centered"></div>
            <div className="location-content">
              <div className="location-info">
                <div className="location-address">
                  <FaMapMarkerAlt className="location-icon" />
                  <div>
                    <h3>GOPAL SANITARY HOUSE</h3>
                    <p>Near Ganga Oil Mill, J.K. Road,</p>
                    <p>Mansa - 151505, Punjab, India</p>
                  </div>
                </div>
                <div className="location-hours">
                  <FaClock className="location-icon" />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM (For urgent inquiries)</p>
                  </div>
                </div>
                <div className="location-contact">
                  <FaPhoneAlt className="location-icon" />
                  <div>
                    <h3>Contact Us</h3>
                    <p><a href="tel:+919056262171">+91 90562 62171</a> | <a href="tel:+919988883123">+91 99888 83123</a></p>
                    <p><a href="mailto:gopalsanitaryhousemansa@gmail.com">gopalsanitaryhousemansa@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="location-map">
                <iframe 
                  title="Gopal Sanitary House Store Location - Near Ganga Oil Mill, J.K. Road, Mansa, Punjab"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8176192644414!2d75.3968015!3d29.984671000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ed3027fa305%3A0x6762411a214a5ff9!2sGOPAL%20SANITARY%20HOUSE!5e0!3m2!1sen!2sin!4v1779599706025!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Bathroom?</h2>
              <p>Visit Gopal Sanitary House in Mansa or contact us for expert guidance on choosing the perfect sanitary products for your home</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button">
                  Contact Us Today →
                </Link>
                <a href="https://wa.me/919056262171" target="_blank" rel="noopener noreferrer" className="cta-button-whatsapp">
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;