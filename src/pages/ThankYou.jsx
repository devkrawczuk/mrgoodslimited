import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | SEOPETERMAN</title>
        <meta name="description" content="Thank you for getting in touch. I’ll respond as soon as possible." />
      </Helmet>

      <div className="container py-5 text-center">
        <h1 className="text-success mb-4">Thank you!</h1>
        <p className="lead">Your message has been successfully sent. I will get back to you shortly.</p>
        <Link to="/" className="btn btn-outline-success mt-4">Back to Home</Link>
      </div>
    </>
  );
};

export default ThankYou;
