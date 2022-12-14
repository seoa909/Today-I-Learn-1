```js
yarn add react-error-boundary
```

```js
<ErrorBoundary FallbackComponent={Error}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/book/:id" element={<Detail />} />
      <Route path="/add" element={<Add />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</ErrorBoundary>
```

- 에러 경계는 하위 컴포넌트 트리의 어디에서든 자바스크립트 에러를 기록하며 깨진 컴포넌트 트리 대신 폴백 UI를 보여주는 React 컴포넌트
- 에러 경계는 렌더링 도중 생명주기 메서드 및 그 아래에 있는 전체 트리에서 에러를 잡아냄

- 아래 상황에서는 에러 포착 x
```js
이벤트 핸들러 
비동기적 코드 
서버 사이드 렌더링
자식에서가 아닌 에러 경계 자체에서 발생하는 에러
```

# try/catch 와 차이점
- try / catch는 훌륭하지만 명령형 코드에서만 동작
- 에러 경계 컴포넌트는 선언적이며 무엇을 렌더링할지 구체화 (리액트 자체 컴포넌트)
