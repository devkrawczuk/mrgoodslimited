import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 - Page Not Found | MR GOODS Limited</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="container text-center mt-5 py-5">
      <h1 className="display-1">404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-paint mt-3">
        Go back to Home
      </Link>
    </div>
  </>
);

export default NotFound;