import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AccountRegister = () => {
  return (
    <StLayout>
      <StForm>
        <StH1>회원가입</StH1>
        <StInputOuterWrap>
          <StInputWrap>
            <StLabel>이름</StLabel>
            <StInput type="text" placeholder="이름" />
          </StInputWrap>
          <StInputWrap>
            <StLabel>아이디</StLabel>
            <StInput type="text" placeholder="아이디" />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호</StLabel>
            <StInput type="text" placeholder="아이디" />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호 확인</StLabel>
            <StInput type="text" placeholder="아이디" />
          </StInputWrap>
        </StInputOuterWrap>
        <StButton>가입하기</StButton>
        <StButtonOutline>취소</StButtonOutline>
      </StForm>
    </StLayout>
  );
};

export default AccountRegister;

const StLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 600px;
  margin: -300px 0 0 -250px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px #00000022;
  background-color: #fefefe;
`;

const StH1 = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
  margin-bottom: 10px;
`;

const StForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const StInputOuterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const StInputWrap = styled.div`
  width: 100%;
`;

const StInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  text-indent: 5px;
  padding: 3px 0;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
`;

const StButton = styled.button`
  box-sizing: content-box;
  width: 60%;
  height: 2rem;
  padding: 3px 6px;
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: #9fc497;

  &:hover {
    background-color: #669e5a;
    transition: background-color 0.2s;
  }
`;

const StButtonOutline = styled.button`
  box-sizing: content-box;
  width: 60%;
  height: 2rem;
  padding: 2px 5px;
  border: 1px solid #9fc497;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: #fefefe;

  &:hover {
    background-color: #e0e0e0;
    transition: background-color 0.2s;
  }
`;

const StLabel = styled.label`
  font-size: 1em;
  align-self: baseline;
`;
