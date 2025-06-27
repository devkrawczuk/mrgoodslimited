import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';

function CookiesPolicy() {
  return (
    <>
      <Helmet>
        <title>Cookies Policy | SEO by Gosia</title>
        <meta
          name="description"
          content="Cookies Policy for SEO by Gosia explaining how we use cookies and your options for managing them."
        />
      </Helmet>

      <PageHero
        title="Cookies Policy"
        backgroundImage="/images/cookies-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Cookies Policy' },
        ]}
      />

      <div className="container mt-5">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device to help the website function properly and improve your user experience.
        </p>

        <h2>How We Use Cookies</h2>
        <ul>
          <li><strong>Necessary Cookies:</strong> Essential for basic site functions like navigation and security.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website and improve performance.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and track ad campaign effectiveness.</li>
        </ul>

        <h2>Your Cookie Choices</h2>
        <p>
          You can control and manage cookies through your browser settings. You can also accept or decline cookies via the cookie consent banner on our website.
        </p>

        <h2>More Information</h2>
        <p>
          For more details about cookies and how to manage them, visit{' '}
          <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at{' '}
          <a href="mailto:seo.peterman@gmail.com">seo.peterman@gmail.com</a>.
        </p>

        <p>Last updated: June 2025</p>
      </div>
    </>
  );
}

export default CookiesPolicy;
