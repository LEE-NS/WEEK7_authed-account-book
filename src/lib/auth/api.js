import axios from "axios";

const authHost = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const register = async ({ nickname, id, password }) => {
  try {
    const response = await authHost.post("/register", {
      nickname,
      id,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
    return error;
  }
};
// 회원가입

export const login = async ({ id, password }) => {
  try {
    const response = await authHost.post("/login?expiresIn=100m", {
      id,
      password,
    });
    localStorage.setItem("accessToken", response?.data?.accessToken);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
    return error;
  }
};
// 로그인

export const logout = () => {
  localStorage.clear();
};
// 로그아웃

export const getUserData = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return;
  }

  try {
    const response = await authHost.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
    return error;
  }
};
// 회원정보

export const updateUserData = async ({ userNickname, userAvatar }) => {
  try {
    const response = await authHost.patch(
      "/profile",
      {
        nickname: userNickname,
        avatar: userAvatar,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
    return error;
  }
};
// 회원정보 업데이트
