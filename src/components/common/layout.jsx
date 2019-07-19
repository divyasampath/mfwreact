import React, { Component } from "react";
import Header from "./header";
import Logo from "./logo";
import Navigation from "./navigation";
import Home from "../home";

const Layout = ({ headlines }) => {
  if (headlines.length == 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header data={headlines} />
      <Logo />
      <Navigation />
    </div>
  );
};

export default Layout;
