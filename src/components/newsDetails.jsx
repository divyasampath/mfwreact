import React, { Component } from "react";
import { getFeeds } from "../service/news-api-service";

class Details extends Component {
  state = {
    feeds: getFeeds()
  };
  componentDidMount() {
    let nav = document.querySelector(".newsBtn");
    nav.classList.add("active");
  }
  render() {
    const { match } = this.props;

    const content = this.state.feeds[0].articles.filter(
      i => i.id.toString() == match.params.id
    );

    return (
      <div className=" large">
        <h2 className="article-title">{content[0].title}</h2>
        <div>
          <p className="flow-text center-align pink-text">
            {content[0].description}
          </p>
        </div>
        <div className="container">
          <div className="col s12 m12 l12 article">
            <iframe
              title={content[0].title}
              width="100%"
              height="400px"
              src={content[0].src}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
