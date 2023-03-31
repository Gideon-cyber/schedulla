import React from "react";
import { TbMathGreater } from "react-icons/tb";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./CustomerCard.css";
import { generateAvatar } from "../../utils";

const CustomerCard = ({
  noArrow = true,
  noNumber = false,
  customer = "Marcus Rashford",
  number = 103123456,
}) => {
  return (
    <div className="customerCard__container">
      <div className="customerCard__customer">
        <img
          src={generateAvatar(customer.slice(0, 1), "#000", "#e2e206")}
          alt="avatar"
        />
        <div className="customerCard__customer_text">
          <h5>{customer}</h5>
          {!noNumber && <span>{number}</span>}
        </div>
      </div>
      {!noArrow && <TbMathGreater fontSize={30} color="#e2e206" />}
    </div>
  );
};

export default CustomerCard;
