import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../lib/auth/api";

const AccountRegister = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [isValid, setIsValid] = useState("none");

  const goHome = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (nickname.trim().length < 1 || nickname.trim().length > 10) {
      setIsValid("nicknameErr");
      return;
    }
    if (id.trim().length < 4 || id.trim().length > 10) {
      setIsValid("idErr");
      return;
    }
    if (password.trim().length < 4 || password.trim().length > 15) {
      setIsValid("pwErr");
      return;
    }
    if (pwConfirm !== password) {
      setIsValid("pwIncorrect");
      return;
    }

    setIsValid("none");

    if (confirm("가입을 완료하시겠습니까?")) {
      const data = await register({ nickname, id, password });
      if (data?.success) {
        alert("가입이 완료되었습니다.");
        navigate("/login");
      }
    }
  };

  return (
    <StLayout>
      <StForm onSubmit={handleRegister}>
        <StH1>회원가입</StH1>
        <StInputOuterWrap>
          <StInputWrap>
            <StLabel>닉네임</StLabel>
            <StInput
              type="text"
              placeholder="1자리 이상, 10자리 이하"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </StInputWrap>
          <StInputWrap>
            <StLabel>아이디</StLabel>
            <StInput
              type="text"
              placeholder="4자리 이상, 10자리 이하"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호</StLabel>
            <StInput
              type="password"
              placeholder="4자리 이상, 15자리 이하"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StInputWrap>
          <StInputWrap>
            <StLabel>비밀번호 확인</StLabel>
            <StInput
              type="password"
              placeholder="비밀번호 확인"
              value={pwConfirm}
              onChange={(e) => setPwConfirm(e.target.value)}
            />
          </StInputWrap>
        </StInputOuterWrap>
        <StValidCheck $isValid={isValid}>
          <span>닉네임은 1 ~ 10 자리여야 합니다.</span>
          <span>아이디는 4 ~ 10 자리여야 합니다.</span>
          <span>비밀번호는 4 ~ 15 자리여야 합니다.</span>
          <span>
            비밀번호 확인란이 비밀번호와 일치하지 않습니다. 다시 입력해주세요
          </span>
        </StValidCheck>
        <StButtonWrap>
          <StButton>가입하기</StButton>
          <StButtonOutline onClick={goHome}>취소</StButtonOutline>
        </StButtonWrap>
      </StForm>
    </StLayout>
  );
};

export default AccountRegister;

const StValidCheck = styled.p`
  display: ${(props) => (props.$isValid === "none" ? "none" : "block")};
  font-size: 0.8em;
  color: red;

  span:nth-child(1) {
    display: ${(props) =>
      props.$isValid === "nicknameErr" ? "block" : "none"};
  }
  span:nth-child(2) {
    display: ${(props) => (props.$isValid === "idErr" ? "block" : "none")};
  }
  span:nth-child(3) {
    display: ${(props) => (props.$isValid === "pwErr" ? "block" : "none")};
  }
  span:nth-child(4) {
    display: ${(props) =>
      props.$isValid === "pwIncorrect" ? "block" : "none"};
  }
`;

const StLayout = styled.div`
  width: 500px;
  padding: 80px 15px;
  margin: 0 auto;
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
    outline: none;
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
