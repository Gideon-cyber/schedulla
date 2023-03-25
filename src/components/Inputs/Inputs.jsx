import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Inputs.css";

const InputFields = ({
  placeholder,
  name,
  handleChange,
  label,
  onClick,
  textArea = false,
  type = "text",
}) => {
  return (
    <div className="inputField">
      <div className="inputField__left" onClick={onClick}>
        <span className="inputField__left__title">{label}</span>
        {textArea ? (
          <textarea
            className="inputField__left__text"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            rows="4"
          />
        ) : (
          <input
            className="inputField__left__text"
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
        )}
      </div>
      <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
    </div>
  );
};

export default InputFields;
