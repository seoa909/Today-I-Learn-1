import { useSelector } from "react-redux";
import styled from "styled-components";
import UserDataDelete from "./UserDataDelete";
import UserDataUpdateToggle from "./UserDataUpdateToggle";

const UserDataShow = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <StDetails>
      {users?.map((v) => {
        return (
          <StDetail key={v.id}>
            <StFunc>
              <UserDataUpdateToggle id={v.id} />
              <UserDataDelete id={v.id} />
            </StFunc>
            <span>이름: {v.name}</span>
            <span>성별: {v.gender}</span>
            <span>별명: {v.nickname}</span>
            <span>번호: {v.number}</span>
          </StDetail>
        );
      })}
    </StDetails>
  );
};

export default UserDataShow;

const StDetails = styled.div`
  width: 35%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 2rem;
`;

const StDetail = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
`;

const StFunc = styled.div`
  right: 10%;
  button:first-of-type {
    margin-right: 10px;
  }
`;
