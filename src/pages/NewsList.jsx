import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';
import PageHero from '../sections/PageHero';

const ITEMS_PER_PAGE = 9;

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date_desc'); // 'date_desc', 'date_asc', 'title_asc', 'title_desc'

  // Filtrujemy tylko opublikowane i pasujące do wyszukiwarki
  const filteredNews = newsData
    .filter(news =>
      new Date(news.date) <= new Date() &&
      news.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'date_asc') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOption === 'date_desc') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOption === 'title_asc') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'title_desc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      <Helmet>
        <title>Latest News | MR GOODS Limited</title>
        <meta
          name="description"
          content="Stay updated with the latest news, updates, and insights from MR GOODS Limited. Discover our recent projects, service innovations, and expert tips in painting, decorating, plastering, and drylining."
        />
        <meta property="og:title" content="Latest News | MR GOODS Limited" />
        <meta property="og:description" content="Discover updates, expert tips, and highlights from MR GOODS Limited’s latest work and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrgoods.co.uk/news" />
        <link rel="canonical" href="https://www.mrgoods.co.uk/news" />
      </Helmet>

      <PageHero
        title="Latest News"
        backgroundImage="/images/news/news-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'News' }
        ]}
      />
      <section className='py-5 bg-light'>
      <div className="container">
        {/* Wyszukiwanie i sortowanie */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="col-md-6 text-md-end">
            <select
              className="form-select"
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="date_desc">Newest First</option>
              <option value="date_asc">Oldest First</option>
              <option value="title_asc">Title A–Z</option>
              <option value="title_desc">Title Z–A</option>
            </select>
          </div>
        </div>

        {/* Lista */}
        <div className="row">
          {paginatedNews.map((news) => (
            <div className="col-md-6 col-lg-4 mb-4" key={news.id}>
              <div className="card h-100 shadow border-0">
                <div className="ratio ratio-4x3">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="card-img-top object-fit-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column bg-dark-small-gosia">
                  <small className="mb-2 z-1">{new Date(news.date).toLocaleDateString()}</small>
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text flex-grow-1">{news.summary}</p>
                  <Link to={`/news/${news.slug}`} className="btn btn-custom mt-auto z-1">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination custom-pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => goToPage(currentPage - 1)}>Previous</button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => goToPage(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => goToPage(currentPage + 1)}>Next</button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      </section>
    </>
  );
};

export default NewsList;