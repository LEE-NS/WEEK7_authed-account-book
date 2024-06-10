import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

const initialState = () => {
  if (localStorage.getItem("selectedMonth")) {
    return localStorage.getItem("selectedMonth").padStart(2, "0");
  } else {
    const init = date.getMonth() + 1;
    localStorage.setItem("selectedMonth", JSON.stringify(init));
    return init;
  }
};

const monthSlice = createSlice({
  name: "month",
  initialState: initialState(),
  reducers: {
    setTotalMonth: (state, action) => {
      localStorage.setItem("selectedMonth", action.payload);
      return action.payload;
    },
  },
});

export const { setTotalMonth } = monthSlice.actions;
export default monthSlice.reducer;
