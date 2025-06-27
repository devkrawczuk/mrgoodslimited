import React from 'react';
import Hero from '../sections/Hero';
import { Helmet } from 'react-helmet-async'; 
import ServicesGrid from '../sections/ServicesGrid.jsx';
import BoxedTextBlock from '../sections/BoxedTextBlock.jsx';
import ImageLeftText from '../sections/ImageLeftText.jsx';
import ImageRightText from '../sections/ImageRightText.jsx';
import LeftImageRightSection from '../sections/LeftImageRigthSection.jsx';
import RightImageLeftSection from '../sections/RightImageLeftSection.jsx';
import LeftTextBlock from '../sections/LeftTextBlock.jsx';
import LongTextBlock from '../sections/LongTextBlock.jsx';

function Home() {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Home | MR GOODS Limited</title>
        <meta name="description" content="Professional painting and renovation services tailored to your needs." />
        <meta property="og:title" content="Home | MR GOODS Limited" />
        <meta property="og:description" content="Professional painting and renovation services tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrgoodslimited.com/" />
        <link rel="canonical" href="https://www.mrgoodslimited.com/" />
      </Helmet>

      {/* Hero Section with updated text and CTA button to contact */}
      <Hero
        title="Quality Painting & Renovation Services"
        subtitle="Transform your space with expert care and precision"
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* Services Grid limited to 3 */}
      <ServicesGrid visibleServices={3} />

      {/* About Us teaser */}
      <BoxedTextBlock
        subtitle="About Us"
        title="Trusted Experts in Painting & Renovation"
        text="At MR GOODS Limited, we pride ourselves on delivering top-notch painting and renovation services across residential and commercial properties. Our team is committed to quality, timeliness, and exceptional customer care."
      />

      {/* Main service pages teasers with images */}
      <LeftImageRightSection
        imageSrc="/images/services/painting-services.jpg"
        imageAlt="Painting Services"
        title="Painting Services"
        text="Explore our comprehensive painting solutions, from walls and ceilings to decorative finishes that elevate your interiors."
        ctaText="View Painting Services"
        ctaLink="/services/painting-services"
      />

      <RightImageLeftSection
        imageSrc="/images/services/plastering-services.jpg"
        imageAlt="Plastering Services"
        title="Plastering Services"
        text="Discover expert plastering, skimming, and drywall services that prepare your walls for a flawless finish."
        ctaText="View Plastering Services"
        ctaLink="/services/plastering-services"
        backgroundColor='#ffffff'
        textColor='#000000'

      />

      {/* Additional info sections */}
      <BoxedTextBlock
        subtitle="Why Choose Us"
        title="Commitment to Excellence"
        text="Our team uses only premium materials and modern techniques to ensure durable, beautiful results that last."
        reverse
      />

      <LeftImageRightSection
        imageSrc="/images/services/decorating-services.jpg"
        imageAlt="Decorating Services"
        title="Decorating Services"
        text="From wallpapering to fine finishes, our decorating services bring style and sophistication to every interior. We pay attention to every detail, transforming your vision into reality."
        ctaText="View Decorating Services"
        ctaLink="/services/decorating-services"
        backgroundColor='#ffffff'
        textColor='#000000'
      />

      <RightImageLeftSection
        imageSrc="/images/services/drylining-services.jpg"
        imageAlt="Drylining Services"
        title="Drylining Services"
        text="Achieve smooth, clean walls quickly and efficiently with our drylining solutions. Ideal for modern interiors, office spaces, and residential builds where precision and speed matter."
        ctaText="View Drylining Services"
        ctaLink="/services/drylining-services"
      />

      <BoxedTextBlock
        subtitle="What Makes Us Different"
        title="Tailored Renovation Solutions"
        text="We don’t believe in one-size-fits-all. Every project is unique — and we treat it that way. Whether it’s a small touch-up or a full interior transformation, we adapt our approach to meet your needs."
      />

      {/* Smaller text block */}
      <LeftTextBlock
        subtitle="Quick Note"
        title="Professionalism & Care"
        text="We value your trust and work tirelessly to exceed your expectations with every project."
      />
    </div>
  );
}

export default Home;
