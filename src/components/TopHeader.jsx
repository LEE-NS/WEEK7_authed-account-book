import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logout } from "../lib/auth/api";
import { useEffect } from "react";
import { setUser } from "../redux/slices/userSlice";

const TopHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getUserData().then((res) => {
      if (res) {
        dispatch(
          setUser({
            userId: res.id,
            nickname: res.nickname,
            avatar: res.avatar,
          })
        );
      } else {
        localStorage.clear();
        dispatch(setUser(null));
        navigate("/login");
      }
    });
  }, []);

  const goHome = () => {
    user ? navigate("../") : navigate("/login");
  };
  const goMyPage = () => {
    user ? navigate("/mypage") : navigate("/login");
  };
  const logoutHandle = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      logout();
      dispatch(setUser(null));
      navigate("/login");
    }
  };

  return (
    <>
      {user && (
        <Wrap>
          <IconButton onClick={goHome}>
            <HomeIcon />
          </IconButton>
          <UserStateOuter>
            <UserStateWrap onClick={goMyPage}>
              <IconWrap>
                {user.avatar ? (
                  <StImg src={user.avatar} alt="유저 프로필" />
                ) : (
                  <AccountCircleIcon
                    sx={{
                      verticalAlign: "middle",
                      fontSize: "30px",
                      color: "#b9b9b9",
                    }}
                  />
                )}
              </IconWrap>
              <p>
                <span>{user.nickname}</span> 님 환영합니다.
              </p>
            </UserStateWrap>
            <UserStateWrap onClick={logoutHandle}>
              <p>Logout</p>
            </UserStateWrap>
          </UserStateOuter>
        </Wrap>
      )}
      <Outlet />
    </>
  );
};

export default TopHeader;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StImg = styled.img`
  height: 30px;
  object-fit: cover;
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
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 9999px;
  background-color: #464646;
`;

const UserStateOuter = styled.div`
  display: flex;
  gap: 10px;
`;
