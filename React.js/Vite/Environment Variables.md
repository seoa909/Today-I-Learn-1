# .env

```js
const {
	VITE_APP_SERVER: "http://localhost:5001",
} = import.meta.env
```


혹은
```js
VITE_APP_SERVER="http://localhost:5001"
```

# 사용 
```js
import.meta.env.VITE_APP_SERVER,
```
