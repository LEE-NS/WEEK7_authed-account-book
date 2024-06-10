import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTotalMonth } from "../redux/slices/monthSlice";

const AccountMonthItem = ({ monthNum }) => {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.month);

  return (
    <li>
      <StButton
        $isClicked={monthNum === +month}
        onClick={() => {
          dispatch(setTotalMonth(monthNum));
        }}
      >
        {monthNum}월
      </StButton>
    </li>
  );
};

export default AccountMonthItem;

const StButton = styled.button`
  width: 125px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: ${(props) => (props.$isClicked ? "#c4c4c4" : "#ececec")};

  &:hover {
    transition: background-color 0.2s;
    background-color: #c4c4c4;
  }
`;
