import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import pageData from '../data/servicesData.json';

// komponenty sekcji
import PageHero from '../sections/PageHero';
import RightImageLeftSection from '../sections/RightImageLeftSection';
import LeftImageRigthSection from '../sections/LeftImageRigthSection';
import LongTextBlock from '../sections/LongTextBlock';
import LeftTextBlock from '../sections/LeftTextBlock';
import LeftTextBlockWhite from '../sections/LeftTextBlockWhite';
import ImageLeftText from '../sections/ImageLeftText';
import ImageRightText from '../sections/ImageRightText';

const sectionComponents = {
  RightImageLeftSection,
  LeftImageRigthSection,
  LongTextBlock,
  ImageLeftText,
  ImageRightText,
  LeftTextBlockWhite
};

function ServicePage() {
  const { slug } = useParams();
  const page = pageData.find(p => p.slug === slug);

  if (!page) {
    return <div className="p-10 text-center">Page not found</div>;
  }

  return (
    <div className="mt-10">
      <Helmet>
        <title>{page.seo.title} | MR GOODS Limited</title>
        <meta name="description" content={page.seo.description} />
        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={page.seo.url} />
        <link rel="canonical" href={page.seo.url} />
      </Helmet>
      <PageHero
        title= {page.title}
        backgroundImage="/images/services-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Services', link: '/services' },
          { name: page.title}
        ]}
      />
      {page.blocks.map((block, index) => {
        const Component = sectionComponents[block.type];
        if (!Component) return null;
        return <Component key={index} {...block.props} />;
      })}
    </div>
  );
}

export default ServicePage;
