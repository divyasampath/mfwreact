import React, { Component } from "react";
import Link from "react-router-dom/Link";
import NavLink from "react-router-dom/NavLink";
import News from "../news";

class Navigation extends Component {
  state = {};
  handleDropDown() {}
  render() {
    const { data } = this.props;
    return (
      <nav className="grey lighten-4 nav-bar">
        <div className="nav-wrapper left">
          <ul id="nav-mobile" className="nav-list right hide-on-med-and-down">
            <li className="hoverable home-icon">
              <Link to="/">
                <i className="fa fa-home fa-2x white-text" />
              </Link>
            </li>
            <li className="hoverable">
              <NavLink to="/home" className="dropdown newsBtn" href="#">
                <div class="dropdown">
                  <div class="dropbtn">News</div>
                  <ul class="dropdown-menu">
                    {data.map(item => (
                      <li>
                        <Link
                          onClick={this.handleDropDown}
                          to={`/news/${item.value}`}
                          Component={News}
                        >
                          {item.value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavLink>
            </li>
            <li className="hoverable">
              <NavLink to="/about">About us</NavLink>
            </li>

            <li className="hoverable">
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      // Dropdown Structure //
    );
  }
}

export default Navigation;
