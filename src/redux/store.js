import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import eventReducer from "./eventSlice";

export let store = configureStore({
  reducer: {
    event: eventReducer,
    employee: employeeReducer,
  },
});
