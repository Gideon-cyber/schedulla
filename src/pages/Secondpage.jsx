import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { MdOutlineArrowDropDown } from "react-icons/md";

const PageTwo = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      service: "",
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
            <div className="page__container_inputBox">
              <label>Service and duration</label>
              <div className="page__container_input_service">
                <div className="page__container_input_service__left">
                  <span className="page__container_input_service__left__title">
                    Service
                  </span>
                  <input
                    className="page__container_input_service__left__text"
                    type="text"
                    placeholder="select a service"
                    name="service"
                    onChange={handleChange}
                  />
                </div>
                <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
              </div>
            </div>
            <div className="page__container_inputBox">
              <label>Date and time</label>
            </div>
            <div className="page__container_inputBox teamBox">
              <label>Team member and notes</label>
              <div className="page__container_input_service">
                <div className="page__container_input_service__left">
                  <span className="page__container_input_service__left__title">
                    Team member
                  </span>
                  <input
                    className="page__container_input_service__left__text"
                    type="text"
                    placeholder="choose a team member"
                    name="service"
                    onChange={handleChange}
                  />
                </div>
                <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
              </div>
              <div className="page__container_input_service">
                <div className="page__container_input_service__left">
                  <span className="page__container_input_service__left__title">
                    Description
                  </span>
                  <input
                    className="page__container_input_service__left__text"
                    type="text"
                    placeholder="Write a decription about this appointment"
                    name="service"
                    onChange={handleChange}
                  />
                </div>
                <MdOutlineArrowDropDown fontSize={30} color="#e2e206" />
              </div>
            </div>
          </div>
          <div className="page__container_form__right">
            <div className="page__container_inputBox">
              <label>Add Customer</label>
            </div>

            <button className="page__container_button">Save appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageTwo;
