# 리액트 쿼리

# apis에서 에러가 날텐데, 아직 파일이 없어서 그럼
- 쿼리키는 둘이 다른게, 하나는 verify 하는거고, 다른 하나는 email 보내주는 거라 그럼.
- 리액트 쿼리는 전부 다 훅으로 만들어 쓰자..

- src/hooks/email/useGetVerify.md
- fetcher는 저번에도 말한거 같지만 어디서, data로 받는게 정답이 아닐수 있다. 때에따라 다르게 받아야지 다른 fetcher들과 같이 사용할때 안겹친다.
- 근데 data로 받아야지 코드가 3글자 줄어든다.
```js
import apis from "@/core/api/apis";
import { GetVerifyType } from "@/core/type/Email";
import { useQuery } from "react-query";

const useGetVerify = (payload: GetVerifyType) => {
  const fetcher = async () => {
    const { data } = await apis.getVerify(payload);
    return data;
  };

  return useQuery("verify", fetcher);
};

export default useGetVerify;

```

- src/hooks/email/usePostEmail.md
- login이라 되있지만, 어디서 긁어와서 그럼..
- 항상 onSuccess에서 ```console.log(data)``` 이렇게 데이터 확인하고 아래 코딩 하는 습관이 좋을지도.
```js
import apis from "@/core/api/apis";
import { PostEmailType } from "@/core/type/Email";
import { useMutation, useQueryClient } from "react-query";

const __login = async (payload: PostEmailType) => {
  const login = await apis.postEmail(payload);
  return login;
};

const usePostLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(__login, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("email");
      if (data.data.success) return alert("Please Check your Email");
    },
  });
};

export default usePostLogin;

```
