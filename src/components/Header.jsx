import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthed, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const goHome = () => {
    isAuthed ? navigate("../") : navigate("login");
  };
  const goMyPage = () => {
    isAuthed ? navigate("mypage") : navigate("login");
  };
  const logoutHandle = () => {
    //현재 isAuthed 상태에 따라 true면 logout
    if (confirm("로그아웃 하시겠습니까?")) {
      logout();
      navigate("login");
    }
  };

  return (
    <Wrap>
      {isAuthed && (
        <>
          <IconButton onClick={goHome}>
            <HomeIcon />
          </IconButton>
          <UserStateOuter>
            <UserStateWrap onClick={goMyPage}>
              <IconWrap>
                <AccountCircleIcon
                  sx={{ verticalAlign: "middle", color: "#b9b9b9" }}
                />
              </IconWrap>
              <p>
                <span>someone</span> 님 환영합니다.
              </p>
            </UserStateWrap>
            <UserStateWrap onClick={logoutHandle}>
              <p>로그아웃</p>
            </UserStateWrap>
          </UserStateOuter>
        </>
      )}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const UserStateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0px 1px 10px 1px #00000022;
  transition: background-color 0.2s;

  background-color: #fefefe;

  &:hover {
    background-color: #e0e0e0;
    transition: background-color 0.2s;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0px 1px 10px 1px #00000022;
  background-color: #fefefe;

  &:hover {
    background-color: #e0e0e0;
    transition: background-color 0.2s;
  }
`;

const IconWrap = styled.div`
  border-radius: 9999px;
  background-color: #464646;
`;

const UserStateOuter = styled.div`
  display: flex;
  gap: 10px;
`;
