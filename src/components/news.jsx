import React, { Component } from "react";
import Card from "./utils/card";
import Search from "./utils/search";
import TagsCloud from "./utils/tagsCloud";
import RecentPost from "./RecentPost";
import Paginate from "./utils/paginate";
import Pagination from "./utils/pagination";
import { getFeeds } from "../service/fakeFeedService";
import NewsDetails from "./newsDetails";
import { Redirect } from "react-router-dom";

class News extends Component {
  state = {
    feeds: getFeeds(),
    currentPage: 1,
    pageSize: 3
  };
  handlePage = page => {
    this.setState({ currentPage: page });
  };
  componentDidMount() {
    let nav = document.querySelector(".newsBtn");
    nav.classList.add("active");
  }
  
  render() {
    const headlines = this.state.feeds[0].channel.item;
    const tags = this.state.feeds[0].channel.tags;
    const { match } = this.props;
    const { currentPage, pageSize } = this.state;

    const filteredArticles =
      match === undefined
        ? headlines
        : headlines.filter(item => item.category == match.params.category);
    const news = Paginate(filteredArticles, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col l8 m12 s12">
          <div className="row">
            <Card data={news} pageSize={pageSize} />
          </div>
          <div className="row">
            <Pagination
              pageSize={pageSize}
              itemsCount={filteredArticles.length}
              onPageChange={this.handlePage}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
        <div className="col l4 m12 s12">
          <div className="row">
            <RecentPost data={headlines} />
          </div>
          <div className="row">
            <Search />
          </div>
          <div className="row">
            <TagsCloud data={tags} />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
