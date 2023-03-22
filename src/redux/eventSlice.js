import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  events: [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
      admin_id: 1,
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
      admin_id: 2,
    },
    // {
    //   event_id: 3,
    //   title: "Event 3",
    //   start: new Date(
    //     new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
    //       new Date().getDate() - 1
    //     )
    //   ),
    //   end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    //   admin_id: 1,
    // },
    // {
    //   event_id: 4,
    //   title: "Event 4",
    //   start: new Date(
    //     new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
    //       new Date().getDate() - 2
    //     )
    //   ),
    //   end: new Date(
    //     new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
    //       new Date().getDate() - 2
    //     )
    //   ),
    //   admin_id: 2,
    // },
  ],
};

export let eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = eventSlice.actions;

export default eventSlice.reducer;
