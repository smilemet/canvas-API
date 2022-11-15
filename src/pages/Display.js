import React from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";

const Display = () => {
  return (
    <DisplayContainer>
      <Canvas />
    </DisplayContainer>
  );
};

const DisplayContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default Display;
