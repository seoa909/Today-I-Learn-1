# input 체크박스 + useState

```js
const [isSaved, setIsSaved] = useState(false);

...
...
...



<input
  type="checkbox"
  style={{ marginRight: "0.5rem" }}
  checked={isSaved}
  onChange={(e) => setIsSaved(!isSaved)}
/>

```
