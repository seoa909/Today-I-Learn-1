# 현재 url 가져오기

```js
const param = document.location.href;

or 

// can split like below
const param = document.location.href.split("/");
```


- 만약에 pathname만 알고싶으면,
```js
const param = document.location.pathname;
```
