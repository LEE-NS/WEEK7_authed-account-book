import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Wrap>
      <StLoadingBox>
        <p>데이터를 불러오는 중...</p>
        <p>로딩막대</p>
      </StLoadingBox>
    </Wrap>
  );
};

export default Loading;

const bgColor = keyframes`
  0% {
    background-color: #9fc497
  }
  100% {
    background-color: #669e5a;
  }
`;

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StLoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 70px;
  margin: -35px 0 0 -100px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px #00000022;
  background-color: #fefefe;

  p:nth-child(1) {
    font-weight: 900;
  }
  p:nth-child(2) {
    width: 70%;
    height: 3px;
    text-indent: -99999px;
    transition: background-color 0.3s;
    animation: ${bgColor} 1s 0s infinite ease-in-out alternate;
  }
`;
