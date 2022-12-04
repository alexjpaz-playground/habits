import React, { useContext } from 'react';

import ScalesSectionContext from './ScalesSectionContext';

export function ScaleSectionPagination() {
  const ctx = useContext(ScalesSectionContext);

  const { scaleIndex, setScaleIndex, scales } = ctx;

  const nextPage = (e) => {
    e.stopPropagation();

    if (scaleIndex < scales.length - 1) {
      setScaleIndex(scaleIndex + 1);
    }
  };

  const prevPage = (e) => {
    e.stopPropagation();


    if (scaleIndex !== 0) {
      setScaleIndex(scaleIndex - 1);
    }
  };

  const currentPage = scaleIndex + 1;
  const numberOfPages = scales.length;

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a className="pagination-previous" href="#index=1" onClick={prevPage} disabled={scaleIndex === 0}>Previous</a>
      <a className="pagination-next" href="#index=1" onClick={nextPage} disabled={scaleIndex === scales.length - 1}>Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link is-current" aria-label={`Page ${scaleIndex}`} href={`#scaleIndex=${scaleIndex}`} aria-current="page">{currentPage}</a>
        </li>
        <li>
          <a className="pagination-link" aria-label={`Page ${scaleIndex}`} href={`#scaleIndex=${scaleIndex}`} aria-current="page">{numberOfPages}</a>
        </li>
      </ul>
    </nav>
  );
}
