# Node.js Starts

### 1. init

폴더 생성해주고 그 안에 ```npm init``` 을 통해 package.json 만든다. (대충 아래 사진처럼 입력해준다.)

아래 사진에서 보면 가장 중요한건 역시 index.js가 될 파일의 이름을 정하는거 같다. (나는 server.js로 변경)

![aa](https://user-images.githubusercontent.com/59503331/207680771-96472de0-586c-4f7c-b86d-4dff78d6495a.PNG)

### 2. 기본 패키지 설치 

```npm install express mongoose body-parser cors --save```

사용할 패키지는 express mongoose body-parser 그리고 cors. (yarn 으로 설치도 상관없다)

패키지를 설명하자면, 

```js
express: Rest API를 만들기 위함
mongoose: 몽고db 사용하기 위함
body-parser: requset를 파싱해주고, req.body를 만들어준다. -> 이해 안되면 일단 스킵
cors: express 미들웨어가 cors가 가능하게 여러 옵션 제공 
```

### 3. server.js (설명은 주석으로)

```js
// 패키지 가져오기
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// express 시작
const app = express();

// http://localhost:8081 요 도메인에만 cors를 허용해 준다는 의미
var corsOptions = {
  origin: "http://localhost:8081"
};

// 위에서 허용해주거+패키지를 여기서 실행 (미들웨어들을 express에 붙힌다고 이해)
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 가장 기본 경로에서 일단 축하 메세지를 보내준다. 메세지는 기본경로의 스크린으로 보내준다.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to first node server." });
});

// 포트에서는 이제 requests들을 받을 준비를 해둔다. 여기서 console.log는 서버 터미널에 뜬다.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

### 4. 실행해보기

```node server.js``` 명령어로 실행하면

터미널에는 ```Server is running on port 8080.``` 이렇게 뜨고, 

http://localhost:8080/ 여기로 가보면 웰컴 메세지가 나오고있을예정.
