import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./Inputs.css";

const InputFields = ({
  placeholder,
  name,
  handleChange,
  label,
  onClick,
  dropdown,
  textArea = false,
  type = "text",
  values,
  setFieldValue,
  showEmployeeDropdown,
  setShowEmployeeDropdown,
  noArrow = true,
}) => {
  return (
    <div
      className="inputField"
      onClick={!showEmployeeDropdown ? onClick : () => {}}
    >
      <div className="inputField__left">
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
          <div>
            {dropdown ? (
              <span className="inputField__left__text">
                {dropdown === "team" && values !== "" ? values : placeholder}
              </span>
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
        )}
      </div>
      {noArrow === true && (
        <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
      )}
      {dropdown === "team" && showEmployeeDropdown && (
        <div className="inputField__dropdown">
          <h5 className="inputField__dropdown_header">Team member</h5>
          <div className="inputField__dropdown_members">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                className="inputField__dropdown_member_container"
                key={index}
                onClick={() => {
                  setFieldValue("teamMember", "Mitchel Obama");
                  setShowEmployeeDropdown(false);
                }}
              >
                <CustomerCard customer="Mitchel Obama" noArrow noNumber />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputFields;
