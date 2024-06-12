import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
});

export const jsonUrl = axios.create({
  baseURL: "http://localhost:4000/",
});
