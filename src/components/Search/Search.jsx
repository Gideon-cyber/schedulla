import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./Search.css";

const Search = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownItems = [
    { name: "Marcus Rashford", number: 102344566 },
    { name: "Mitchel Obama", number: 9393933884 },
    { name: "Gabriel Jesus", number: 983812344 },
    { name: "Marcus Rashford", number: 102344566 },
    { name: "Mitchel Obama", number: 9393933884 },
    { name: "Gabriel Jesus", number: 983812344 },
    { name: "Marcus Rashford", number: 102344566 },
    { name: "Mitchel Obama", number: 9393933884 },
    { name: "Gabriel Jesus", number: 983812344 },
  ];
  return (
    <div className="search__container" onClick={() => setOpen((prev) => !prev)}>
      <div className="search">
        <FaSearch fontSize={16} color="#e2e206" />
        <input
          type="text"
          value={searchValue}
          placeholder={placeholder}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="page_container_input"
        />
      </div>
      {open && (
        <div className="search__dropdown">
          {dropdownItems.map((item, index) => (
            <div
              className={`search__dropdown_customer ${
                item.name.toLowerCase().includes(searchValue.toLowerCase())
                  ? ""
                  : "display_none"
              }`}
              key={index}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CustomerCard customer={item.name} number={item.number} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
