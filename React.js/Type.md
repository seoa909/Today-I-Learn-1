# 타입 정리
### any 타입을 주지말자는 의미로 정리

- Return 값 같은건 뒤에 어떤 return 값이 들어가는지 체크하고 주면 된다
- 아래는 return children : null 이기 때문에
- JSX.Element | null로 주었다.
```js
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
```

Content | Link |
--- | --- | 
children | JSX.Element |
onClick event value | React.MouseEvent<HTMLButtonElement> |
children | JSX.Element |
