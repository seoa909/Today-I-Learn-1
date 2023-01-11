# 정규식 정리

# TypeScript
```js
// Name in Korean
export const nameRegCheck = (name: string) => {
  const regPass = /^(?=.*[가-힣])[가-힣a-zA-Z0-9-_.]{2,6}$/;
  return regPass.test(name);
};

// PW
export const passwordRegCheck = (pw: string) => {
  const regPass =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return regPass.test(pw);
};

// Email
export const emailRegCheck = (email: string) => {
  const regPass =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  return regPass.test(email);
};
```

# JavaScript
```js
// Name in Korean
export const nameRegCheck = (name) => {
  const regPass = /^(?=.*[가-힣])[가-힣a-zA-Z0-9-_.]{2,6}$/;
  return regPass.test(name);
};

// PW
export const passwordRegCheck = (pw) => {
  const regPass =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return regPass.test(pw);
};

// Email
export const emailRegCheck = (email) => {
  const regPass =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  return regPass.test(email);
};
```

# Usage
```js
 const reg = () => {
    // Passed
    if (passwordRegCheck(pw) || pw === "") return true;
    // Failed
    return false;
  };
  ```
