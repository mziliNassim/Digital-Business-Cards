import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: { message: "", state: "" },
  reducers: {},
});

export const {} = alertSlice.actions;
export default alertSlice.reducer;
