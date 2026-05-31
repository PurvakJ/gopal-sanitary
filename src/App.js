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

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gopal Sanitary House",
  "image": "https://yourdomain.com/logo.jpg",
  "description": "Trusted sanitary store in Mansa, Punjab offering premium bathroom fittings, faucets, showers from brands like Jaquar, VGUARD, KITEC. 28+ years of excellence.",
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
    "latitude": "29.984671",
    "longitude": "75.3968015"
  },
  "url": "https://yourdomain.com",
  "telephone": "+919056262171",
  "openingHours": "Mo-Sa 09:00-20:00, Su 10:00-14:00",
  "priceRange": "₹₹",
  "sameAs": [
    "https://www.instagram.com/gopal_sanitary_house/",
    "https://www.justdial.com/Mansa/Goyal-Sanitary-Palace/9999P1652-1652-190912000628-Q3B2_BZDET"
  ]
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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