import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Hero({
  title = "Transforming Spaces with Color & Style",
  subtitle = "Professional painting and interior finishing services that bring your vision to life.",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
  personImage = "/images/modules/painter.png",
  imageAlt = "Painter",
}) {
  return (
    <>
      <Helmet>
        <title>Professional Interior Painting | Home</title>
        <meta name="description" content="High-quality painting and interior finishing for modern spaces." />
      </Helmet>

      <section className="hero-section text-black">

        <div className="container position-relative z-2">
          <div className="color-splash" />
          <div className="row align-items-center  position-relative z-2">
            <div className="col-lg-6 text-center text-lg-start">
              <motion.h1
                className="fw-bold display-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h1>
              <p className="lead mb-4">{subtitle}</p>
              <a href={buttonLink} className="btn btn-paint">
                {buttonText}
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center painter-line">
              <img
                src={personImage}
                alt={imageAlt}
                className="img-fluid"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
