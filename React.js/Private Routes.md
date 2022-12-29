# Private Routes

- 토큰이 있나 없나 체크해서, 토큰이 있으면 로그인한 경우니까 로그인 페이지 못돌아감 -> 접근 시도시 main page로 이동
- 반대로 토큰이 없으면, 로그인에 실패 혹은 로그아웃 한 경우니까, 로그인 페이지로 바로 이동
- src/components/Auth.tsx

```js
import { cookie } from "@/core/utils/cookie";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = cookie.get("Authorization");
  return token;
};

export const AuthIsPassed = () => {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth !== undefined ? (
    <Navigate to="/Dashboard" replace />
  ) : (
    <Outlet />
  );
};

export const AuthServices = () => {
  const isAuth = useAuth();
  return isAuth !== null ? <Outlet /> : <Navigate to="/" replace />;
};
```

- 끝나면 Routing을 위의 함수들로 감싸줘야함
```js
...

const Routing = () => {
  return (
    <Routes>
      <Route element={<AuthIsPassed />}>
        <Route path="/" element={<Auth />} />
      </Route>
      <Route element={<AuthServices />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
...
export default Routing;

```
