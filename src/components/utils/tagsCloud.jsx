import React from "react";

const Tags = ({ data }) => {
  return (
    <div className="row">
      <div className="col offset-s3">
        <div className="row">
          <h5>Popular Tags</h5>
          <hr />
        </div>
        {data.map(tag => (
          <div key={tag} className="chip">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
