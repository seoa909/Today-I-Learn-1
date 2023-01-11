# i18next 다국어 지원 라이브러리 버튼이용

### 일단은 타입스크립트면 enum을, 일반 자바스크립트면.. 그냥 글로벌하게 변수를 선언해서 string 문자열을 통일시켜 주는 작업

- 타입스크립트
- src/utils/Enum.ts
```js
export enum LANGUAGE {
  KOREAN = "ko-KR",
  ENGLISH = "en-US",
}

```

- 자바스크립트
- src/utils/Enum.js
```js
export cosnt LANGUAGE = {
  KOREAN : "ko-KR",
  ENGLISH :"en-US",
}
```

### 문자열 바꾸기
- src/lang/i18n.ts
```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEn from "./lang.en.json";
import langKo from "./lang.ko.json";
import { LANGUAGE } from "../utils/Enum";

const resource = {
  [LANGUAGE.ENGLISH]: {
    translation: langEn,
  },
  [LANGUAGE.KOREAN]: {
    translation: langKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: LANGUAGE.KOREAN,
  fallbackLng: {
    [LANGUAGE.ENGLISH]: [LANGUAGE.ENGLISH],
    default: [LANGUAGE.KOREAN],
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

### 언어팩 변경
- src/lang/lang.en.json
```js
{
    "Ladies and Gentlemen": "Ladies and Gentlemen",
    "Welcome to this project": "Welcome to this project",
    "This is using i18next to switch language project": "This is using i18next to switch language project",
    "Be my guest always": "Be my guest always"
}
```

- src/lang/lang.ko.json
```js
{
    "Ladies and Gentlemen": "신사 숙녀 여러분",
    "Welcome to this project": "이 플젝에 오신걸 환영합네다",
    "This is using i18next to switch language project": "뭐.. i18next로 만든 플젝이고",
    "Be my guest always": "즐겨주세요"
}
```

### 버튼제작
src/App.tsx
```js
import { useTranslation } from "react-i18next";
import "./App.css";
import i18n from "./lang/i18n";
import { LANGUAGE } from "./utils/Enum";

function App() {
  const { t } = useTranslation();
  const English = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  const Korean = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <div>
      <div>{t("Ladies and Gentlemen")}</div>
      <div>{t("Welcome to this project")}</div>
      <div>{t("This is using i18next to switch language project")}</div>
      <div>{t("Be my guest always")}</div>
      <button onClick={() => Korean(LANGUAGE.KOREAN)}>한글</button>
      <button onClick={() => English(LANGUAGE.ENGLISH)}>English</button>
    </div>
  );
}

export default App;

```

### 결과
![Record_2022_12_30_16_51_51_637](https://user-images.githubusercontent.com/59503331/210114301-44bfd78a-9556-4412-8f5e-37c4b384a31f.gif)
