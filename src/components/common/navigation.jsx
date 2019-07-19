import React, { Component } from "react";
import Link from "react-router-dom/Link";
import NavLink from "react-router-dom/NavLink";
import News from "../news";

class Navigation extends Component {
  state = {};
  handleDropDown() {}
  render() {
    return (
      <nav className="grey lighten-4 nav-bar">
        <div className="nav-wrapper ">
          <ul id="nav-mobile" className="nav-list  hide-on-med-and-down">
            <li className="hoverable">
              <NavLink to="/home" className="" href="#">
                Home
              </NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/Business">Business</NavLink>
            </li>

            <li className="hoverable">
              <NavLink to="/contact">Entertainment</NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/contact">Cryptocurrency</NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/contact">Health</NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/contact">Technology</NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/contact">Sports</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      // Dropdown Structure //
    );
  }
}

export default Navigation;
