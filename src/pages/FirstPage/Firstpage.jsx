import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";
import { Scheduler, useScheduler } from "@aldabil/react-scheduler";
// import { RESOURCES, EVENTS } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addToEvents } from "../../redux/eventSlice";
import { useState } from "react";

const PageOne = ({
  showAddDropdown,
  setShowAddDropdown,
  showDropdown,
  setShowDropdown,
}) => {
  let { employees } = useSelector((state) => state.employee);
  let { events } = useSelector((state) => state.event);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchRemote = async (query) => {
    // console.log({ query });
    /**Simulate fetchin remote data */
    // dispatch(
    //   addToEvents({
    //     event_id: 1,
    //     title: "Event 1",
    //     start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
    //     end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
    //     admin_id: 1,
    //   })
    // );
    return new Promise((res) => {
      setTimeout(() => {
        res(something);
      }, 3000);
    });
  };

  const [something, setSomething] = useState([
    {
      event_id: 2,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
      admin_id: 1,
    },
    {
      event_id: 1,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
      admin_id: 2,
    },
  ]);

  useEffect(() => {}, []);

  return (
    <Fragment>
      {/* <div style={{ textAlign: "center" }}>
        <span>Resource View Mode: </span>
        <Button
          color={resourceViewMode === "default" ? "primary" : "inherit"}
          variant={resourceViewMode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setResourceViewMode("default")}
        >
          Default
        </Button>
        <Button
          color={resourceViewMode === "tabs" ? "primary" : "inherit"}
          variant={resourceViewMode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setResourceViewMode("tabs")}
        >
          Tabs
        </Button>
      </div> */}
      <div className="header">
        <div className="header__left">
          <div
            className="header__left__title"
            onClick={() => {
              setShowDropdown((prev) => !prev);
            }}
          >
            <span>All Employees</span>
            <MdOutlineArrowDropDown fontSize={30} />
          </div>
          <div
            className={`header__dropdown ${!showDropdown && "display_none"}`}
          >
            {employees.map((employee) => (
              <div className="header__dropdown__item" key={employee.admin_id}>
                <span>{employee.title}</span>
                <input type="checkbox" />
              </div>
            ))}
          </div>
        </div>
        <div className="header__right">
          <div
            className="header__left__title"
            onClick={() => {
              setShowAddDropdown((prev) => !prev);
              console.log(something);
              setSomething([
                ...something,
                {
                  event_id: 3,
                  title: "Event 3",
                  start: new Date(
                    new Date(new Date().setHours(11)).setMinutes(30)
                  ),
                  end: new Date(
                    new Date(new Date().setHours(12)).setMinutes(30)
                  ),
                  admin_id: 2,
                },
              ]);
            }}
          >
            <span>Add</span>
            <MdOutlineArrowDropDown fontSize={30} />
          </div>
          <div
            className={`header__right__dropdown ${
              !showAddDropdown && "display_none"
            }`}
          >
            <div
              className="header__dropdown__item"
              onClick={() => {
                navigate("/2");
              }}
            >
              <span>New appointment</span>
            </div>
            <div className="header__dropdown__item">
              <span>New blocked time</span>
            </div>
          </div>
        </div>
      </div>
      <Scheduler
        getRemoteEvents={fetchRemote}
        // events={something}
        resources={employees}
        view="day"
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          // subTextField: "mobile",
          avatarField: "title",
          colorField: "color",
        }}
        fields={[
          {
            name: "admin_id",
            type: "select",
            default: employees[0].admin_id,
            options: employees.map((res) => {
              return {
                id: res.admin_id,
                text: `${res.title} (${res.mobile})`,
                value: res.admin_id, //Should match "name" property
              };
            }),
            config: { label: "Assignee", required: true },
          },
        ]}
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              {fields.map((field, i) => {
                if (field.name === "admin_id") {
                  const admin = field.options.find(
                    (fe) => fe.id === event.admin_id
                  );
                  return (
                    // <Typography
                    //   key={i}
                    //   style={{
                    //     display: "flex",
                    //     alignItems: "center",
                    //     msFlexDirection: "column",
                    //     flexDirection: "column",
                    //   }}
                    //   color="textSecondary"
                    //   flexDirection={"column"}
                    //   variant="caption"
                    //   noWrap
                    // >
                    //   <PersonRoundedIcon /> {admin.text}
                    // </Typography>
                    <div key={i}>
                      <PersonRoundedIcon />
                      <div>{admin.text}</div>
                    </div>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          );
        }}
      />
    </Fragment>
  );
};

export default PageOne;
