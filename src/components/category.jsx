import React, { Component } from "react";

class Category extends Component {
  state = {
    currentPage: 1
  };
  render() {
    const { feeds, category, id, pageSize, match } = this.props;
    return <h3>Category</h3>;
  }
}

export default Category;
