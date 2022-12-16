# todo (가입된 회원의 정보를 찾아서 가져오기)

1. 회원정보 찾기라는 버튼을 만들고 누르면 /find 라는 url로 이동 (client)
2. 페이지로 이동되면, 가져온 회원정보가 화면에 뜬다.

# 폴더정리 (Client)

src파일에 pages를 만들어주고 코드를 옮긴다.

pages/Regi.tsx
```js
import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { __register } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Regi() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.user);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(__register({ name, age, region, email, pw, occupation: job }));
    alert("회원가입 성공!");
  };
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  if (loading) return <div>로딩</div>;
  if (error === false) return <div>에러</div>;
  return (
    <form className="wrap" onSubmit={(e) => onSubmitHandler(e)}>
      <button
        onClick={() => {
          navigate("/find");
        }}
      >
        회원정보 찾으러가기
      </button>
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
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="occupation"
        onChange={(e) => setJob(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPw(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Regi;

```

pages/Find.tsx
```js
import { useNavigate } from "react-router-dom";

const Find = () => {
  const navigate = useNavigate();
  return (
    <div className="wrap">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        회원정보 등록하러가기
      </button>
      <input type="text" placeholder="email" />
      <button>찾기</button>
      <div className="info">
        <p>name: </p>
        <p>age: </p>
        <p>occupation: </p>
        <p>region: </p>
      </div>
    </div>
  );
};

export default Find;

```
App.tsx
```js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Regi from "./pages/Regi";
import Find from "./pages/Find";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Regi />} />
      <Route path="/find" element={<Find />} />
    </Routes>
  );
}

export default App;

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
```

Main.tsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

```


