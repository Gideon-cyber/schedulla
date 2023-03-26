import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ placeholder }) => {
  return (
    <div className="search__container">
      <div className="search">
        <FaSearch fontSize={16} color="#e2e206" />
        <input
          type="text"
          placeholder={placeholder}
          className="page_container_input"
        />
      </div>
    </div>
  );
};

export default Search;
