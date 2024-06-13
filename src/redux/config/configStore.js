import { configureStore } from "@reduxjs/toolkit";
import monthSlice from "../slices/monthSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    month: monthSlice,
    user: userSlice,
  },
});

export default store;
