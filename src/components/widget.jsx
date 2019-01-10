import React, { Component } from "react";
import "jquery/dist/jquery.slim";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class widget extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <OwlCarousel
            className="owl-theme section"
            loop
            margin={4}
            items={2}
            autoplay={true}
            video={true}
            autoplayHoverPause={true}
            autoWidth={true}
          >
            {this.props.data.map(item => (
              <div className="row">
                <div key={item.pubDate} className="item col s12">
                  <iframe title={item.title} src={item.src} className="" />
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default widget;
