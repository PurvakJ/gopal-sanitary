import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://i.postimg.cc/9MtLf5KB/1.jpg',
    'https://i.postimg.cc/MH6dM3Jb/2.jpg',
    'https://i.postimg.cc/BbSML7fN/3.jpg',
  ];

  const collageImages = [
    { id: 1, img: 'https://i.pinimg.com/736x/26/42/68/264268c4cf1613cce0d867a18bc243d2.jpg', title: 'Modern Faucet' },
    { id: 2, img: 'https://i.pinimg.com/736x/d4/81/86/d481869d440129b98db05aba69018056.jpg', title: 'Bathroom Luxury' },
    { id: 3, img: 'https://i.pinimg.com/1200x/06/f4/dc/06f4dcdcb340e3dda9482b830d04dbfb.jpg', title: 'Kitchen Style' },
    { id: 4, img: 'https://i.pinimg.com/1200x/ba/f6/f7/baf6f7cb630f9a8b9627ec955a7324c8.jpg', title: 'Elegant Design' },
    { id: 5, img: 'https://i.pinimg.com/736x/e6/eb/a3/e6eba30a1bce53acd7dfecfa0e53890f.jpg', title: 'Premium Finish' },
  ];

  // Product Categories dynamically from brand data
  const productCategories = [
    { id: 1, name: 'Wash Basin', icon: 'fas fa-sink', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWp-uU9HgK3W_d3ZFXpsHHy4ES43qoNUceFso1ygWi9h2A6AX48deOAHYvxDm8Tx2loVx_gPMqONvowXCtyr2nwkkiLerwgFXuRwgNjgo' },
    { id: 2, name: 'Sink Faucets', icon: 'fas fa-faucet', image: 'https://www.jaquar.com/images/thumbs/0055440_florentine-prime_400.webp' },
    { id: 3, name: 'Bathtub', icon: 'fas fa-hot-tub', image: 'https://m.media-amazon.com/images/I/61qU46NuJTL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, name: 'Showers', icon: 'fas fa-shower', image: 'https://m.media-amazon.com/images/I/71vLh2tWhWL._AC_UF1000,1000_QL80_.jpg' },
    { id: 5, name: 'Mirrors', icon: 'fas fa-eye', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pQGKWqdBgSwjwJeOeY626FRwDgyhk8SHLA&s' },
    { id: 6, name: 'Grab Rails', icon: 'fas fa-hand-holding-heart', image: 'https://static.wixstatic.com/media/45c388_b5268ef431394bc2bd2ce025eb5f863b~mv2.jpg/v1/fill/w_640,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/45c388_b5268ef431394bc2bd2ce025eb5f863b~mv2.jpg' },
  ];

  // Brand categories from the catalog (these will link to catalog page with specific brand)
  const brandCategoriesFromCatalog = [
    { id: 1, name: 'VGUARD', icon: 'fas fa-plug', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/V-Guard_Industries.svg/1280px-V-Guard_Industries.svg.png', brandKey: 'VGUARD' },
    { id: 2, name: 'JAQUAR', icon: 'fas fa-tint', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jaquar_logo.svg/250px-Jaquar_logo.svg.png', brandKey: 'JAQUAR' },
    { id: 3, name: 'GEBERIT', icon: 'fas fa-industry', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdicD30F2fVkcM1TP5ZnhIJwp9dZ3Vo6jUIw&s', brandKey: 'KITEC' },
    { id: 4, name: 'NOVA', icon: 'fas fa-water', image: 'https://media.licdn.com/dms/image/v2/C560BAQHzK_9Ycov6qw/company-logo_200_200/company-logo_200_200/0/1630575485997/nova_plastik_san_tic_a__logo?e=2147483647&v=beta&t=bX0tDdf3LFvKxD0iP2fAkYTk3DO3g8ny-8UM6Kw9qHw', brandKey: 'NOVA' },
    { id: 5, name: 'EROS', icon: 'fas fa-gem', image: 'https://i.pinimg.com/736x/e0/3e/57/e03e570adbacaec736c6d1d865bcc903.jpg', brandKey: 'EROS' },
    { id: 6, name: 'AROFIC', icon: 'fas fa-shower', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQexOvLwKCqfBqsABNAel2tdMKU6BI5lIASw&s', brandKey: 'AROFIC' },
    { id: 7, name: 'DEEPALI', icon: 'fas fa-sink', image: 'https://deepalisinks.com/wp-content/uploads/2021/10/Deepali-Sinks-Logo.png', brandKey: 'DEEPALI' },
    { id: 8, name: 'SHEENZ', icon: 'fas fa-faucet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwAs0qAez23-h9TjWTLY4cw5q978Z-zcQkQ&s', brandKey: 'SHEENZ' },
    { id: 9, name: 'ZERO-B', icon: 'fas fa-tint', image: 'https://www.zerobonline.com/wp-content/uploads/2023/08/ZB-Logo-social-share2.jpg', brandKey: 'ZERO-B' },
  ];

  const latestCollections = [
    { id: 1, img: 'https://i.postimg.cc/W3654LCM/2-(1).jpg', title: 'LUXURY BATHROOM SUITE', offer: 'SAVE UP TO 60% OFF', description: 'Transform your bathroom into a spa-like retreat with our premium collection.' },
    { id: 2, img: 'https://i.postimg.cc/FzrDdCXc/2-(2).jpg', title: 'MODERN FAUCET SERIES', offer: 'SAVE UP TO 60% OFF', description: 'Elegant design meets functionality with our latest faucet collection.' },
  ];

  const bestsellerProducts = [
    { id: 1, img: 'https://images.thdstatic.com/productImages/f9b58cbd-ba37-4c8d-acd4-9d1ff6f28152/svn/matte-black-bwe-vessel-sink-faucets-a-96081h-b-4-40_600.jpg', name: 'Premium Chrome Faucet', price: '$129.99', rating: 5 },
    { id: 2, img: 'https://m.media-amazon.com/images/I/61YRpvRfUuL._AC_UF1000,1000_QL80_.jpg', name: 'Modern Ceiling Shower', price: '$149.99', rating: 4 },
    { id: 3, img: 'https://studioonyx.in/wp-content/uploads/2025/08/38-8.webp', name: 'Matte Black Faucet', price: '$179.99', rating: 5 },
    { id: 4, img: 'https://preview.redd.it/what-do-you-think-about-blue-and-gold-bathrooms-v0-cgtf9l6ma5wd1.png?width=640&crop=smart&auto=webp&s=508866c13e2ac13900400bd18109c64ab85ba678', name: 'Gold Finish Luxury', price: '$199.99', rating: 4 },
  ];

  const blogPosts = [
    { 
      id: 1, 
      img: 'https://i.postimg.cc/RZn8H2xB/f77a255170d6ea2e4adcfc40d11a3084.jpg', 
      title: 'How to Choose the Perfect Bathroom Faucet for Your Mansa Home', 
      excerpt: 'Discover the key factors to consider when selecting a faucet for your bathroom, from finish types to water efficiency and installation requirements.',
      date: 'March 15, 2024',
      author: 'By Design Expert'
    },
    { 
      id: 2, 
      img: 'https://i.pinimg.com/1200x/a8/5e/5e/a85e5e565a18b3261bd5f7d0c97d8b52.jpg', 
      title: 'Top 5 Luxury Shower Systems Available at Gopal Sanitary House', 
      excerpt: 'Upgrade your daily routine with these premium shower systems featuring rainfall heads, body jets, and smart temperature controls, now available in Mansa.',
      date: 'March 10, 2024',
      author: 'By Luxury Editor'
    },
    { 
      id: 3, 
      img: 'https://i.pinimg.com/736x/7e/10/bb/7e10bb2fec07ebee23c0ae633965b246.jpg', 
      title: 'Maintenance Tips for Your Kitchen Sink Faucet (Expert Advice from Mansa)', 
      excerpt: 'Extend the life of your kitchen faucet with these simple maintenance practices, from cleaning aerators to preventing leaks.',
      date: 'March 5, 2024',
      author: 'By Home Care Expert'
    },
  ];

  const partnerBrands = [
    { id: 1, name: 'VGUARD', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/V-Guard_Industries.svg/1280px-V-Guard_Industries.svg.png' },
    { id: 2, name: 'JAQUAR', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jaquar_logo.svg/250px-Jaquar_logo.svg.png' },
    { id: 3, name: 'KITEC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryvzpG8NkfNXsqlusu3I92Ywo3VUXUC7vxQ&s' },
    { id: 4, name: 'ASHIRVAD', img: 'https://vectorseek.com/wp-content/uploads/2023/09/Ashirvad-Logo-Vector.svg-.png' },
    { id: 5, name: 'FINOLEX', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xH7BCgeIR9VEu74S9_gWT_vS3vmr4D0XmQ&s' },
    { id: 6, name: 'NOVA', img: 'https://media.licdn.com/dms/image/v2/C560BAQHzK_9Ycov6qw/company-logo_200_200/company-logo_200_200/0/1630575485997/nova_plastik_san_tic_a__logo?e=2147483647&v=beta&t=bX0tDdf3LFvKxD0iP2fAkYTk3DO3g8ny-8UM6Kw9qHw' },
    { id: 7, name: 'ASTRAL PIPES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6qInMFu9DyF72UbAr74cn32gxiFa6ehtGw&s' },
    { id: 8, name: 'PRINCE', img: 'https://companieslogo.com/img/orig/PRINCEPIPE.NS_BIG-ae24741c.png?t=1729502378' },
    { id: 9, name: 'ZERO B', img: 'https://www.zerobonline.com/wp-content/uploads/2023/05/ZB-Logo-social-share2.jpg' },
    { id: 10, name: 'SUPREME', img: 'https://companieslogo.com/img/orig/SUPREMEIND.NS_BIG.D-bac8b311.png?t=1744865028' },
    { id: 11, name: 'GROHE', img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Grohe-logo.png' },
    { id: 12, name: 'SUN STELLAR', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtlpxAXZCIJ7k7UdNvRXsDit2lcRk_pO6HQ&s' },
    { id: 13, name: 'EROS-B', img: 'https://i.pinimg.com/736x/e0/3e/57/e03e570adbacaec736c6d1d865bcc903.jpg' },
    { id: 14, name: 'AROFIC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQexOvLwKCqfBqsABNAel2tdMKU6BI5lIASw&s' },
    { id: 15, name: 'GEBERIT', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdicD30F2fVkcM1TP5ZnhIJwp9dZ3Vo6jUIw&s' },
    { id: 16, name: 'DEEPALI', img: 'https://deepalisinks.com/wp-content/uploads/2021/10/Deepali-Sinks-Logo.png' },
    { id: 17, name: 'SHEENZ', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwAs0qAez23-h9TjWTLY4cw5q978Z-zcQkQ&s' },
    { id: 18, name: 'KSB', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcRw4IQANpBYNiS2897yChcHMszeA754DdA&s' },
    { id: 19, name: 'ZERO-B', img: 'https://www.zerobonline.com/wp-content/uploads/2023/08/ZB-Logo-social-share2.jpg' },
  ];

  // Partners carousel state and functions - Circular Carousel
  const [partnersCurrentIndex, setPartnersCurrentIndex] = useState(0);
  const [partnersItemsPerView, setPartnersItemsPerView] = useState(8);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create extended array for circular effect
  const extendedPartnerBrands = [...partnerBrands, ...partnerBrands, ...partnerBrands];
  const middleIndex = partnerBrands.length;

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setPartnersItemsPerView(8);
      } else if (width >= 769) {
        setPartnersItemsPerView(4);
      } else if (width >= 481) {
        setPartnersItemsPerView(3);
      } else {
        setPartnersItemsPerView(2);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Initialize carousel position to the middle set
  useEffect(() => {
    setPartnersCurrentIndex(middleIndex);
  }, [middleIndex]);

  // Handle transition end for circular loop
  const handleTransitionEnd = () => {
    if (!isTransitioning) return;
    
    setIsTransitioning(false);
    
    // If we've gone past the last original item, jump to the first
    if (partnersCurrentIndex >= middleIndex + partnerBrands.length) {
      setPartnersCurrentIndex(middleIndex);
    }
    // If we've gone before the first original item, jump to the last
    else if (partnersCurrentIndex < middleIndex) {
      setPartnersCurrentIndex(middleIndex + partnerBrands.length - partnersItemsPerView);
    }
  };

  // Scroll partners carousel - Circular scrolling
  const scrollPartners = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    let newIndex = partnersCurrentIndex + direction;
    
    // Allow scrolling through the extended array
    const maxIndex = middleIndex + partnerBrands.length - partnersItemsPerView;
    const minIndex = middleIndex - partnersItemsPerView;
    
    if (newIndex > maxIndex) {
      newIndex = middleIndex;
    } else if (newIndex < minIndex) {
      newIndex = maxIndex - partnersItemsPerView + 1;
    }
    
    setPartnersCurrentIndex(newIndex);
  };

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollPartners(1);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnersCurrentIndex, isTransitioning]);

  // Auto-slide main carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <>
      <Helmet>
        <title>Gopal Sanitary House | Best Sanitary Store in Mansa, Punjab | Premium Bathroom Fittings</title>
        <meta name="description" content="Gopal Sanitary House in Mansa, Punjab - Your trusted sanitary store since 1995. Shop premium bathroom fittings, faucets, showers, and sanitaryware from top brands like Jaquar, VGUARD, KITEC. Best prices & quality guaranteed." />
        <meta name="keywords" content="Gopal Sanitary House Mansa, sanitary store in Mansa, bathroom fittings Mansa, faucets Mansa, sanitaryware Punjab, Jaquar dealer Mansa, VGUARD Punjab, KITEC Mansa, wash basins, showers, bathtubs, sanitary shop near me, bathroom accessories Mansa" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gopal Sanitary House, Mansa Punjab" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Mansa" />
        <meta name="geo.position" content="29.9885;75.3843" />
        <meta name="ICBM" content="29.9885, 75.3843" />
        <link rel="canonical" href="https://gopalsanitaryhouse.com" />
        <meta property="og:title" content="Gopal Sanitary House - Premium Sanitary Solutions in Mansa, Punjab" />
        <meta property="og:description" content="Your trusted partner for premium bathroom and sanitary products in Mansa since 1995. Shop from top brands at best prices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gopalsanitaryhouse.com" />
        <meta property="og:image" content="https://gopalsanitaryhouse.com/og-image.jpg" />
        <meta property="og:site_name" content="Gopal Sanitary House" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gopal Sanitary House - Best Sanitary Store in Mansa, Punjab" />
        <meta name="twitter:description" content="India's trusted sanitary store offering premium bathroom fittings, faucets, showers, and sanitaryware from top brands. 28+ years of excellence. Visit our store in Mansa, Punjab." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gopal Sanitary House",
              "image": "https://gopalsanitaryhouse.com/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Market, Near Bus Stand",
                "addressLocality": "Mansa",
                "addressRegion": "Punjab",
                "postalCode": "151505",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.9885,
                "longitude": 75.3843
              },
              "url": "https://gopalsanitaryhouse.com",
              "telephone": "+91-9876543210",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 10:00-20:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/gopalsanitaryhouse",
                "https://www.instagram.com/gopalsanitaryhouse"
              ],
              "brand": ["VGUARD", "JAQUAR", "KITEC", "NOVA", "EROS", "AROFIC", "DEEPALI", "SHEENZ", "ZERO-B"],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Bathroom Faucets",
                    "category": "Bathroom Fittings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Sanitaryware",
                    "category": "Bathroom Products"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Showers",
                    "category": "Bathroom Fittings"
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

      <div className="homepage">
        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
            <div className="carousel-slides">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img loading="lazy" src={img} alt={`Luxury bathroom showcase ${index + 1} - Gopal Sanitary House Mansa`} />
                  <div className="carousel-caption">
                    <h2 className="animate-text">LUXURY FAUCETS COLLECTION</h2>
                    <p className="animate-text-delay">Visit Our Store in Mansa Today</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">❯</button>
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  role="button"
                  aria-label={`Go to slide ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Meets Comfort Section */}
        <section className="luxury-section">
          <div className="container">
            <div className="luxury-content">
              <div className="luxury-images-stack">
                <div className="stack-image stack-image-1">
                  <img loading="lazy" src="https://i.postimg.cc/VvfDrZP0/1-(2).jpg" alt="Luxury Bathroom Design - Gopal Sanitary House Mansa" />
                </div>
                <div className="stack-image stack-image-2">
                  <img loading="lazy" src="https://i.postimg.cc/nrF0jSf0/4.jpg" alt="Modern Bathroom Interior by Gopal Sanitary House" />
                </div>
              </div>
              <div className="luxury-text">
                <h2>Where Luxury <span>Meets Comfort</span></h2>
                <p>
                  At Gopal Sanitary House in Mansa, luxury is at the heart of everything we do. From the finest materials to meticulous craftsmanship, 
                  our products are designed to exude elegance and sophistication. Visit our sanitary store in Mansa to experience premium quality.
                </p>
                <Link to="/catalog" className="btn-show-categories">
                  Show more categories <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Image Collage Section */}
        <section className="collage-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">OUR COLLECTION</h2>
              <p className="section-subtitle">Discover our premium range of luxury faucets at Gopal Sanitary House, Mansa</p>
            </div>
            <div className="collage-grid">
              {collageImages.map((image, index) => (
                <div key={image.id} className={`collage-item collage-item-${index + 1}`}>
                  <img loading="lazy" src={image.img} alt={`${image.title} - Available at Gopal Sanitary House Mansa`} />
                  <div className="collage-overlay">
                    <span>{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="categories-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">PRODUCT CATEGORIES</h2>
              <p className="section-subtitle">Explore our wide range of premium bathroom products available in Mansa</p>
            </div>
            <div className="categories-grid">
              {productCategories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-image-wrapper">
                    <img 
                      loading="lazy"
                      src={category.image} 
                      alt={`${category.name} - Gopal Sanitary House Mansa`}
                      className="category-image"
                    />
                    <div className="category-overlay">
                      <div className="category-icon">
                        <i className={category.icon}></i>
                      </div>
                      <h3 className="category-name">{category.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Categories Section */}
        <section className="brand-categories-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">OUR PREMIUM BRANDS</h2>
              <p className="section-subtitle">Explore catalogs from our trusted partner brands available at Gopal Sanitary House, Mansa</p>
            </div>
            <div className="brand-categories-grid">
              {brandCategoriesFromCatalog.map((brand) => (
                <Link 
                  key={brand.id} 
                  to="/catalog" 
                  state={{ selectedBrand: brand.brandKey }}
                  className="brand-category-card"
                  onClick={() => {
                    localStorage.setItem('selectedCatalogBrand', brand.brandKey);
                  }}
                >
                  <div className="brand-category-image-wrapper">
                    <img 
                      loading="lazy"
                      src={brand.image} 
                      alt={`${brand.name} - Authorized Dealer in Mansa, Punjab`}
                      className="brand-category-image"
                    />
                    <div className="brand-category-overlay">
                      <div className="brand-category-icon">
                        <i className={brand.icon}></i>
                      </div>
                      <h3 className="brand-category-name">{brand.name}</h3>
                      <p className="brand-category-link">View Catalog →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Collection Section */}
        <section className="latest-collection">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">LATEST COLLECTION</h2>
              <p className="section-subtitle">Explore our newest arrivals with exclusive offers at Gopal Sanitary House, Mansa</p>
            </div>
            <div className="latest-grid">
              {latestCollections.map((item) => (
                <div key={item.id} className="latest-card">
                  <div className="latest-image">
                    <img loading="lazy" src={item.img} alt={`${item.title} - New Arrival at Gopal Sanitary House Mansa`} />
                  </div>
                  <div className="latest-info">
                    <h3>{item.title}</h3>
                    <p className="latest-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bestseller Products Section */}
        <section className="bestseller-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">BEST SELLERS OF THE WEEK</h2>
              <p className="section-subtitle">Our most popular faucets loved by customers in Mansa and across Punjab</p>
            </div>
            <div className="products-grid">
              {bestsellerProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img loading="lazy" src={product.img} alt={`${product.name} - Bestseller at Gopal Sanitary House Mansa`} />
                    <div className="product-badge">Bestseller</div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">OUR BLOG</h2>
              <p className="section-subtitle">
                Expert insights, design inspiration, and tips for your perfect bathroom from Gopal Sanitary House, Mansa
              </p>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img loading="lazy" src={post.img} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Brands Section */}
        <section className="partners-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">PARTNERS WITH US</h2>
              <p className="section-subtitle">
                We collaborate with the world's leading brands to bring you exceptional quality at Gopal Sanitary House, Mansa
              </p>
            </div>
            
            <div className="partners-carousel-container">
              <button 
                className="partners-carousel-btn prev" 
                onClick={() => scrollPartners(-1)}
                aria-label="Previous partners"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              
              <div className="partners-carousel-wrapper">
                <div 
                  className="partners-carousel" 
                  style={{ 
                    transform: `translateX(-${partnersCurrentIndex * (100 / partnersItemsPerView)}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {extendedPartnerBrands.map((brand, idx) => (
                    <div key={`${brand.id}-${idx}`} className="partner-carousel-card">
                      <div className="partner-carousel-image">
                        <img loading="lazy" src={brand.img} alt={`${brand.name} - Available at Gopal Sanitary House Mansa`} />
                        <div className="partner-carousel-overlay">
                          <h4>{brand.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="partners-carousel-btn next" 
                onClick={() => scrollPartners(1)}
                aria-label="Next partners"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;