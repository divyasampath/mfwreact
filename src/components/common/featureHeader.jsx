import React, { Component } from "react";

class FeatureHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l12  s12 m12">
          <i className="prefix fa fa-star fa-2x feature-icon" />
          <span class="feature-text">Featured</span>
          <hr />
        </div>
      </div>
    );
  }
}

export default FeatureHeader;
