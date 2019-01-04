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
    pageSize: 3,
    searchText: "",
    tagSearch: ""
  };
  handlePage = page => {
    this.setState({ currentPage: page });
  };
  handleSearch = searchText => {
    this.setState({ searchText: searchText.toUpperCase() });
  };
  toggleTags() {
    let tags = document.querySelectorAll(".chip");
    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.remove("active");
    }
  }
  handleTagClick = value => {
    this.toggleTags();
    value.classList.add("active");
    this.setState({ tagSearch: value.textContent.toUpperCase() });
  };
  componentDidMount() {
    let nav = document.querySelector(".newsBtn");
    nav.classList.add("active");
    this.toggleTags();
  }

  render() {
    const headlines = this.state.feeds[0].channel.item;
    const tags = this.state.feeds[0].channel.tags;
    const { match } = this.props;
    const { currentPage, pageSize, searchText, tagSearch } = this.state;

    let filteredArticles =
      match === undefined
        ? headlines
        : headlines.filter(item => item.category == match.params.category);
    //search manually//
    if (searchText != "")
      filteredArticles = headlines.filter(
        item =>
          item.description.toUpperCase().includes(searchText) ||
          item.title.toUpperCase().includes(searchText)
      );
    //on click of tags//
    if (tagSearch != "")
      filteredArticles = headlines.filter(
        item =>
          item.description.toUpperCase().includes(tagSearch) ||
          item.title.toUpperCase().includes(tagSearch)
      );
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
            <RecentPost data={headlines.slice(0, 5)} />
          </div>
          <div className="row">
            <Search onSearch={this.handleSearch} />
          </div>
          <div className="row">
            <TagsCloud
              data={tags}
              onTagClick={this.handleTagClick}
              onTagClear={this.toggleTags}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
