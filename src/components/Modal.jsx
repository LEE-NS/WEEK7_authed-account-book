import React from "react";
import styled from "styled-components";

const Modal = () => {
  return (
    <Background>
      <ModalBox>
        <StP>요청을 처리중입니다...</StP>
        <LoadBar>loadingBar</LoadBar>
      </ModalBox>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000028;
`;
const ModalBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fefefe;
`;
const StP = styled.p`
  font-size: 1em;
`;

const LoadBar = styled.div`
  width: 200px;
  height: 5px;
`;
