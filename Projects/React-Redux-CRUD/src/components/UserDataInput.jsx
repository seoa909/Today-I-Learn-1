import { useSelector } from "react-redux";
import styled from "styled-components";
import UserDataAdd from "./UserDataAdd";
import UserDataUpdate from "./UserDataUpdate";

const UserDataInput = () => {
  const { isUpdate } = useSelector((state) => state.updateReducer);

  return <StCard>{!isUpdate ? <UserDataAdd /> : <UserDataUpdate />}</StCard>;
};

export default UserDataInput;

const StCard = styled.div`
  width: 35%;
  height: 20vh;
  display: flex;
  margin-top: 1rem;
`;
