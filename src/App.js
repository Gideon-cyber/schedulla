import { Fragment, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler, useScheduler } from "@aldabil/react-scheduler";
// import { RESOURCES, EVENTS } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useDispatch, useSelector } from "react-redux";
import { RESOURCES, EVENTS } from "./data";
import "./app.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageOne from "./pages/FirstPage/Firstpage.tsx";
import PageTwo from "./pages/SecondPage/Secondpage.tsx";

function App() {
  const { resourceViewMode, setResourceViewMode } = useScheduler();
  let events = useSelector((state) => state.event);
  console.log(events);
  let { employees } = useSelector((state) => state.employee);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageOne
              showAddDropdown={showAddDropdown}
              setShowAddDropdown={setShowAddDropdown}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              something={something}
              setSomething={setSomething}
            />
          }
        />
        <Route
          path="/2"
          element={
            <PageTwo something={something} setSomething={setSomething} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
