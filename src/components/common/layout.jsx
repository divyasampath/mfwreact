import React, { Component } from "react";
import Header from "./header";
import Logo from "./logo";
import Navigation from "./navigation";

const Layout = ({ headlines, categories }) => {
  return (
    <div>
      <Header data={headlines} />
      <Logo />
      <Navigation data={categories} />
    </div>
  );
};

export default Layout;
