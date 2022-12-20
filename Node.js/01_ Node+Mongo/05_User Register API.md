 # 회원가입 api 작성
 
 ### 1. Postman 설치
 
 ```https://www.postman.com/downloads/``` 에서 포스트맨 설치,
 
 주의할점: 만약에 파란색 아이콘의 postman desktop agent? 이런게 설치되면, 이건 pc용이 아니니, 꼭 주황색아이콘의 postman을 설치.
 
 ### 2. Postman 실행
 ![22](https://user-images.githubusercontent.com/59503331/207711847-9e774212-dded-4b98-9dfe-b148d30a81a7.PNG)

제일 위 동그라미로 새로 하나 만든다음에,

우리는 회원가입(POST)할꺼니까 아래 GET을 POST로 변경후, API URL 작성 ```http://localhost:8080/regi```

아래의 body => raw -> json으로 변경 후

가장 아래 큰동그라미에 쿼리를 입력한다. (쿼리는 그냥 데이터베이스에 보내는 데이터를 말함)

```js
{
    "email": "a@a.com",
    "password": "12345"
}
```

### 3. server.js

```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { UserRegi } = require('./models/register'); // 지난번에 만든 스키마 가져오기

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// 회원가입 API
app.post('/regi', (req, res) => {
    const userRegi = new UserRegi(req.body); 
  
    userRegi.save((err, userInfo) => {
      if (err) return res.json({ success: false, err }); // 에러처리 
      return res.status(200).json({
        //status가 200일 경우(성공)
        success: true,
        userInfo
      });
    });
});

const mongoose = require('mongoose');
mongoose
// 몽고 db 의 id, 비번 체크
  .connect(
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

### 4. 서버 실행
```node server.js```

### 5. Postman가서 send를 누른다.

아래처럼 나오면 성공
![asdads](https://user-images.githubusercontent.com/59503331/207712582-d7cfeae4-e834-4c85-8672-91e2cc184b9a.PNG)

### 6. Mongo DB가서 체크

아래처럼 나오면 성공
![asd](https://user-images.githubusercontent.com/59503331/207712721-69b36e07-3e96-452c-a00d-651411d05092.PNG)

