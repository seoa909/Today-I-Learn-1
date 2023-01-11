# InitialState Type

# 왠만해서는 바로 리듀서에 때려 넣는거 보단, 변수로 선언해서 넣는게 좋아보인다.

```js

interface Initial {
  loading: boolean;
  error: null;
  isLogin: boolean;
}


const initialState: Initial = {
  loading: false,
  error: null,
  isLogin: false,
};
```
