import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Get base URL from environment or use default
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://gopalsanitaryhouse.com';
const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER || '+919056262171';

const EMAIL_ADDRESS = process.env.REACT_APP_EMAIL_ADDRESS || 'gopalsanitaryhousemansa@gmail.com';
const LATITUDE = process.env.REACT_APP_LATITUDE || '29.984671';
const LONGITUDE = process.env.REACT_APP_LONGITUDE || '75.3968015';

// Structured Data for Local Business - Gopal Sanitary House, Mansa
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gopal Sanitary House",
  "alternateName": "Gopal Sanitary House Mansa",
  "image": `${BASE_URL}/logo.jpg`,
  "logo": `${BASE_URL}/logo.jpg`,
  "description": "Trusted sanitary store in Mansa, Punjab offering premium bathroom fittings, faucets, showers, sanitaryware from brands like Jaquar, VGUARD, KITEC, GROHE, and 50+ brands. 28+ years of excellence with 15,000+ happy customers.",
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
    "latitude": LATITUDE,
    "longitude": LONGITUDE
  },
  "url": BASE_URL,
  "telephone": PHONE_NUMBER,
  "email": EMAIL_ADDRESS,
  "openingHours": ["Mo-Sa 09:00-20:00", "Su 10:00-14:00"],
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
  "priceRange": "₹₹",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
  "currenciesAccepted": "INR",
  "sameAs": [
    "https://www.instagram.com/gopal_sanitary_house/",
    "https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET",
    "https://www.indiamart.com/company/161003270/"
  ],
  "hasMap": `https://maps.google.com/?cid=6900560590523722233`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sanitary Products Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Bathroom Faucets",
          "category": "Bathroom Fittings",
          "brand": ["JAQUAR", "VGUARD", "KITEC", "GROHE"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sanitaryware",
          "category": "Bathroom Products",
          "brand": ["NOVA", "EROS", "AROFIC", "DEEPALI"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Showers & Bathroom Accessories",
          "category": "Bathroom Fittings",
          "brand": ["SHEENZ", "ZERO-B", "JAQUAR", "GROHE"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Wash Basins & Countertops",
          "category": "Sanitaryware",
          "brand": ["NOVA", "EROS", "AROFIC"]
        }
      }
    ]
  },
  "areaServed": {
    "@type": "City",
    "name": "Mansa",
    "containedInPlace": {
      "@type": "State",
      "name": "Punjab",
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    }
  },
  "founder": {
    "@type": "Person",
    "name": "Gopal"
  },
  "foundingDate": "1995",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": PHONE_NUMBER,
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Punjabi"],
    "areaServed": "IN"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": LATITUDE,
      "longitude": LONGITUDE
    },
    "geoRadius": "50000"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Premium Bathroom Fittings",
        "description": "Complete range of bathroom faucets, showers, and accessories"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "price": "Contact for Price"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Sanitaryware",
        "description": "Wash basins, water closets, and sanitary accessories"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "price": "Contact for Price"
      }
    }
  ],
  "potentialAction": {
    "@type": "CommunicateAction",
    "name": "Contact Us",
    "description": "Get in touch with Gopal Sanitary House for product inquiries and support",
    "instrument": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": PHONE_NUMBER,
        "email": EMAIL_ADDRESS
      }
    ]
  }
};

// Organization Structured Data
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gopal Sanitary House",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.jpg`,
  "description": "Premium sanitary store in Mansa, Punjab offering bathroom fittings, faucets, showers, and sanitaryware since 1995.",
  "email": EMAIL_ADDRESS,
  "telephone": PHONE_NUMBER,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Ganga Oil Mill, J.K. Road",
    "addressLocality": "Mansa",
    "addressRegion": "Punjab",
    "postalCode": "151505",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/gopal_sanitary_house/",
    "https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": PHONE_NUMBER,
    "contactType": "customer service",
    "email": EMAIL_ADDRESS
  }
};

// Website Structured Data
const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Gopal Sanitary House",
  "url": BASE_URL,
  "description": "Official website of Gopal Sanitary House - Mansa's most trusted sanitary store for premium bathroom fittings and sanitaryware.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/catalog?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

function App() {
  // Track page views for analytics (optional)
  useEffect(() => {
    // You can add Google Analytics or other analytics initialization here
    console.log('Gopal Sanitary House App initialized');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {/* Inject Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteData)}
        </script>
        
        {/* Add meta tags for Windows Phone */}
        <meta name="msapplication-TileColor" content="#1a3a5f" />
        <meta name="theme-color" content="#1a3a5f" />
        
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;