// Pagination.js

import React from 'react';
import '../styles/Pagination.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
     const MAX_VISIBLE_PAGES = 5;
     const firstVisiblePage = Math.floor(currentPage / MAX_VISIBLE_PAGES) * MAX_VISIBLE_PAGES;
    const pageCount = Math.min(totalPages - firstVisiblePage, MAX_VISIBLE_PAGES);
    const pages = [...Array(pageCount > 0 ? pageCount : 0).keys()].map(i => i + firstVisiblePage);

    return (
        <div className="pagination" style={{ fontFamily: 'Pretendard-Bold'}}>
          {firstVisiblePage > 0 && (
            <button onClick={() => setCurrentPage(firstVisiblePage - 1)}>
              <HiOutlineChevronLeft />
            </button>
          )}
    
          {pages.map(page => (
            <button 
              key={page} 
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page + 1}
            </button>
          ))}
    
          {firstVisiblePage + MAX_VISIBLE_PAGES < totalPages && (
            <button onClick={() => setCurrentPage(firstVisiblePage + MAX_VISIBLE_PAGES)}>
              <HiOutlineChevronRight />
            </button>
          )}
        </div>
      );
    };

export default Pagination;