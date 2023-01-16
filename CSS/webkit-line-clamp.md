# 글자수 ... 처리

- 가끔 텍스트가 넘칠때 ... 처리가 하고싶을때
- 아래같은 문장을 추가해주면 줄 수를 제한할 수 있다.

```js
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

- 정확히는 아래처럼 쓰면 된다.
```js
display: '-webkit-box';
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```


# 다만 webkit은 IE에서는 적용이 되지 않는다.
