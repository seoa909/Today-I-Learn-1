# useRef

# 1. 배열로 만들어서 값 여러개 주기

```JS
const searchRef = useRef<null[] | HTMLDivElement[]>([]);
// 해당 태그는 DIV element다.
```

- 위처럼 선언하고,

- 아래처럼 사용한다

```JS
...map을 돌렸다...

ref={(element) => {
  searchRef.current[i] = element;
}}
```

- Div안의 값을 꺼낼려면
```js
searchRef.current[i].innerText
```

- 클래스 추가/제거
```js
searchRef.current[i].classList.add("active")
searchRef.current[i].classList.remove("active")
```
