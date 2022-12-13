import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import UserDataInput from "../components/UserDataInput";
import UserDataShow from "../components/UserDataShow";
import { __getUser } from "../redux/modules/user";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);

  return (
    <StWrap>
      <UserDataInput />
      <StLine />
      <UserDataShow />
    </StWrap>
  );
};

export default Home;

const StWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
`;

const StLine = styled.div`
  width: 35%;
  height: 1px;
  margin-top: 2rem;
  border: 1px solid #d5d5d5;
`;
