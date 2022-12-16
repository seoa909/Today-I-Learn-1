# Redux-thunk

What is Redux-thunk?
- It is a middleware doing asynchronous operation.
- using asynchronous operation is able to dispatch function not action objects.

------------------------------------------------------------------------------------------------------------------------------------------------------------

리덕스 쳥크란?
- 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어
- 미들웨어를 사용하면 액션 객체가 아닌 함수를 디스패치 할 수 있다.

- Thunk 설치
```js
 yarn add redux-thunk
```
- Store에 Thunk 세팅
```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
export default store;
```

- Thunk 사용법
```js
// 1번쨰인자 - 함수액션 dispatch, 2번쨍니자 - getState, store에 접근해서 데이터 fetch
const getComments = () => async (dispatch, getState) => {
  // store에 접근해서 데이터를 가져온다.
  const id = getState().post.activeId;
  // action을 dispatch 해준다.
  dispatch({ type: 'GET_COMMENTS' });
  
  // try ~ catch
  try {
    const comments = await api.getComments(id);
    dispatch({ type:  'GET_COMMENTS_SUCCESS', id, comments });
  } catch (e) {
    dispatch({ type:  'GET_COMMENTS_ERROR', error: e });
  }
}
```
- 홈 화면으로 가는 thunk 만들기
```js
// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};
```
