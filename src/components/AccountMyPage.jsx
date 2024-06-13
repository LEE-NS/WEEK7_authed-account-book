import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData, updateUserData } from "../lib/auth/api";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const AccountMyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userNickname, setUserNickname] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const goHome = (e) => {
    e.preventDefault();
    navigate("../");
  };

  const getUserDataAtFirst = async () => {
    const { nickname, avatar } = await getUserData();
    setUserNickname(nickname);
    setUserAvatar(avatar);
    setPreviewUrl(avatar);
  };

  useEffect(() => {
    getUserDataAtFirst();
  }, []);

  const handleImageChange = (e) => {
    const fileObj = e.target.files[0];
    setUserAvatar(fileObj);
    const objectUrl = URL.createObjectURL(fileObj);
    setPreviewUrl(objectUrl);
  };

  const handleUserInfo = async (e, userNickname, userAvatar) => {
    e.preventDefault();

    if (!confirm("정보 수정을 완료하시겠습니까?")) return;

    if (userNickname.trim().length < 1 || userNickname.trim().length > 10) {
      alert("닉네임은 1 ~ 10 자리여야 합니다.");
      return;
    }

    const data = await updateUserData({
      userNickname,
      userAvatar,
    });

    if (data?.message) {
      alert(data?.message);
    }

    dispatch(setUser({ nickname: userNickname, avatar: userAvatar }));

    navigate(0);
  };

  return (
    <StLayout>
      <StForm>
        <StH1>내 정보</StH1>
        <StInputOuterWrap>
          <StInputWrap>
            <StLabel>이름</StLabel>
            <StInput
              type="text"
              placeholder="이름"
              value={userNickname}
              onChange={(e) => {
                setUserNickname(e.target.value);
              }}
            />
          </StInputWrap>
          <StInputWrap>
            <StLabel>프로필 사진</StLabel>
            <ImgAreaWrap>
              <PreviewImg>
                {previewUrl ? (
                  <StImg src={previewUrl} alt="미리보기 이미지" width="100%" />
                ) : (
                  <AccountCircleIcon
                    sx={{
                      fontSize: "140px",
                      color: "#9fc497",
                    }}
                  />
                )}
              </PreviewImg>
              <InputButtonWrap>
                이미지 업로드
                <ImgInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </InputButtonWrap>
            </ImgAreaWrap>
          </StInputWrap>
        </StInputOuterWrap>
        <StButtonWrap>
          <StButton
            type="submit"
            onClick={(e) => handleUserInfo(e, userNickname, userAvatar)}
          >
            수정완료
          </StButton>
          <StButtonOutline onClick={goHome}>취소</StButtonOutline>
        </StButtonWrap>
      </StForm>
    </StLayout>
  );
};

export default AccountMyPage;

const StImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const InputButtonWrap = styled.label`
  width: 48%;
  height: 40px;
  padding: 3px 6px;
  border: 1px solid #9fc497;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
  line-height: 34px;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: #fefefe;

  &:hover {
    background-color: #e0e0e0;
    transition: background-color 0.2s;
  }
`;
const ImgInput = styled.input`
  display: none;
`;

const ImgAreaWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const PreviewImg = styled.div`
  width: 48%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 9999px;
  border: 1px solid #a8a8a8;
`;

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
