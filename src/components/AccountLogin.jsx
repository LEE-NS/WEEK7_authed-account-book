import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { apiUrl } from "../axios/api";

const AccountLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const goRegister = () => {
    navigate("register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiUrl.post("login", {
        id,
        password,
      });
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("../");
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Login Error :", error);
      alert(
        "아이디 또는 비밀번호를 잘못 입력하셨거나 해당 계정이 존재하지 않습니다."
      );
      console.log(password, id);
    }
  };

  return (
    <StLayout>
      <StForm onSubmit={handleSubmit}>
        <StH1>로그인</StH1>
        <StInputWrap>
          <PersonIcon sx={{ fontSize: "1rem" }} />
          <StInput
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </StInputWrap>
        <StInputWrap>
          <VpnKeyIcon sx={{ fontSize: "1rem" }} />
          <StInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StInputWrap>
        <StButton>로그인</StButton>
        <StP>
          아직 계정이 없으신가요? <StSpan onClick={goRegister}>회원가입</StSpan>
        </StP>
      </StForm>
    </StLayout>
  );
};

export default AccountLogin;

const StLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin: -200px 0 0 -200px;
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

const StInputWrap = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
  border: 1px solid #a8a8a8;
  transition: border 0.2s;
  border-radius: 10px;
`;

const StInput = styled.input`
  height: 2rem;
  font-size: 1rem;
  padding: 3px 0;
  border: 0;
  outline: none;
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

  background-color: #99bc85;

  &:hover {
    background-color: #bfd8af;
    transition: background-color 0.2s;
  }
`;

const StP = styled.p`
  font-size: 0.8rem;
`;

const StSpan = styled.span`
  text-decoration: underline;
  color: #1045d8;
  cursor: pointer;
`;
