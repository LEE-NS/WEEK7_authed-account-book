import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "../slices/expensesSlice";
import monthSlice from "../slices/monthSlice";

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    month: monthSlice,
  },
});

export default store;
