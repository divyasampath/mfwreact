import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { pageSize, itemsCount, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1 || pageCount == 0) return null;

  const pages = _.range(1, pageCount + 1);
  return (
    <ul className="pagination">
      <li className="disabled">
        <a href="#!">
          <i className="fa fa-chevron-left" />
        </a>
      </li>
      {pages.map(page => (
        <li
          className={
            currentPage == page ? "waves-effect active" : "waves-effect"
          }
        >
          <a href="#!" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
      <li className="waves-effect">
        <a href="#!">
          <i className="fa fa-chevron-right" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
