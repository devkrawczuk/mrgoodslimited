import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import ServicesGrid from '../sections/ServicesGrid';
import RightImageLeftSection from '../sections/RightImageLeftSection.jsx';

function Services() {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Our SEO Services | SEOPETERMAN</title>
        <meta
          name="description"
          content="Explore SEO services offered by SEOPeterman: from audits to on-page and off-page optimization. Tailored strategies for growth."
        />
        <meta property="og:title" content="Our SEO Services | SEOPeterman" />
        <meta property="og:description" content="Explore how SEOPeterman helps businesses grow with modern, tailored SEO solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seopeterman.com/services" />
        <link rel="canonical" href="https://www.seopeterman.com/services" />
      </Helmet>

      <PageHero
        title="Our Services"
        backgroundImage="/images/services-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Services' },
        ]}
      />
      <RightImageLeftSection
        imageSrc="/images/modules/block.jpg"
        imageAlt="Expert Painting"
        text="At InteriorFinisher, we specialise in high-quality painting and decorative finishes for residential and commercial properties across the UK. Our experienced team of painters delivers flawless results—whether it's refreshing a single room or transforming your entire space. From precise wall coatings to detailed trim work, we bring craftsmanship, colour, and care to every project."
        title="Expert Painting"
        ctaText="Learn More"
        ctaLink="/services"
        backgroundColor="#fff"
        textColor="#000000"
      />
      <ServicesGrid />
    </div>
  );
}

export default Services;
