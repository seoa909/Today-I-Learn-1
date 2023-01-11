# useDetectClose.ts

# 드랍다운이 다른곳 클릭해도 안닫히는 이슈 해결
```js
import { useEffect, useState } from "react";

const useDetectClose = (elem: any, initialState: any) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement> | MouseEvent) => {
      if (elem.current !== null && !elem.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen, elem]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;

```


# 사용
```js
  const dropdownRef = useRef<null>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropdownRef, false);
  
  const dropdownFlag = () => {
    setIsOpen(!isOpen);
  };
  
   // 드랍다운에 onclick이랑 ref로 주기
   <SettingIcon name="setting" onClick={dropdownFlag} ref={dropdownRef}>
    {isOpen && <Dropdown level={data?.userInfo?.level} />}
   </SettingIcon>

  ```
