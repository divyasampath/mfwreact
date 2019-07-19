import React, { Component } from "react";
import "jquery/dist/jquery.slim";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const widget = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div class="col s12 m7 l4">
        <div class="card horizontal card-customize">
          <div class="card-image">
            <img src={data[0].urlToImage} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m7 l4">
        <div class="card horizontal card-customize">
          <div class="card-image">
            <img src={data[1].urlToImage} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m7 l4">
        <div class="card horizontal card-customize">
          <div class="card-image">
            <img src={data[2].urlToImage} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default widget;
