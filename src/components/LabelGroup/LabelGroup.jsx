import React from "react";
import "./LabelGroup.css";

const LabelGroup = ({ children, label }) => {
  return (
    <div className="labelGroup__container">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default LabelGroup;
