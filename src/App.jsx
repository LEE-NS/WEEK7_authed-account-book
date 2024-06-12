import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Wrap>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;
