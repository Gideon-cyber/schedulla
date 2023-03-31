import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import LabelGroup from "../../components/LabelGroup/LabelGroup";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import Search from "../../components/Search/Search";
import "./Secondpage.css";
import TimePicker from "react-time-picker";
import { generateAvatar } from "../../utils";
import { MdCancel } from "react-icons/md";
import InputFields from "../../components/Inputs/Inputs";
import {
  SchedulerHelpers,
  ProcessedEvent,
} from "@aldabil/react-scheduler/types";
import { useSelector } from "react-redux";

export type initialValues = {
  service: { name: string; duration: string }[];
  employeeName: string;
  description: string;
  time: string;
  date: string;
};

type Props = {
  scheduler: SchedulerHelpers;
  something: ProcessedEvent[];
  setSomething: React.Dispatch<React.SetStateAction<ProcessedEvent[]>>;
};

const PageTwo = ({ something, setSomething, scheduler }: Props) => {
  const { employees } = useSelector((state: any) => state.employee);
  // const event = scheduler!.edited;

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [value, onChange] = useState(new Date().getHours() + ":00" || "");
  const { values, handleChange, handleSubmit, setFieldValue } =
    useFormik<initialValues>({
      initialValues: {
        service: [],
        employeeName: "",
        description: "",
        time: "",
        date: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        // navigate("/");
        const newHour = Number(parseInt(values.time.split(":")[0]));
        const newMinute = Number(parseInt(values.time.split(":")[1]));
        let latestHour = Number(`${newHour}`);
        let latestMinute = Number(
          `${
            values.service[0].duration === "30 mins"
              ? newMinute + 30
              : newMinute + 50
          }`
        );

        try {
          /**Simulate remote data saving */
          const added_updated_event = (await new Promise((res) => {
            /**
             * Make sure the event have 4 mandatory fields
             * event_id: string|number
             * title: string
             * start: Date|string
             * end: Date|string
             */

            // start:
            //     new Date(
            //       new Date(new Date().setHours(newHour)).setMinutes(newMinute)
            //     ) || scheduler!.state.start.value,
            //   end:
            //     new Date(
            //       new Date(new Date().setHours(latestHour)).setMinutes(
            //         latestMinute
            //       )
            //     ) || scheduler!.state.end.value,

            res({
              event_id: Math.random(),
              title: "New appointment",
              start:
                new Date(
                  new Date(new Date().setHours(newHour)).setMinutes(newMinute)
                ) || scheduler!.state.start.value,
              end:
                new Date(
                  new Date(new Date().setHours(latestHour)).setMinutes(
                    latestMinute
                  )
                ) || scheduler!.state.end.value,
              description: values.description,
              employeeName: values.employeeName,
              admin_id: employees.filter(
                (employee) => employee.title === values.employeeName
              )[0].admin_id,
            });
          })) as ProcessedEvent;

          // dispatch({ type: "updateEvent", payload: added_updated_event });
          setSomething((prev: any) => [...prev, added_updated_event]);

          // scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
          // scheduler.close();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      },
    });
  const services = [
    { name: "Hair cut", duration: "50 min" },
    { name: "Beard cut", duration: "30 min" },
  ];

  return (
    <div className="page__container">
      <div className="page__container_box">
        <h1 className="page__container_title">Add appointment</h1>
        <form className="page__container_form" onSubmit={handleSubmit}>
          <div className="page__container_form__left">
            <LabelGroup label="Service and duration">
              <InputFields
                // name="service"
                handleChange={handleChange}
                // dropdown
                placeholder="select a service"
                label="Service"
                onClick={() => {
                  setShowModal(true);
                }}
              />
              {values.service.length > 0 && (
                <div className="page__container_service">
                  <div className="page__container_service_left">
                    <h4>Service</h4>
                    <span>{values.service[0]?.name}</span>
                  </div>
                  <div className="page__container_service_right">
                    <div className="page__container_service_left">
                      <h4>Duration</h4>
                      <span>{values.service[0].duration}</span>
                    </div>
                    <MdCancel
                      fontSize={30}
                      color="#f00"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setFieldValue("service", []);
                      }}
                    />
                  </div>
                </div>
              )}
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
                    setFieldValue={setFieldValue}
                  />
                </div>
              </div>
            </LabelGroup>
            <LabelGroup label="Team member and notes">
              <InputFields
                name="employeeName"
                handleChange={handleChange}
                placeholder="choose a team member"
                label="Team member"
                dropdown="team"
                values={values.employeeName}
                onClick={() => {
                  setShowEmployeeDropdown(true);
                }}
                setFieldValue={setFieldValue}
                showEmployeeDropdown={showEmployeeDropdown}
                setShowEmployeeDropdown={setShowEmployeeDropdown}
              />

              <InputFields
                name="description"
                handleChange={handleChange}
                placeholder="Write a description about this appointment"
                label="Description"
                onClick={() => {}}
                textArea={true}
                noArrow={false}
              />
            </LabelGroup>
          </div>
          <div className="page__container_form__right">
            <LabelGroup label="Add Customer">
              <Search placeholder="Enter customer name here" />

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
      {showModal && (
        <div className="page__container_modal">
          <div
            className="page__container_modal_background"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="page__container_modal_content">
            <h2 className="page__container_modal_content_header">Services</h2>
            <Search placeholder="Search service" />
            {services.map((service, index) => (
              <div
                className="page__container_modal_category"
                key={index}
                onClick={() => {
                  setShowModal(false);
                  setFieldValue("service", [
                    {
                      name: service.name,
                      duration: service.duration,
                      id: index,
                    },
                  ]);
                }}
              >
                <h3>Category name</h3>
                <div className="page__container_modal_category_card">
                  <div className="page__container_modal_category_card_left">
                    <img
                      src={generateAvatar(
                        service.name.split(" ")[0].toUpperCase()[0] +
                          service.name.split(" ")[1].toUpperCase()[0],
                        "#000",
                        "#2b19c9"
                      )}
                      alt="avatar"
                    />
                    <h4>{service.name}</h4>
                  </div>
                  <span className="page__container_modal_category_card_right">
                    {service.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageTwo;
