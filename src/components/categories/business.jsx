import React, { Component } from "react";
import Card from "../utils/card";

const BusinessNews = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      <Card data={data} pageSize={1} />
    </div>
  );
};

export default BusinessNews;
