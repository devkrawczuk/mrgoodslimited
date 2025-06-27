// src/components/ScrollToHashElement.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // wysokość nagłówka lub dodatkowego marginesu
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 200); // Dopasuj w razie potrzeby
    }
  }, [location]);

  return null;
}

export default ScrollToHashElement;
