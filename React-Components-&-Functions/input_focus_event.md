# Input창 클릭 focus했을때, 안했을때 이벤트

```js
const inputRef = useRef(null);
const [focused, setFocused] = useState(false);

const onFocus = () => setFocused(true);
const onBlur = () => setFocused(false);

useEffect(() => {
 // 포커스할땐 active 클래스를 추가
  if (focused) inputRef.current?.classList.add("active");
// 마우스 떼면 active 클래스 삭제
  else inputRef.current?.classList.remove("active");
  if (searchInput !== "") inputRef.current?.classList.remove("active");
}, [focused, searchInput]);

<input
  type="text"
  onChange={onChange 로직}
  ref={inputRef}
  onFocus={onFocus}
  onBlur={onBlur}
/>

// css
.active {
  border: 1px solid red;
}
  
  
```
