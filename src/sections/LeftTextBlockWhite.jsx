import React from 'react';

function LeftTextBlock({ subtitle, title, text }) {
  return (
    <section className="position-relative bg-white text-dark py-5 px-4 px-lg-5 overflow-hidden">
      <div className="container">
        <div className="text-start">
          {subtitle && <div className="text-uppercase fw-semibold opacity-75 mb-2" style={{ fontSize: '0.9rem' }}>{subtitle}</div>}
          {title && <h2 className="fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h2>}
          {text && <p className="fs-5 fs-md-5" dangerouslySetInnerHTML={{ __html: text }} />}
        </div>
      </div>
    </section>
  );
}

export default LeftTextBlock;
