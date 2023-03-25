import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { FaSearch } from "react-icons/fa";
import LabelGroup from "../components/LabelGroup/LabelGroup";
import InputFields from "../components/Inputs/Inputs";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerCard from "../components/CustomerCard/CustomerCard";

const PageTwo = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      service: "",
      teamMember: "",
      description: "",
      time: "",
      date: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="page__container">
      <div className="page__container_box">
        <h1 className="page__container_title">Add appointment</h1>
        <form className="page__container_form" onSubmit={handleSubmit}>
          <div className="page__container_form__left">
            <LabelGroup label="Service and duration">
              <InputFields
                name="service"
                handleChange={handleChange}
                placeholder="select a service"
                label="Service"
                onClick={() => {}}
              />
            </LabelGroup>
            <LabelGroup label="Date and time">
              <div className="page__container_time">
                <div className="page__container_time_left">
                  <InputFields
                    name="date"
                    type="date"
                    handleChange={handleChange}
                    placeholder="12 march 2021"
                    label="Date"
                    onClick={() => {}}
                  />
                </div>
                <div className="page__container_time_right">
                  <InputFields
                    name="time"
                    type="time"
                    handleChange={handleChange}
                    placeholder="50 min"
                    label="Time"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </LabelGroup>
            <LabelGroup label="Team member and notes">
              <InputFields
                name="teamMember"
                handleChange={handleChange}
                placeholder="choose a team member"
                label="Team member"
                onClick={() => {}}
              />

              <InputFields
                name="description"
                handleChange={handleChange}
                placeholder="Write a description about this appointment"
                label="Description"
                onClick={() => {}}
                textArea={true}
              />
            </LabelGroup>
          </div>
          <div className="page__container_form__right">
            <LabelGroup label="Add Customer">
              <div className="page__container_customer">
                <FaSearch fontSize={16} color="#e2e206" />
                <input
                  type="text"
                  placeholder="Enter customer name here"
                  className="page_container_input"
                />
              </div>
              <div className="page__container_add">
                <AiOutlinePlus />
                <span>add new customer</span>
              </div>
              <div className="page__container_customer">
                <CustomerCard />
              </div>
            </LabelGroup>
            <div className="page__container_details">
              <div className="page__container_details_content">
                <div className="page__container_details_content_left">
                  <h6>Date and time</h6>
                  <span>{values.date}</span>
                  <span>{values.time}</span>
                </div>
                <div className="page__container_details_content_right">
                  <h6>Price</h6>
                  <span>50000000</span>
                </div>
              </div>
              <button className="page__container_button" type="submit">
                Save appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageTwo;
