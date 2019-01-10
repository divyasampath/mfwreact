import React, { Component } from "react";
import Newsticker from "react-newsticker";

class header extends Component {
  state = {};

  handleClick(id) {
    console.log(id);
  }

  getFullDate() {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let today = new Date();
    return today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
  }
  render() {
    const { data } = this.props;
    return (
      <div className="row header-wrapper">
        <div className="col hide-on-down">
          <button className="btn-floating pulse orange accent-3 headlines-pulse z-depth-1" />
        </div>
        <div className="col m10 l7 news-feed">
          <div className="ticker-wrap">
            <Newsticker
              news={data.map(item => item.title)}
              onClick={e => this.handleClick(e)}
            />
          </div>
        </div>
        <div className="col ">
          <div className="date">
            <span>{this.getFullDate()}</span>
          </div>
        </div>
        <div className="col right-align">
          <div className="media-icons hoverable">
            <a href="https://www.facebook.com/moment4women/" target="_blank">
              <i className="fa fa-facebook hoverable" />
            </a>
            <a href="https://twitter.com/moment4women" target="_blank">
              <i className="fa fa-twitter hoverable" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCmTO7a-vTd5CZTg7_n20xIQ"
              target="_blank"
            >
              <i className="fa fa-youtube hoverable" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
