# 환경변수 설정 줄여서 env라고도 한다.

### 1. 폴더 & 파일
config 폴더 만들고 안에 development.js 파일을 만든다. (그냥 개발단계에서 사용하는 환경변수라는 의미)

### 2. development.js
```js
module.exports = {
    mongoURI:
      'mongodb+srv://id:password@cluster0.e7qilzf.mongodb.net/?retryWrites=true&w=majority',
 };
 ```
 
### 3. server.js

```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/development') // 방금만든 폴더 가져오기

const { UserRegi } = require('./models/register'); 

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/regi', (req, res) => {
    const userRegi = new UserRegi(req.body); 
  
    userRegi.save((err, userInfo) => {
      if (err) return res.json({ success: false, err }); 
      return res.status(200).json({
        success: true,
        userInfo
      });
    });
});

const mongoose = require('mongoose');
mongoose
  .connect(
    config.mongoURI // 우리가 만든 폴더안의 mongoURI를 가져온다.
    ,{
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log("MongoDB Error: " + err);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to first node zzz." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

### 4. 실은 깃헙에 안올리면 이런것도 의미 없다.
.gitignore에 꼭 ```development.js``` 을 추가해주자.
