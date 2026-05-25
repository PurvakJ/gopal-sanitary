// AboutPage.jsx
import React, { useEffect } from 'react';
import { FaTrophy, FaUsers, FaClock, FaAward, FaHandshake, FaShieldAlt, FaTruck, FaGem } from 'react-icons/fa';
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
    { id: 1, title: 'Quality First', description: 'We never compromise on product quality', icon: <FaGem /> },
    { id: 2, title: 'Customer Trust', description: 'Building lasting relationships with our customers', icon: <FaHandshake /> },
    { id: 3, title: 'Timely Delivery', description: 'Ensuring products reach you on time', icon: <FaTruck /> },
    { id: 4, title: 'Best Prices', description: 'Competitive pricing on all products', icon: <FaAward /> },
  ];

  const partnerBrands = [
    { id: 1, name: 'VGUARD', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/V-Guard_Industries.svg/1280px-V-Guard_Industries.svg.png' },
    { id: 2, name: 'JAQUAR', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jaquar_logo.svg/250px-Jaquar_logo.svg.png' },
    { id: 3, name: 'KITEC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryvzpG8NkfNXsqlusu3I92Ywo3VUXUC7vxQ&s' },
    { id: 4, name: 'ASHIRVAD', img: 'https://vectorseek.com/wp-content/uploads/2023/09/Ashirvad-Logo-Vector.svg-.png' },
    { id: 5, name: 'FINOLEX', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xH7BCgeIR9VEu74S9_gWT_vS3vmr4D0XmQ&s' },
    { id: 6, name: 'GROHE', img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Grohe-logo.png' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
{/* Hero Section with inline style backup */}
<section className="about-hero" style={{
  backgroundImage: 'url("https://i.postimg.cc/MH6dM3Jb/2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
}}>
  <div className="about-hero-overlay">
    <div className="container">
      <h1 className="about-hero-title">About Gopal Sanitary</h1>
      <p className="about-hero-subtitle">Excellence in Sanitary Solutions Since 1995</p>
      <div className="about-hero-line"></div>
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
                Established in 1995, Gopal Sanitary has been a trusted name in the sanitary industry, 
                providing high-quality products to thousands of satisfied customers across India. 
                With over 28 years of experience, we have built strong relationships with leading 
                manufacturers like Jaquar, Ashirvad, Finolex, VGUARD, and many more.
              </p>
              <p>
                Our mission is to provide premium sanitary solutions at competitive prices without 
                compromising on quality. We believe in transparency, integrity, and customer satisfaction 
                as the core principles of our business.
              </p>
              <p>
                As an authorized retail partner for all major brands, we guarantee genuine products 
                with manufacturer warranty. Our team of experts is always ready to guide you in 
                choosing the right products for your bathroom needs.
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
              </div>
            </div>
            <div className="story-image">
              <img src="https://i.postimg.cc/VvfDrZP0/1-(2).jpg" alt="Luxury Bathroom" />
              <div className="story-image-overlay">
                <span>Quality Since 1995</span>
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
      The principles that guide everything we do
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
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="section-line centered"></div>
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon">
                <FaGem />
              </div>
              <h3>Premium Quality</h3>
              <p>We source products from top brands ensuring the highest quality standards</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FaUsers />
              </div>
              <h3>Expert Guidance</h3>
              <p>Our experienced team helps you choose the perfect products for your needs</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FaHandshake />
              </div>
              <h3>Trusted Partners</h3>
              <p>Authorized retailer for all major sanitary brands with genuine warranty</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FaClock />
              </div>
              <h3>Timely Support</h3>
              <p>Dedicated customer support for all your queries and after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Our Trusted Partners</h2>
          <div className="section-line centered"></div>
          <p className="partners-subtitle">
            We collaborate with the world's leading brands to bring you exceptional quality
          </p>
          <div className="partners-grid-about">
            {partnerBrands.map((brand) => (
              <div key={brand.id} className="partner-card-about">
                <img src={brand.img} alt={brand.name} />
                <div className="partner-overlay">
                  <h4>{brand.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Bathroom?</h2>
            <p>Visit our store or contact us for expert guidance on choosing the perfect sanitary products</p>
            <Link to="/contact" className="cta-button">
  Contact Us Today →
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;