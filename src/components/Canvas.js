import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div``;

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  }, []);

  return (
    <CanvasContainer>
      <p>canvas를 만들자!</p>
      <canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default Canvas;
