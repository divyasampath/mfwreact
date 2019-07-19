import React, { Component } from "react";
import { getNewsFrom } from "../service/news-api-service";
import Widget from "./widget";
import M from "materialize-css/dist/js/materialize.min.js";
import News from "./news";
import FeatureHeader from "./common/featureHeader";
import BusinessNews from "./categories/business";

class home extends Component {
  state = {
    newsList: [],
    pageSize: 2
  };
  componentWillMount() {
    getNewsFrom("world").then(data => {
      this.setState({ newsList: data });
    });
  }
  render() {
    const headlines = this.state.newsList.articles;
    return (
      <div>
        <Widget data={headlines} />
        <FeatureHeader />
        <BusinessNews data={headlines} />
      </div>
    );
  }
}

export default home;
