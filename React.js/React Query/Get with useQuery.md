# get 할 custom hook 을 제작한다.
- 아래 보이는 "user"가 쿼리키 이다. 이걸 바탕으로 캐시데이터를 가져온다 (중요)
- fetcher() 요 함수는 쿼리함수이다. 그냥 api를 통해 데이터를 가져와서 가져온 값을 return 해준다.
- 실은 return 값은 data보단 쿼리키와 같게 두는게 좋아보인다. (한 페이지에서 여러가지 값을 가져올때, 모두가 data면 중복이라 에러)

```js
import apis from "@/core/api/main";
import { Data } from "@/core/utils/Types";
import { useQuery } from "react-query";

const useGetUser = () => {
  const fetcher = async () => {
    const { data } = await apis.getCurrentUser();
    return data;
  };

  return useQuery("user", fetcher);
};

export default useGetUser;

```

- apis는 따로 빼서 관리중이다. 아래의 api는 그냥 평범한 axios.crate()등이 들어있다.
```js 
export const apis = {
  // user
  postLogin: (payload: Login) => api.post("/users/login", payload),
  getUser: (payload: GetUserInfo) => api.get(`/users/get/${payload.email}`),
  getCurrentUser: () => api.get(`/users/getCurrentUser`),
  getLogout: () => api.get(`/users/logout`),
};
```

# 사용할때
- 아래처럼 불러와서 사용한다.
- 서버에서 내려준 response가 data에 들어있고, 그 외에 사용할수 있는것도 많다. 자세한건 아래 링크 참고 
- https://tanstack.com/query/v4/docs/react/reference/useQuery?from=reactQueryV3&original=https%3A%2F%2Freact-query-v3.tanstack.com%2Freference%2FuseQuery
```js
const { data } = useGetUser();
```
