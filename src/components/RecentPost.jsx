import React from "react";
import { Link } from "react-router-dom";
const RecentPost = ({ data }) => {
  return (
    <div className="row recentPost">
      <div className="col offset-s3">
        <h5 className="heading">Latest Posts</h5>
        <hr />
        <ul class="collection posts">
          {data.map(feed => (
            <li className="collection-item">
              <div className="">
                <span className="new badge purple darken-4">
                  {feed.category}
                </span>
              </div>
              <br />
              <Link
                to={`/news/${feed.category}/${feed.id}`}
                className="collection-item link"
              >
                {feed.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPost;
