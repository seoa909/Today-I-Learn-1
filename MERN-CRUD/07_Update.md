# Updage

# 클라이언트

일단 Find.tsx 이름을 User.tsx로 변경해야겠다. (여기서 RUD를 다 할 예정)

경로도 잘 바꿔준다.

update 버튼을 누르면 간단한 input창이 하나 생성되고, 거기서 update를 하면 몽고db에 업데이트가 되는걸 만들어 볼려고한다.

구상은 useState로 flag를 하나 만들어서 true면 창이 생기고, false면 창이 꺼지고 토글을 하려고 한다.

# 클라 View 작업.. 대충했다.
User.tsx
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
  const [flag, setFlag] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [emailU, setEmailU] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [pw, setPw] = useState<string>("");

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
      <button
        onClick={(v) => {
          setFlag((v) => !v);
        }}
      >
        정보 업데이트
      </button>

      {flag ? (
        <div className="center">
          <input type="email" value={email} />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="txt"
            placeholder="region"
            onChange={(e) => setRegion(e.target.value)}
          />
          <input
            type="text"
            placeholder="occupation"
            onChange={(e) => setJob(e.target.value)}
          />
          <button
            onClick={(v) => {
              setFlag((v) => !v);
            }}
          >
            정보 업데이트 하기
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Find;

```

App.css
```js
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrap{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(46, 45, 44);
}

input {
  width: 500px;
  height: 50px;
  margin: 10px;
  font-size: 2rem;
}

button{
  margin-bottom: 10px;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 400px;
  height: 300px;
  background-color: rgb(87, 87, 87);
  font-size: 2rem;
  padding: 1rem;
  color: #fff;
}

.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

# 서버에 업데이트 api 생성

api 주소도 그냥 다 /user로 통일해 줍니다. 어차피 RestFul 하게 할거니까..

index.js (노드몬 체크 꼭 먼저 하자)
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

app.post('/user', (req, res) => {
    const userRegi = new UserRegi(req.body); 
  
    userRegi.save((err, userInfo) => {
      if (err) return res.json({ success: false, err }); 
      return res.status(200).json({
        success: true,
        userInfo
      });
    });
});

app.get('/user/:user_email', (req, res) => {
  UserRegi.findOne({email: req.params.user_email}, function(err, userInfo){
  if(err) return res.status(500).json({error: err});
  if(!userInfo) return res.status(404).json({error: 'user not found'});
  res.json(userInfo);
})
});

app.delete('/user/:user_email', (req, res) => {
  UserRegi.deleteOne({email: req.params.user_email}, function(err, userInfo){
  if(err) return res.status(500).json({error: err});
  if(!userInfo) return res.status(404).json({error: 'user not found'});
  res.json(userInfo);
})
});

app.put('/user/:user_email', (req, res) => {
  UserRegi.findOne({email: req.params.user_email}, function(err, userInfo){
  if(err) return res.status(500).json({error: err});
  if(!userInfo) return res.status(404).json({error: 'user not found'});
  if(req.body.name) userInfo.name = req.body.name;
  if(req.body.age) userInfo.age = req.body.age;
  if(req.body.region) userInfo.region = req.body.region;
  if(req.body.occupation) userInfo.occupation = req.body.occupation;

  userInfo.save(function(err){
    if(err) res.status(500).json({error: 'failed to update'});
    res.json({message: 'updated'});
});
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
# 클라 리덕스
일단 api 주소를 다 user/ 이렇게 바꿔주자, 타입은 귀찮아서 한개만 정의하고.. undefined 이용해서 사용하는데, 나중엔 다 따로 해주자.

userSlice.ts
```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Register {
  email?: string;
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
        url: `http://localhost:8080/user`,
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
        url: `http://localhost:8080/user/${payload.email}`,
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
        url: `http://localhost:8080/user/${payload.email}`,
        headers: {},
        data: payload,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  }
);

export const __updateUser = createAsyncThunk(
  "users/update",
  async (payload: Register) => {
    console.log(payload);
    try {
      const result = await axios({
        method: "PUT",
        url: `http://localhost:8080/user/${payload.email}`,
        headers: {},
        data: payload,
      });
      console.log(result);
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
    [__findUser.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__deleteUser.pending.type]: (state, action) => {
      state.loading = true;
    },
    [__updateUser.pending.type]: (state, action) => {
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
    [__updateUser.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.success;
      state.info = action.payload;
    },
  },
});

export default userSlice.reducer;

```

User.tsx
```js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../redux/store";
import { __deleteUser, __findUser, __updateUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const Find = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { info, error } = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [emailU, setEmailU] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const UpdateHandler = (
    v: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(__updateUser({ email, name, age, region, occupation: job }));
    setFlag((v) => !v);
  };

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
      <button
        onClick={(v) => {
          setFlag((v) => !v);
        }}
      >
        정보 업데이트
      </button>

      {flag ? (
        <div className="center">
          <input type="email" defaultValue={email} />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="txt"
            placeholder="region"
            onChange={(e) => setRegion(e.target.value)}
          />
          <input
            type="text"
            placeholder="occupation"
            onChange={(e) => setJob(e.target.value)}
          />
          <button onClick={(v) => UpdateHandler(v)}>정보 업데이트 하기</button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Find;
```

# 예외처리 이런건 일단 빼 놨다. 기본 MERN의 CRUD가 목표였어서.


