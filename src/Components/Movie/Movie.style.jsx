import styled from "styled-components"

const StyledBox = styled.div `
  // position: absolute;
  background-color: rgb(62, 62, 109);
  margin: 10px;
  width: 200px;
  height: 360px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 800;
`;

const StyledText = styled.div `
    width: 180px;
    height: 50px;

    color: white;
    font-size: 12px;
    font-weight: 700;

    display: flex;
    justify-content: space-around;
    text-align: center;
`;

export {StyledBox, StyledText}