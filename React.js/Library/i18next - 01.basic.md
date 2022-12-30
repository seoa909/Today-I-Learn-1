# 다국어 지원 라이브러리

### 설치
```npm install i18next react-i18next```
- 이유는 모르겠지만 yarn add 안됌..
- 할려면 npm 설치후, package-lock.json 날리고 yarn install 해봐야할듯 -> 시도는 안해봄.


### 사용
- 일단 폴더를 정의한다.
- 설명은 주석처리
- src/lang/i18n.ts
```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 사용할 언어팩 가져오기
import langEn from "./lang.en.json";
import langKo from "./lang.ko.json";

// 언어팩 설정
const resource = {
  "en-US": {
    translation: langEn,
  },
  "ko-KR": {
    translation: langKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  // 초기 설정 언어
  lng: "ko-KR",
  fallbackLng: {
    "en-US": ["en-US"],
    default: ["ko-KR"],
  },
  debug: true,
  defaultNS: "translation",
  ns: "translation",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
```

- 언어팩
- src/lang/lang.en.json
```js
{
    "hi": "hi"
}
```
- src/lang/lang.ko.json
```js
{
    "hi": "안녕"
}
```

- vite 시작이면 main.tsx에, react 시작이면 index.tsx에
src/main.tsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lang/i18n.ts"; // 여기가 추가된 줄

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

src/App.tsx
```js
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return <div> {t("hi")}</div>;
}

export default App;

```


### 결과
- hi가 한국어 시작이라 안녕으로 나온다.
![asdd](https://user-images.githubusercontent.com/59503331/210112162-833a308b-989b-4993-a38a-3b2ada3d43bb.PNG)

