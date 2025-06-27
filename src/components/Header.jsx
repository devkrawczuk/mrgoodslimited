import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import servicesData from '../data/servicesData.json';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleNavbar = () => setExpanded(prev => !prev);
  const closeNavbar = () => {
    setExpanded(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = () => {
    setServicesOpen(prev => !prev);
  };

  const servicesLinks = servicesData.map(page => ({
    title: page.title,
    slug: page.slug
  }));

  return (
    <nav
      className={`navbar bg-white fixed-top navbar-expand-lg ${
        scrolled ? 'navbar-scrolled' : ''
      } navbar-dark`}
    >
      <div className="container">
        <NavLink className="navbar-brand fs-3 fw-bold" to="/" onClick={closeNavbar}>
          <img
            src="/images/1-cropped.svg"
            alt="MR GOODS LOGO"
            className="img-fluid"
            style={{ maxHeight: '55px', objectFit: 'contain', width: '117px', height: 'fit-content' }}
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-dark fw-semibold ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-link text-dark fw-semibold ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `nav-link text-dark fw-semibold ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                News
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className={`nav-item dropdown ${servicesOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle text-dark fw-semibold btn btn-link"
                onClick={handleServicesClick}
                aria-expanded={servicesOpen}
              >
                Services
              </button>
              <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                {servicesLinks.map(service => (
                  <li key={service.slug}>
                    <NavLink
                      className="dropdown-item"
                      to={`/services/${service.slug}`}
                      onClick={closeNavbar}
                    >
                      {service.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-dark fw-semibold ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
