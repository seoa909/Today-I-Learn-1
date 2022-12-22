# 간단한 로그인을 하면, 로그인 정보를 서버로 보내고, 통과되면 이제 토큰을 쿠키에 저장하는 코드다.

- 리덕스랑 다르게 로그인이 됬나 감지를해서 그걸 store에 넣은다음, useSelector로 가져와서 만약.... 이럴 필요 없이
- 그냥 서버에서 isLogin 하나 true로 내려줘서 그게 true면 페이지이동 이런게 된다.

```js
import apis from "@/core/api/main";
import { Login } from "@/core/utils/Types";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { cookie } from "@/core/utils/cookie";

const __login = async (payload: Login) => {
  const login = await apis.postLogin(payload);
  return login;
};

const usePostLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(__login, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
      cookie.set("Authorization", data.data.token, {
        path: "/",
        // expires: Math.floor(Date.now() / 1000) + 60 * 60,
      });

      if (data.data.isLogin) return navigate("/Dashboard");
    },
  });
};

export default usePostLogin;

```
