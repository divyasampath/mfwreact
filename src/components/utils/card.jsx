import React from "react";
import { Link } from "react-router-dom";

const card = ({ data, pageSize, onArticleClick }) => {
  return (
    <div className="section">
      <div class="row">
        {data.map(feed => (
          <div class="col s12 m7 l12 card-custom">
            <div class="card">
              <div className="col s12 m12 l6 card-video">
                <iframe
                  title={feed.title}
                  width="100%"
                  height="300px"
                  src={feed.src}
                />
              </div>
              <div className="col s12 m12 l6">
                <div class="card-content">
                  <span class="card-title">
                    <Link to={`/news/${feed.category}/${feed.id}`}>
                      {feed.title}
                    </Link>
                  </span>
                  <span className="blue-grey-text">
                    <i className="fa fa-clock-o" />
                    {feed.pubDate}
                  </span>
                  <p description>{feed.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default card;
