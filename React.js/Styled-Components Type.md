# 스타일 컴포넌트 타입 적용

예제) 로고를 만들려는데, 로고의 svg, margin, 가로세로를 props로 가져와야한다.
이때 props에 type을 줘야함.

```js
export const Logo = styled.div<{ name: string; margin: string; px: string }>`
  background-image: url(${(props) => handleSvg(props.name)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(props) => props.px};
  height: ${(props) => props.px};
  margin: ${(props) => props.margin};
`;
```

부를때:

```js 
<Logo name="Logo" margin="15px 0" px="130px" />
```
