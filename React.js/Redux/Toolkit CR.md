# CR 예제 로컬로 axios사용

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Register {
  email: string;
  name?: string;
  age?: string;
  region?: string;
  pw?: string;
  occupation?: string;
}

export const __register = createAsyncThunk(
  "users/register",
  async (payload: Register) => {
    try {
      const result = await axios({
        method: "POST",
        url: `http://localhost:8080/regi`,
        headers: {},
        data: payload,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
);

export const __findUser = createAsyncThunk(
  "users/find",
  async (payload: Register) => {
    try {
      const result = await axios({
        method: "GET",
        url: `http://localhost:8080/find/${payload.email}`,
        headers: {},
        data: payload,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      name: "",
      age: "",
      region: "",
      occupation: "",
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__register.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__register.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.success;
    },
    [__findUser.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.info = action.payload;
    },
  },
});

export default userSlice.reducer;

```
