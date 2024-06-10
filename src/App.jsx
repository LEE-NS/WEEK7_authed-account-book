import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";

const App = () => {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;
