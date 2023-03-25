import React from "react";
import { TbMathGreater } from "react-icons/tb";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./CustomerCard.css";
import { generateAvatar } from "../../utils";

const CustomerCard = () => {
  return (
    <div className="customerCard__container">
      <div className="customerCard__customer">
        <img
          src={generateAvatar("Marcus Rashford".slice(0, 1), "#000", "#e2e206")}
          alt="avatar"
        />
        <div className="customerCard__customer_text">
          <h5>Marcus Rashford</h5>
          <span>03123456</span>
        </div>
      </div>
      <TbMathGreater fontSize={30} color="#e2e206" />
    </div>
  );
};

export default CustomerCard;
