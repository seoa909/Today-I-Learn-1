# Home - 처음에 보여줄 페이지 ('/')
- src/pages/Home.tsx
```js
import usePostLogin from "@/hooks/email/usePostEmail";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const { mutate } = usePostLogin();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onPostEmailHandler = () => {
    mutate({ email, name });
  };
  return (
    <>
      <div className={styles.wrap}>
        회원가입
        <input
          className={styles.ipt}
          type="text"
          placeholder="Email"
          onChange={(v) => setEmail(v.target.value)}
        />
        <input
          className={styles.ipt}
          type="text"
          placeholder="Name"
          onChange={(v) => setName(v.target.value)}
        />
        <button onClick={onPostEmailHandler}>보내기</button>
      </div>
    </>
  );
};

export default Home;

```

# Home에서 사용할 css 모듈
- src/pages/Home.module.css
```js
.wrap{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ipt{
    width: 300px;
    height: 30px;
    margin: 10px;
}
```

# 이메일 클릭하면 보여줄 페이지
- src/pages/EmailVerifyPage.tsx
```js
import useGetVerify from "@/hooks/email/useGetVerify";
import React, { useEffect } from "react";

const EmailVerifyPage = () => {
  const param = document.location.href.split("/");
  const { data } = useGetVerify({ id: param[5], token: param[6] });
  console.log(data);
  return <>{data?.success && "You passed verify"}</>;
};

export default EmailVerifyPage;

```
