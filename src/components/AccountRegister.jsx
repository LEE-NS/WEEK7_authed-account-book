import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const AccountRegister = () => {
  const navigate = useNavigate();

  const userName = useRef("");
  const userId = useRef("");
  const userPw = useRef("");
  const userPwConfirm = useRef("");

  const goHome = () => {
    navigate("/login");
  };

  // 입력된 사용자의 정보를 서버에 추가시킨다(POST)
  // 아이디는 중복될 수 없게 한다.(GET, 회원 정보 확인)

  // const fetchRegister = async () => {

  // }

  // const addRegister = async (userName, userId, userPw) => {

  // }

  // const {data, isPending, isError} = useQuery({
  //   queryKey: ["register"],
  //   queryFn: fetchRegister,
  // })

  // const mutation = useMutation({
  //   mutationFn: addRegister,
  // });

  return (
    <StLayout>
      <StForm>
        <StH1>회원가입</StH1>
        <StInputOuterWrap>
          <StInputWrap>
            <StLabel>이름</StLabel>
            <StInput type="text" placeholder="이름" ref={userName} />
          </StInputWrap>
          <StInputWrap>
            <StLabel>아이디</StLabel>
            <StInput type="text" placeholder="아이디" ref={userId} />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호</StLabel>
            <StInput
              type="text"
              placeholder="영문, 숫자 혼합 6자리 이상"
              ref={userPw}
            />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호 확인</StLabel>
            <StInput
              type="text"
              placeholder="비밀번호 확인"
              ref={userPwConfirm}
            />
          </StInputWrap>
        </StInputOuterWrap>
        <StButtonWrap>
          <StButton>가입하기</StButton>
          <StButtonOutline onClick={goHome}>취소</StButtonOutline>
        </StButtonWrap>
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
`;

const StForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin: 0 auto;
`;

const StInputOuterWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  text-indent: 5px;
  padding: 3px 6px;

  border: 1px solid #a8a8a8;
  border-radius: 10px;
  background-color: transparent;

  &:focus {
    outline: 1px solid #acacac;
  }
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
  font-size: 0.9em;
  align-self: baseline;
`;

const StButtonWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
