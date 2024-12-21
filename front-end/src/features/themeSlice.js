import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state) => {
      return state === "dark" ? "light" : "dark";
    },
    getStoredTheme: (state) => {
      const storedTheme = localStorage.getItem("theme-business-cards");
      return storedTheme || state;
    },
    storeTheme: (state, action) => {
      localStorage.setItem("theme-business-cards", action.payload);
      return action.payload;
    },
  },
});

export const { toggleTheme, getStoredTheme, storeTheme } = themeSlice.actions;
export default themeSlice.reducer;
