import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyPage from "../pages/MyPage";
import TopHeader from "../components/TopHeader";

const PublicRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("accessToken");
  return !token ? <Element {...rest} /> : <Navigate to="/login" />;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("accessToken");
  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}>
          <Route index element={<PrivateRoute element={Home} />} />
          <Route
            path="/detail/:id"
            element={<PrivateRoute element={Detail} />}
          />
          <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
        </Route>
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
