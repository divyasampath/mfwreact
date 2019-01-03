import React, { Component } from "react";

class Contact extends Component {
  state = {};
  componentDidMount() {
    let nav = document.querySelector(".newsBtn");
    nav.classList.remove("active");
  }
  render() {
    return <h1>Coming Soon</h1>;
  }
}

export default Contact;
