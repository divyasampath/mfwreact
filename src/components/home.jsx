import React, { Component } from "react";
import { getFeeds } from "../service/fakeFeedService";
import Widget from "./widget";
import M from "materialize-css/dist/js/materialize.min.js";
import $ from "jquery";
import News from "./news";
import FeatureHeader from "./common/featureHeader";

class home extends Component {
  state = {
    feeds: getFeeds(),
    pageSize: 2
  };
  componentDidMount() {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems, true);

    let nav = document.querySelector(".newsBtn");
    nav.classList.add("active");
  }
  render() {
    const data = this.state.feeds[0].channel;
    const headlines = this.state.feeds[0].channel.item;
    return (
      <div>
        <Widget data={headlines} />
        <FeatureHeader />
        <News />
      </div>
    );
  }
}

export default home;
