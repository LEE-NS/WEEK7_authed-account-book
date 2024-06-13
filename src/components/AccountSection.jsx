import React from "react";
import styled from "styled-components";
import AccountItem from "./AccountItem";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/expenses/expenses";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const AccountSection = () => {
  // const expenses = useSelector((state) => state.expenses);
  const month = useSelector((state) => state.month);

  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  if (isLoading) {
    return <Loading />;
  }

  //선택된 달과 일치하는 item만 filter로 가져온다.
  const filteredMonthItems = expenses.filter(
    (item) => item.date.split("-")[1] === String(month).padStart(2, "0")
  );

  return (
    <StWrap>
      <StUl>
        {filteredMonthItems.length ? (
          filteredMonthItems.map((item) => (
            <AccountItem key={item.id} item={item} />
          ))
        ) : (
          <StNoItemLi>지출 내역이 없습니다.</StNoItemLi>
        )}
      </StUl>
    </StWrap>
  );
};

export default AccountSection;

const StWrap = styled.div`
  width: 800px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px #00000022;
  background-color: #fefefe;
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StNoItemLi = styled.li`
  padding: 50px 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #ececec;
  color: #8f8f8f;
`;
