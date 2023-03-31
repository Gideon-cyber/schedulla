import React, { useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import { useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

import "./CustomEditor.css";

import InputFields from "../Inputs/Inputs";

const CustomEditor = ({
  scheduler,
  // dispatch,
  setSomething,
}) => {
  const event = scheduler.edited;
  const { employees } = useSelector((state) => state.employee);

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
    employeeName: event?.employeeName || "",
    startTime: event?.start || "",
  });

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      title: event?.title || "",
      description: event?.description || "",
      employeeName: event?.employeeName || "",
      startTime: event?.start || "",
      endTime: event?.end || "",
      date: event?.date || "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        scheduler.loading(true);

        /**Simulate remote data saving */
        const added_updated_event = await new Promise((res) => {
          /**
           * Make sure the event have 4 mandatory fields
           * event_id: string|number
           * title: string
           * start: Date|string
           * end: Date|string
           */

          res({
            event_id: event?.event_id || Math.random(),
            title: "New appointment",
            start: scheduler.state.start.value || values.startTime,
            end: scheduler.state.end.value || values.endTime,
            description: values.description,
            employeeName: values.employeeName,
            admin_id: employees.filter(
              (employee) => employee.title === values.employeeName
            )[0].admin_id,
          });
        });

        // dispatch({ type: "updateEvent", payload: added_updated_event });
        setSomething((prev) => [...prev, added_updated_event]);

        scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
        scheduler.close();
      } finally {
        scheduler.loading(false);
      }
    },
  });
  const [error, setError] = useState("");
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);

  // const handleChange = (value: string, name: string) => {
  //   setState((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  // const handleSubmit = async () => {
  //   // Your own validation
  //   if (state.title.length < 3) {
  //     return setError("Min 3 letters");
  //   }

  //   try {
  //     scheduler.loading(true);

  //     /**Simulate remote data saving */
  //     const added_updated_event = (await new Promise((res) => {
  //       /**
  //        * Make sure the event have 4 mandatory fields
  //        * event_id: string|number
  //        * title: string
  //        * start: Date|string
  //        * end: Date|string
  //        */
  //       setTimeout(() => {
  //         res({
  //           event_id: event?.event_id || Math.random(),
  //           title: state.title,
  //           start: scheduler.state.start.value,
  //           end: scheduler.state.end.value,
  //           description: state.description,
  //         });
  //       }, 3000);
  //     })) as ProcessedEvent;

  //     scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
  //     scheduler.close();
  //   } finally {
  //     scheduler.loading(false);
  //   }
  // };
  return (
    <form onSubmit={handleSubmit} className="custom__modal_container">
      <div className="custom__modal_heading">
        <span>Add new blocked time</span>
        <AiOutlineClose
          color="#f00"
          style={{ fontSize: "18px", cursor: "pointer" }}
          onClick={scheduler.close}
        />
      </div>
      <InputFields
        name="employeeName"
        handleChange={handleChange}
        placeholder="choose employee name"
        label="Employee name"
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
        name="date"
        type="date"
        handleChange={handleChange}
        placeholder="12 march 2021"
        label="Date"
        onClick={() => {}}
      />

      <div className="custom__modal_time">
        <InputFields
          name="startTime"
          type="time"
          handleChange={handleChange}
          placeholder="50 min"
          label="Start time"
          onClick={() => {}}
          setFieldValue={setFieldValue}
        />

        <InputFields
          name="endTime"
          type="time"
          handleChange={handleChange}
          placeholder="50 min"
          label="End time"
          onClick={() => {}}
          setFieldValue={setFieldValue}
        />
      </div>

      <InputFields
        name="description"
        handleChange={handleChange}
        placeholder="Add a note for the block time"
        label="Note"
        onClick={() => {}}
        textArea={true}
        noArrow={false}
      />

      <button className="page__container_button" type="submit">
        Save
      </button>
    </form>
  );
};

export default CustomEditor;
