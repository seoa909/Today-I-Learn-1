```js
const ImageDiv = styled.div<{ pic: string }>`
  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
```
