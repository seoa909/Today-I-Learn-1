# 리덕스 툴킷 Persist 
- 브라우저 새로고침해도 스토어 보존하고 싶을경우 사용.

# 설치

```js
yarn add @types/redux-persist
yarn add redux-persist
```

- store.ts
```js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DoctorSlice from "./modules/DoctorSlice";
import UserSlice from "./modules/UserSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// combineReducer
export const rootReducer = combineReducers({
  doctors: DoctorSlice,
  user: UserSlice,
});

// local에 저장할 persist reducer
const persistConfig = {
  key: "root",
  storage,
// 내가 추가할 reducer
  whitelist: ["user"],
};

// persist로 wrapping
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
```

- main.tsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
```
