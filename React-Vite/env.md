# 환경변수 사용

VITE_APP_SERVER="http://localhost:5000"
VITE_TABEAU_SERVER = "aaa"
VITE_TABEAU_TEST = "ssss"


# 사용 
```js
const { VITE_TABEAU_TEST } = import.meta.env;

const [url] = useState(VITE_TABEAU_TEST);
```
