# 문자열을 띄어쓰기로 자르고, 자른거 제일앞에 대문자(영어)

```js
  const uppercaseReg = (str: string) => {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    str = str.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
    return str.toUpperCase();
  };
  ```
  
  # Whole Example of code
  
  ```js
  import React from "react";
import BackButton from "./BackButton";
import { HeaderBorder, HeaderDiv, Wrap } from "./style";

const Header = () => {
  const param = document.location.href.split("/");

  const uppercaseReg = (str: string) => {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    str = str.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
    return str.toUpperCase();
  };
  return (
    <Wrap>
      <HeaderDiv>
        {param[3] !== "Dashboard" ? (
          <BackButton link="/Dashboard" />
        ) : (
          <div style={{ width: "62px" }} />
        )}
        <span>{uppercaseReg(param[3])}</span>
      </HeaderDiv>
      <HeaderBorder />
    </Wrap>
  );
};

export default Header;

```
