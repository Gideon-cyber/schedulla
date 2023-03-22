import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  employees: [
    {
      admin_id: 1,
      title: "John",
      mobile: "555666777",
      avatar: "https://picsum.photos/200/300",
      color: "#ab2d2d",
    },
    {
      admin_id: 2,
      title: "Gideon Cyber",
      mobile: "555666777",
      avatar: "https://picsum.photos/200/300",
      color: "#2dabab",
    },
  ],
};

export let employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export let { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
