import React from "react";
import styled from "styled-components";
import AccountMonthItem from "./AccountMonthItem";

const AccountMonth = () => {
  return (
    <StMonthWrap>
      <StUl>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((monthNum) => (
          <AccountMonthItem key={monthNum} monthNum={monthNum} />
        ))}
      </StUl>
    </StMonthWrap>
  );
};

export default AccountMonth;

const StMonthWrap = styled.div`
  width: 800px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 17px;
  background-color: #fefefe;
`;
const StUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
