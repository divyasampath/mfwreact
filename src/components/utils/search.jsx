import React, { Component } from "react";

const Search = ({ onSearch }) => {
  return (
    <div className="row">
      <div className="col s10  offset-s3">
        <div className="row">
          <div className="input-field col s12">
            <i className="fa fa-search prefix" />
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              onChange={e => onSearch(e.target.value)}
            />
            <label for="autocomplete-input">Search</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
