import React from "react";

const RecentPost = ({ data }) => {
  return (
    <div className="row recentPost">
      <div className="col offset-s3">
        <h5 className="heading">Latest Posts</h5>
        <hr />
        <div class="collection posts">
          {data.map(item => (
            <a href="#!" class="collection-item">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
