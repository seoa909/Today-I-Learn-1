# useMediaQuery

### 1. 설치

js면 뒤에 타입 지울것.
```yarn add react-responsive @types/react-responsive```

### 2. useMediaQuery.tsx

```js
import { Layout } from "@/core/enums/Layout";
import { ReactNode, FC } from "react";
import { useMediaQuery } from "react-responsive";

export const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: Layout.PC });
  return isDesktop ? children : null;
};

export const Tablet = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isTablet = useMediaQuery({
    minWidth: Layout.TABLET,
    maxWidth: Layout.PC,
  });
  return isTablet ? children : null;
};

export const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({
    minWidth: Layout.MOBILE,
    maxWidth: Layout.TABLET,
  });
  return isMobile ? children : null;
};

const Example = () => (
  <div>
    <Desktop>
      <p>Desktop or laptop</p>
    </Desktop>
    <Tablet>
      <p>Tablet</p>
    </Tablet>
    <Mobile>
      <p>Mobile</p>
    </Mobile>
  </div>
);

export default Example;


export default Example;
```

### 3. 적정 사이즈 enum 제작 (typescript)
```js
export enum Layout {
  PC = 1024, // Regular
  TABLET = 768, // Ipad
  MOBILE = 280, // Samsung Fold
}
```

js면 그냥 ```const PC = 1024; ``` 이런식으로 변수만들어서 사용.

### 4. App.tsx 혹은 App.jsx

원래 App에 있던걸 PC라는 새로운 파일로 옮겨주고 

```js
import { Desktop, Mobile, Tablet } from "./hooks/useMediaQuery";
import PC from "./Layouts/PC";

function App() {
  return (
    <>
      //데스크탑이면 pc 실행
      <Desktop>
        <PC />
      </Desktop>
      // 태블릿과 모바일 화면이되면 아래가 됌
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
    </>
  );
}

export default App;
```
