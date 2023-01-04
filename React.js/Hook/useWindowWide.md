# 윈도우 가로사이즈 재기 (js는 타입 다 삭제)

```js
import { useEffect, useState } from "react";

export const useWindowWide = (size: number) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width > size;
};
```

# 사용법

```js
function App() {
  const width = useWindowWide(size.notSupportNum);
  return (
    <>
      {width ? (
        <Routes />
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p> We Do Not Support Your Device</p>
          <p> Sorry for Inconvinence</p>
        </div>
      )}
    </>
  );
}

export default App;

```
