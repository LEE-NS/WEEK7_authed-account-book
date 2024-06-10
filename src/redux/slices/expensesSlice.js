import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("expenses")) {
    return JSON.parse(localStorage.getItem("expenses"));
  } else {
    return [
      {
        id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
        date: "2024-05-05",
        money: 100000,
        category: "식비",
        job: "세광양대창",
      },
      {
        id: "25600f72-53b4-4187-a9c2-47358580e2f8",
        date: "2024-05-10",
        money: 40500,
        category: "도서",
        job: "모던 자바스크립트",
      },
      {
        id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
        date: "2024-05-02",
        money: 50000,
        category: "식비",
        job: "회식",
      },
      {
        id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
        date: "2024-06-02",
        money: 500,
        category: "간식",
        job: "아이스크림",
      },
      {
        id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
        date: "2024-06-02",
        money: 1055000,
        category: "여행",
        job: "일본여행",
      },
      {
        id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
        date: "2024-06-09",
        money: 155000,
        category: "미용",
        job: "미용실",
      },
      {
        id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
        date: "2024-06-12",
        money: "75000",
        category: "도서도서도서도서도서도서도서도서",
        job: "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
      },
    ];
  }
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState(),
  reducers: {
    addExpenses: (state, action) => {
      const totalExpenses = [...state, action.payload];
      localStorage.setItem("expenses", JSON.stringify(totalExpenses));
      return totalExpenses;
    },
    updateExpenses: (state, action) => {
      const { foundItemIndex, updatedItem } = action.payload;
      state.splice(foundItemIndex, 1, updatedItem);
      localStorage.setItem("expenses", JSON.stringify(state));
      return state;
    },
    removeExpenses: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("expenses", JSON.stringify(state));
      return state;
    },
  },
});

export const { addExpenses, updateExpenses, removeExpenses } =
  expensesSlice.actions;
export default expensesSlice.reducer;
