import { useDispatch } from "react-redux";
import { toggleUpdate } from "../redux/modules/update";
import { __getSelectedUser } from "../redux/modules/user";

const UserDataUpdateToggle = ({ id }) => {
  const dispatch = useDispatch();
  const onUpdateHandler = () => {
    dispatch(toggleUpdate(true));
    dispatch(__getSelectedUser({ id }));
  };
  return (
    <>
      <button onClick={onUpdateHandler}>수정</button>
    </>
  );
};

export default UserDataUpdateToggle;
