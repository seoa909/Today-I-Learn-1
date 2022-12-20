# Delete

# 서버 
index.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/dev') // 방금만든 폴더 가져오기

const { UserRegi } = require('./models/register'); 

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/regi', (req, res) => {
    const userRegi = new UserRegi(req.body); 
  
    userRegi.save((err, userInfo) => {
      if (err) return res.json({ success: false, err }); 
      return res.status(200).json({
        success: true,
        userInfo
      });
    });
});

app.get('/find/:user_email', (req, res) => {
  UserRegi.findOne({email: req.params.user_email}, function(err, userInfo){
  if(err) return res.status(500).json({error: err});
  if(!userInfo) return res.status(404).json({error: 'user not found'});
  res.json(userInfo);
})
});

app.delete('/delete/:user_email', (req, res) => {
  UserRegi.deleteOne({email: req.params.user_email}, function(err, userInfo){
  if(err) return res.status(500).json({error: err});
  if(!userInfo) return res.status(404).json({error: 'user not found'});
  res.json(userInfo);
})
});

const mongoose = require('mongoose');
mongoose
  .connect(
    config.mongoURI 
    ,{
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log("MongoDB Error: " + err);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to first node zzz." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

# 클라

userSlice.ts
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

export const __deleteUser = createAsyncThunk(
  "users/delete",
  async (payload: Register) => {
    try {
      const result = await axios({
        method: "DELETE",
        url: `http://localhost:8080/delete/${payload.email}`,
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
      email: "",
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
      state.error = action.payload.success;
      state.info = action.payload;
    },
    [__deleteUser.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.success;
      state.info = action.payload;
    },
  },
});

export default userSlice.reducer;

```

귀찮아서 Find.tsx에 같이 넣었다.
Find.tsx
```js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../redux/store";
import { __deleteUser, __findUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const Find = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { info, error } = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>("");

  return (
    <div className="wrap">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        회원정보 등록하러가기
      </button>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(__findUser({ email }));
        }}
      >
        정보 찾기
      </button>
      <button
        onClick={() => {
          dispatch(__deleteUser({ email }));
        }}
      >
        정보 삭제
      </button>
      <div className="info">
        {info.email === undefined ? (
          <>데이터가 없다</>
        ) : (
          <>
            <p>name:{`${info.name}`} </p>
            <p>age: {`${info.age}`}</p>
            <p>occupation: {`${info.occupation}`}</p>
            <p>region: {`${info.region}`}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Find;
```

