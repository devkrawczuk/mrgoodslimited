import React from 'react';
import { Link } from 'react-router-dom';

function PageHero({ title, backgroundImage, breadcrumbs = [] }) {
  return (
    <section
      className="d-flex align-items-center page-hero bg-orange"
    >
      <div className="container position-relative z-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-3">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className={`breadcrumb-item ${idx === breadcrumbs.length - 1 ? 'active' : ''}`}>
                {crumb.link ? <Link to={crumb.link} className="text-light text-decoration-none">{crumb.name}</Link> : crumb.name}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display-4 fw-bold">{title}</h1>
      </div>
    </section>
  );
}

export default PageHero;
