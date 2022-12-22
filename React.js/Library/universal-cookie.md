# 설치

yarn add universal-cookie

타입스크립트면 아래 명령어도 추가

yarn add @types/universal-cookie


# 사용

코드의 반복을 줄이기위해 cookie.ts를 생성

```js
import Cookie from "universal-cookie";

export const cookie = new Cookie();

```

- 저장

```js
cookie.set("Authorization", data.data.token, {
      path: "/",
  });
```

- 삭제

```cookie.remove("Authorization)```

- 불러오기
```cookie.get("Authorization")```
