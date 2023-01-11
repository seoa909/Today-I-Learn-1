# 유저 정보 가져오기.

### 1. 포스트맨
일단 포스트맨으로 가서 email 다른 유저를 몇 명 더 추가해준다. 대충 아래처럼.

![aaa](https://user-images.githubusercontent.com/59503331/207724896-ca599c3e-f3d7-4a28-85f7-1beb7e75ca8b.PNG)

### 2. server.js (GET 방법)
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/development') 

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

// 모든 유저정보 가져오는 api
app.get('/users', function(req, res){
  UserRegi.find(function(err, usersInfo){
    // 500에러는 서버에러다.
    if(err) return res.status(500).send({error: 'database failure'});
    // response에 json으로 유저정보 받기
    res.json(usersInfo);
  })
});

const mongoose = require('mongoose');
mongoose
  .connect(
    config.mongoURI 
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

### 3. 포스트맨

아래 사진처럼 변경해주고 send 하면 respoonse가 아래처럼 나오면 성공. body는 안줘도된다 GET이라서, 근데 지우기 귀찮아서 안지웠나보다.

![aaa](https://user-images.githubusercontent.com/59503331/207725466-2e996bc8-b339-45cb-a5ae-57e33636350f.PNG)


### 4. 한개만 가져오기 server.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/development') 

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

// 모든 유저정보 가져오는 api
app.get('/users', function(req, res){
    UserRegi.find(function(err, usersInfo){
    // 500에러는 서버에러다.
    if(err) return res.status(500).send({error: 'database failure'});
    // response에 json으로 유저정보 받기
    res.json(usersInfo);
  })
});

// 유저정보 한명만 가져오는 api - api 제일 뒤에는 유저 이메일이 들어간다(나중에 프론트에서 보내줄거임)
app.get('/users/:user_email', (req, res) => {
    // email을 기준으로 한개만 찾는다.
    UserRegi.findOne({email: req.params.user_email}, function(err, userInfo){
    if(err) return res.status(500).json({error: err});
    // 유저 정보가 없으면 404에러
    if(!userInfo) return res.status(404).json({error: 'user not found'});
    res.json(userInfo);
  })
});

const mongoose = require('mongoose');
mongoose
  .connect(
    config.mongoURI 
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

### 5. 포스트맨

아래처럼 나오면 성공

![aaa](https://user-images.githubusercontent.com/59503331/207726449-721787d2-1d63-4607-9bac-8ce4b0c3cc8b.PNG)
