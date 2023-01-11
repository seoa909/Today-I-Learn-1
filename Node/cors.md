# CORS
```js

const cors = require("cors");

var corsOptions = {
    origin: config.FrontendProductURL
};

app.use(cors(corsOptions));

```

# 만약 여러개의 주소를 주고싶다면

```js
const cors = require("cors");

var corsOptions = {
    origin: [config.FrontendProductURL, config.FrontendDevURL],
    default: config.FrontendProductURL
};

app.use(cors(corsOptions));

```
