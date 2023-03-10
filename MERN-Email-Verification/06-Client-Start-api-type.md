# 클라이언트 시작

# api는 그냥 axios 풀어쓰는식으로

- main.tsx
- 리액트 쿼리 사용한다고 알리기
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

```

- src/core/api/api.ts
- axios 세팅
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (data) => {
    // data.headers!.Authorization = cookie.get("Authorization");
    return data;
  },
  () => {}
);

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
```

- src/core/api/apis.ts
- axios 세팅 된걸로 api 연결준비
```js
import { GetVerifyType, PostEmailType } from "../type/Email";
import api from "./api";

export const apis = {
  // email
  postEmail: (payload: PostEmailType) => api.post(`/email`, payload),
  getVerify: (payload: GetVerifyType) =>
    api.get(`/verify/${payload.id}/${payload.token}`),
};

export default apis;
```

- src/core/type/Email.ts
```js
export interface PostEmailType {
  email: string;
  name: string;
}

export interface GetVerifyType {
  id: string;
  token: string;
}

```
