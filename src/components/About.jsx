import React, { Component } from "react";
import Layout from "./common/layout";

class About extends Component {
  state = {};
  componentDidMount() {
    let nav = document.querySelector(".newsBtn");
    nav.classList.remove("active");
  }
  render() {
    return <h1>Coming Soon</h1>;
  }
}

export default About;
