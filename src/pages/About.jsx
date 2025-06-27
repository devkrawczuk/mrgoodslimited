import React from 'react';
import PageHero from '../sections/PageHero';
import LeftImageRigthSection from '../sections/LeftImageRigthSection';
import LongTextBlock from '../sections/LongTextBlock';
import { Helmet } from 'react-helmet-async';
import LeftTextBlock from '../sections/LeftTextBlock';
import LeftTextBlockWhite from '../sections/LeftTextBlockWhite';

function About() {
  return (
    <div className="mt-10 overflow-hidden">
      <Helmet>
        <title>About Us | MR GOODS Limited</title>
        <meta
          name="description"
          content="Learn more about MR GOODS Limited – trusted painting and renovation experts dedicated to exceptional craftsmanship and customer satisfaction."
        />
        <meta property="og:title" content="About Us | MR GOODS Limited" />
        <meta property="og:description" content="Discover the story behind MR GOODS Limited, a team committed to transforming spaces with precision and care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrgoodslimited.com/about" />
        <link rel="canonical" href="https://www.mrgoodslimited.com/about" />
      </Helmet>

      <PageHero
        title="About Us"
        backgroundImage="/images/about-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'About Us' }
        ]}
      />

      <LeftTextBlockWhite
        subtitle="Our Commitment"
        title="Excellence in Every Brushstroke"
        text="At MR GOODS Limited, we understand that your home or business deserves the very best. With decades of combined experience, our team delivers meticulous painting and renovation services that stand the test of time. We blend craftsmanship with the latest techniques to ensure every project reflects quality, durability, and your personal style."
      />

      <LeftImageRigthSection
        imageSrc="/images/team.webp"
        imageAlt="Our Team at Work"
        title="Meet the Team"
        text="Our dedicated professionals are passionate about bringing your vision to life. From initial consultation to final touches, we ensure transparent communication, punctuality, and respect for your space. We pride ourselves on building lasting relationships through trust, reliability, and outstanding results."
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      <LeftTextBlockWhite
        subtitle="Why Choose Us"
        title="Trusted by Homeowners and Businesses Alike"
        text="We combine attention to detail with a customer-first approach. Our team uses premium materials and adheres to industry best practices, guaranteeing a flawless finish every time. Whether it’s a small touch-up or a complete renovation, we approach each project with the same dedication and care."
      />

      <LongTextBlock
        title="Our Mission"
        text="Our mission is simple: to transform your spaces into beautiful, inviting environments that reflect your taste and enhance your lifestyle or brand image. Through innovation, skill, and exceptional service, we strive to exceed your expectations and deliver results you can be proud of."
        ctaText="Get In Touch"
        ctaLink="/contact"
        textColor="#ffffff"
      />

      <LeftTextBlockWhite
        subtitle="A Word from Our Founder"
        title="Passion Meets Precision"
        text="We believe that every project, no matter how big or small, deserves the utmost care and attention. Our founder started MR GOODS Limited with a vision to provide honest, high-quality renovation and painting services that truly make a difference. Today, that vision drives everything we do."
      />
    </div>
  );
}

export default About;
