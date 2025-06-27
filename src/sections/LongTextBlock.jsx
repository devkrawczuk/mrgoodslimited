import React from 'react';
import { Link } from 'react-router-dom';

function LongTextBlock({ title, text, ctaText, ctaLink, backgroundColor, textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const wrapperClass = !backgroundColor ? 'bg-orange' : '';
  const textStyle = textColor ? { color: textColor } : {};

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            {title && <h2 className="mb-4" style={textStyle}>{title}</h2>}
            {text && <p style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />}
            {ctaText && ctaLink && (
              <Link 
                to={ctaLink} 
                className={`btn ${backgroundColor ? 'btn-paint' : 'btn-custom'} mt-4`}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LongTextBlock;
