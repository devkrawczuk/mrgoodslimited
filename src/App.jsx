import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import ThankYou from './pages/ThankYou';
import About from './pages/About.jsx';
import NewsList from './pages/NewsList.jsx';
import NewsSingle from './pages/NewsSingle.jsx';
import Services from './pages/Services.jsx';
import ServicePage from './pages/ServicePage.jsx';
import NotFound from './pages/NotFound.jsx';
import ScrollToTop from './components/ScrollToTop';
import ScrollToHashElement from './components/ScrollToHashElement';
import CookieBanner from './components/CookieBanner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div>
      <Header />
      <main>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsSingle />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
