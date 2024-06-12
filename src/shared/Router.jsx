import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyPage from "../pages/MyPage";
import Test from "../pages/Test";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthed } = useContext(AuthContext);
  return !isAuthed ? <Element {...rest} /> : <Navigate to="login" />;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthed } = useContext(AuthContext);
  return isAuthed ? <Element {...rest} /> : <Navigate to="login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="detail/:id" element={<PrivateRoute element={Detail} />} />
        <Route path="login" element={<PublicRoute element={Login} />} />
        <Route path="register" element={<PublicRoute element={Register} />} />
        <Route path="mypage" element={<PrivateRoute element={MyPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
