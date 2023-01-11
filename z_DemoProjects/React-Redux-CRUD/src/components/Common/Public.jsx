import styled from "styled-components";

export const StInputContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  input {
    width: 80%;
    height: 20%;
    text-align: center;
    margin-left: 50px;
    outline: none;
  }
`;
export const StButtonContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 80%;
    height: 80%;
  }
`;

export const StFlexRow = styled.div`
  display: flex;
  input {
    margin: 0;
    height: 100%;
  }
  span {
    width: 100px;
  }
`;
