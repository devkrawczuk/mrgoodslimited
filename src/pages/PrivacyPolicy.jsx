import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SEOPETERMAN</title>
        <meta
          name="description"
          content="Privacy Policy for SEO by Gosia, explaining how we collect, use, and protect your personal data."
        />
      </Helmet>

      <PageHero
        title="Privacy Policy"
        backgroundImage="/images/privacy-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Privacy Policy' },
        ]}
      />

      <div className="container mt-5">
        <h2>Introduction</h2>
        <p>
          SEO by Gosia ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Data We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us such as your name, email address, phone number,
          and any other information you choose to provide through contact forms or email.
        </p>

        <h2>How We Use Your Data</h2>
        <ul>
          <li>To respond to your inquiries and provide requested services.</li>
          <li>To send you updates, newsletters, and marketing communications (only if you opt-in).</li>
          <li>To improve our website and services.</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience. Please see our
          <a href="/cookies-policy"> Cookies Policy</a> for detailed information.
        </p>

        <h2>Your Rights</h2>
        <p>
          Under UK GDPR, you have rights regarding your personal data, including the right to access, correct, delete,
          or restrict its use. You can also object to processing or withdraw consent at any time.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure,
          or destruction.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your personal data, please contact us at{' '}
          <a href="mailto:seo.peterman@gmail.com">seo.peterman@gmail.com</a>.
        </p>

        <p>Last updated: June 2025</p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
