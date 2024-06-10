import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses } from "../redux/slices/expensesSlice";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const AccountForm = () => {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.month);

  const dateInit = `2024-${String(month).padStart(2, "0")}-01`;

  const date = useRef(dateInit);
  const money = useRef(null);
  const category = useRef("");
  const job = useRef("");

  useEffect(() => {
    date.current.value = dateInit;
  }, [month]);

  const addItem = (e) => {
    e.preventDefault();

    if (
      !date.current.value.trim() ||
      !dateRegex.test(date.current.value.trim()) ||
      isNaN(Date.parse(String(date.current.value.trim())))
    ) {
      return alert("올바른 날짜 형식이 아닙니다. (예시 : 0000-00-00)");
    }

    if (
      !money.current.value.trim() ||
      !category.current.value.trim() ||
      !job.current.value.trim()
    ) {
      return alert("올바른 입력이 아니거나 입력이 없습니다.");
    }

    const newExpense = {
      id: uuid(),
      date: date.current.value,
      money: money.current.value,
      category: category.current.value,
      job: job.current.value,
    };

    dispatch(addExpenses(newExpense));

    /* form 초기화 */
    date.current.value = dateInit;
    money.current.value = null;
    category.current.value = "";
    job.current.value = "";
  };

  return (
    <form onSubmit={addItem}>
      <StFormInner>
        <StUl>
          <li>
            <StLabel>날짜</StLabel>
            <StInput type="text" ref={date} placeholder="0000-00-00" />
          </li>
          <li>
            <StLabel>금액</StLabel>
            <StInput type="number" ref={money} placeholder="단위: 원화" />
          </li>
          <li>
            <StLabel>카테고리</StLabel>
            <StInput
              type="text"
              ref={category}
              placeholder="카테고리를 입력하세요"
            />
          </li>
          <li>
            <StLabel>내용</StLabel>
            <StInput type="text" ref={job} placeholder="내용을 입력하세요" />
          </li>
        </StUl>
        <StButton>추가</StButton>
      </StFormInner>
    </form>
  );
};

export default AccountForm;

const StFormInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  width: 800px;
  height: 55px;
  margin: 0 auto;
  padding: 30px 20px;
  border-radius: 17px;
  background-color: #fefefe;
`;
const StUl = styled.ul`
  display: flex;
  gap: 20px;
`;
const StButton = styled.button`
  width: 88px;
  height: 37px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #ececec;

  &:hover {
    transition: background-color 0.2s;
    background-color: #c4c4c4;
  }
`;
const StInput = styled.input`
  width: 150px;
  height: 25px;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  padding: 5px;

  &:focus {
    outline: 1px solid #acacac;
  }
`;
const StLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  text-indent: 3px;
  font-size: 13px;
  font-weight: 700;
`;
