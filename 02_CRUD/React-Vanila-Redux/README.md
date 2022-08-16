# REACT & VANILA REDUX CRUD

# Server
- json-server -w db.json -p 3500

# Preview
![ezgif com-gif-maker](https://user-images.githubusercontent.com/59503331/184952093-1753f05b-f0a4-4dae-bdc3-11e5b609f532.gif)

# Quick Find Redux

```js
import axios from "axios";

// 액션타입 - 리듀서가 뭐할지 정하는애
const GET_USER = "user/GET_USER";
const GET_USER_SELECTED = "user/GET_USER_SELECTED";
const ADD_USER = "user/ADD_USER";
const UPDATE_USER = "user/UPDATE_USER";
const DELETE_USER = "user/DELETE_USER";

// 액션함수 - 리듀서에 뭐할지 알려주는애
const getUser = (payload) => ({ type: GET_USER, payload });
const getSelectedUser = (payload) => ({ type: GET_USER_SELECTED, payload });
const addUser = (payload) => ({ type: ADD_USER, payload });
const updateUser = (payload) => ({ type: UPDATE_USER, payload });
const deleteUser = (payload) => ({ type: DELETE_USER, payload });

// 쳥크함수 - 서버랑 노는애
export const __getUser = () => async (dispatch) => {
  const data = await axios.get("http://localhost:3500/user");
  dispatch(getUser(data.data));
};

export const __getSelectedUser = (payload) => async (dispatch) => {
  const data = await axios.get(`http://localhost:3500/user/${payload.id}`);
  dispatch(getSelectedUser(data.data));
};

export const __addUser = (payload) => async (dispatch) => {
  const data = await axios.post("http://localhost:3500/user", payload);
  dispatch(addUser(data.data));
};

export const __deleteUser = (payload) => async (dispatch, getState) => {
  const userID = getState().userReducer.users.findIndex((v) => {
    return v.id === payload.id;
  });
  // 서버에 있는걸 지운거 (db.json)
  await axios.delete(`http://localhost:3500/user/${payload.id}`, payload.id);
  // //화면에 있는걸 지운다
  dispatch(deleteUser(userID));
};

export const __updateUser = (payload) => async (dispatch, getState) => {
  console.log(payload);
  const userID = getState().userReducer.users.findIndex((v) => {
    return v.id === payload.id;
  });
  // 서버에 있는걸 수정한다 (db.json)
  await axios.put(`http://localhost:3500/user/${payload.id}`, payload);
  // //화면에 있는걸 수정한다
  dispatch(updateUser({ userID, data: payload }));
};

// initial state - 통 - store
const initialState = {
  users: [],
  selectedUser: {},
};

// reducer - 통에 접근해서 바꿔주는애
export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case GET_USER:
      return { ...state, users: [...payload] };
    case GET_USER_SELECTED:
      return { ...state, selectedUser: payload };
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case UPDATE_USER:
      const newUpdateState = state.users.map((v, i) => {
        return i === payload.userID
          ? {
              id: payload.data.id,
              name: payload.data.name,
              gender: payload.data.gender,
              nickname: payload.data.nickname,
              number: payload.data.number,
            }
          : v;
      });
      return { ...state, users: [...newUpdateState] };
    case DELETE_USER:
      const newDeleteState = state.users.filter((_, i) => {
        return i === payload ? false : true;
      });
      return { ...state, users: [...newDeleteState] };
    default:
      return state;
  }
}

```
