# Nodejs 와 MongoDB 연결하기

### 1. 몽고db 연결 코드 추가
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// 여기서 부터 몽고db
const mongoose = require('mongoose');
mongoose
  .connect(
  // 아래 id, password 부분은 아까 설정한걸 적으면 된다.
    'mongodb+srv://id:password@cluster0.e7qilzf.mongodb.net/?retryWrites=true&w=majority',
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
  // 에러가 나는지 궁금하면, password를 틀리게 적고 시도해보면 된다.
    console.log("MongoDB Error: " + err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to first node server." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

### 2. 실행명령어
```node server.js```
