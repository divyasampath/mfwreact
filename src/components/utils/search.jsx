import React from "react";

const Search = () => {
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
            />
            <label for="autocomplete-input">Search</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
