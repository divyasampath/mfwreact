import React, { Component } from "react";

class widget extends Component {
  state = {};

  render() {
    return (
      <div className="section">
        <div className="slider">
          <ul className="slides">
            {this.props.data.map(item => (
              <li key={item.pubDate}>
                <div className="black-text">
                  <div className="row">
                    <div className="col s6 m6 l6 materialboxed">
                      <iframe
                        title={item.title}
                        width="100%"
                        height="400px"
                        src={item.src}
                      />
                    </div>
                    <div className="col s6 m6 l6 bg-1">
                      <div className="slider-caption">
                        <h3 className="slider-title">{item.title}</h3>

                        <p className="desc">{item.description}</p>
                        <h5 class="light text-lighten-3 category">
                          {item.category}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default widget;
