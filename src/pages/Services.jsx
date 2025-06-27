import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import ServicesGrid from '../sections/ServicesGrid';
import RightImageLeftSection from '../sections/RightImageLeftSection.jsx';

function Services() {
  return (
    <div className="mt-10">
    <Helmet>
      <title>Our Services | MR GOODS Limited</title>
      <meta
        name="description"
        content="Discover professional painting, decorating, plastering, and drylining services by MR GOODS Limited. Quality craftsmanship for residential and commercial projects in the UK."
      />
      <meta property="og:title" content="Our Services | MR GOODS Limited" />
      <meta property="og:description" content="Explore MR GOODS Limited's full range of interior and exterior services, including painting, decorating, and plastering tailored to your needs." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mrgoods.co.uk/services" />
      <link rel="canonical" href="https://www.mrgoods.co.uk/services" />
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
