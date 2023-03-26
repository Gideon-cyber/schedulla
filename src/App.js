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
import PageOne from "./pages/FirstPage/Firstpage";
import PageTwo from "./pages/SecondPage/Secondpage";

function App() {
  const { resourceViewMode, setResourceViewMode } = useScheduler();
  let events = useSelector((state) => state.event);
  console.log(events);
  let { employees } = useSelector((state) => state.employee);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

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
            />
          }
        />
        <Route path="/2" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
