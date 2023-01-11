# React Design Pattern

There's no design pattern concept in React.js, just when create components, props and states, 
make them as expendable to be fixed easier. 

Redux has a explicitly design pattern code.
- save states in store.js
- use reducer to modify state
- components ask store.js to get datas


# 리액트 디자인패턴?

디자인 패턴이 있다기 보다는 그냥 component, props, state, 일반함수 만들 때

확장성 좋고 수정 편리하게 코드만 잘짜면 됩니다 

리덕스를 사용할 경우 명확한 코드 디자인 패턴이 존재하는데

state를 store.js에 보관하고 

그 옆에 reducer로 state 수정방법을 나열하고

컴포넌트들은 store.js에 부탁만 하는 식으로 코드짜는게 디자인 패턴

# 폴더구조
```js
페이지용 js 파일들은 /pages
재사용하는 작은 컴포넌트 js 파일들은 /components
리덕스 파일들은 /store
js 파일을 돕는 유용한 함수들은 /utils
```

by 코딩애플
