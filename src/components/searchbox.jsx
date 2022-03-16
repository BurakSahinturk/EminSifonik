import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Ara..."
        aria-label="Ara"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Ara
      </button>
    </form>
  );
};

export default SearchBox;
