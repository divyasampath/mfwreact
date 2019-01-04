import React from "react";

const Tags = ({ data, onTagClick, onTagClear }) => {
  return (
    <div className="row">
      <div className="col offset-s4">
        <div className="row tag">
          <h5>Popular Tags</h5>
          <span class="black-text" onClick={() => onTagClear()}>
            <i className="fa fa-close" />
          </span>
        </div>
        <hr />
        {data.map(tag => (
          <div key={tag} className="chip" onClick={e => onTagClick(e.target)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
