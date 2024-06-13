import axios from "axios";

const jsonHost = axios.create({
  baseURL: "http://localhost:4000",
});

export const getExpenses = async () => {
  try {
    const response = await jsonHost.get("/expenses");
    return response.data;
  } catch (error) {
    alert("서버와의 연결에 문제가 발생했습니다.");
    return;
  }
};

export const postExpenses = async (newExpense) => {
  try {
    const response = await jsonHost.post("/expenses", newExpense);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("게시 중에 오류가 발생했습니다.");
    return;
  }
};

export const getSingleExpense = async ({ queryKey }) => {
  try {
    const response = await jsonHost.get(`/expenses/${queryKey[1]}`);
    return response.data;
  } catch (error) {
    alert("서버와의 연결에 문제가 발생했습니다.");
    return;
  }
};

export const putExpenses = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await jsonHost.put(`/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("게시 중에 오류가 발생했습니다.");
    return;
  }
};

export const deleteExpenses = async (id) => {
  try {
    const response = await jsonHost.delete(`/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("게시 중에 오류가 발생했습니다.");
    return;
  }
};
