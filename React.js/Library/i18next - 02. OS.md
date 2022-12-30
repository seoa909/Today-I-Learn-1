# 현재 os에 따른 언어 설정

- 기본 폴더구조는 아래 링크 참고
- https://github.com/kevinkim910408/Today-I-Learn/blob/main/React.js/Library/i18next%20-%2001.basic.md

### I18nextProvider
 - redux나 react-query등 처럼 app 감싸주면 된다.
 - src/man.tsx or src/index.tsx
```js 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

```

### 현재 os 가져와서 현재 os에 맞는 언어로 변경해주기
- src/App.tsx
```js
import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect } from "react";
import i18n from "./lang/i18n";

function App() {
  const { t } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    changeLanguage(window.navigator.language);
  }, []);

  return <div> {t("hi")}</div>;
}

export default App;

```

### 확인하는법
- 만약에 한글 컴퓨터 사용중이면 src/lang/i18.ts 가서 초기언어인 ```lng: "ko-kr"```을 ```lng: "en-US"``` 로 변경해본다.
- 그러고 시작했을때 hi라고 나올텐데 설정을 따로 안헀으면,
- 그 다음에 위의 코드를 적용했을때 '안녕' 이라고 나오는지 체크
- 영문 컴퓨터면 반대로.
