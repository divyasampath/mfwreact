import React, { Component } from "react";
import $ from "jquery/dist/jquery";
import "./App.css";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/common/layout";
import { getFeeds } from "./service/news-api-service";
import M from "materialize-css/dist/js/materialize.min.js";
import Redirect from "react-router-dom/Redirect";
import NewsDetails from "./components/newsDetails";
import News from "./components/news";

class App extends Component {
  state = {
    feeds: []
  };
  componentDidMount() {
    getFeeds().then(data => {
      this.setState({ feeds: data });
    });
  }
  render() {
    const feedData = this.state.feeds;

    return (
      <div className="container">
        <Layout headlines={feedData} />

        <Switch>
          <Route path="/news/:category/:id" component={NewsDetails} />
          <Route path="/news/:category" component={News} />

          <Route path="/news" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">© 2019 Copyright NEWS ROOM</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
