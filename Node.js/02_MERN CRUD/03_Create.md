# 설치

```yarn workspace client add react-router-dom axios```

# Client 폴더 및 기초 설정 

일단 CRUD의 C만 해볼 예정이다. 대충 회원가입 폼을 준비해서 만들었다.

index.css는 비워주고,

App.css
```
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrap{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(46, 45, 44);
}

input {
  width: 500px;
  height: 50px;
  margin: 10px;
  font-size: 2rem;
}
```

App.tsx

```js
import { useState } from "react";
import "./App.css";

function App() {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, age, region, email, job, pw);
  };
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  return (
    <form className="wrap" onSubmit={(e) => onSubmitHandler(e)}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="txt"
        placeholder="region"
        onChange={(e) => setRegion(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="occupation"
        onChange={(e) => setJob(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPw(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;

```

# Client Test

대충 써서 실행했을때, 콘솔창에 잘 나오면 성공, 프론트 기초 view는 다 나왔고, 리덕스를 통해 값을 보내주는건 서버가 준비되면 할 예정.

# Server 폴더 및 기초 설정

설치 (패키지.json 계속 체크)

``` yarn workspace server  add express mongoose body-parser cors bcrypt --save ```

```yarn workspace server add nodemon --save-dev```

index.js (노드 처음 세팅을 js로해서 그냥 js로 하기로 했다..)
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to first node server." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

```

```yarn start``` 로 실행했을때, 터미널에 Server is running on port 8080.이렇게 나오면 성공

config 폴더 만들고 안에 dev.js 파일 생성

dev.js (클러스터주소는 각자 몽고db꺼를 사용하자..)
```js
module.exports = {
    mongoURI:
      'mongodb+srv://id:password@cluster0.e7qilzf.mongodb.net/?retryWrites=true&w=majority',
 };
 ```
 
 몽고db가 잘 연결되었는지 체크를 위한 index.js 코드
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

터미널에 MongoDB conected 가 보이면 성공.

model 폴더 만들어주고 안에, register.js 파일 생성

register.js
```js
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

const saltRounds = 10; 

const userSchema = mongoose.Schema({ 
  name:{
    type: String,
  }, 
  age:{
    type: String,
  }, 
  region:{
    type: String,
  }, 
  occupation:{
    type: String,
  }, 
  email: {
    type: String,
    maxLength: 30,
    trim: true, 
    unique: 1, 
  },
  password: {
    type: String,
    minlength: 5,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) { 
    bcrypt.genSalt(saltRounds, function (err, salt) { 
      if (err) return next(err); 
      bcrypt.hash(user.password, salt, function (err, hash) { 
        if (err) return next(err);
        user.password = hash; 
        next(); 
      });
    });
  } else {
    next(); 
  }
});

const UserRegi  = mongoose.model("register", userSchema);
module.exports = { UserRegi };
```

스키마까지 짰으니까 이제 다시 index.js로 돌아와서 api를 생성

index.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/dev') // 방금만든 폴더 가져오기

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

여기까지 했으면 ```yarn start```로 서버 열어주고, Nodemon도 열어서 api 테스트를 해준다.

json 샘플
```js
{
    "name": "Kevin",
    "age": "10",
    "region": "Korea",
    "occupation": "dev",
    "email": "a@a.com",
    "password": "12345"
}
```

아래 사진처럼 노드몬 나오면 성공(성공했으면, db에 잘 들어왔는지도 체크.)
![sss](https://user-images.githubusercontent.com/59503331/208163020-504deb97-2984-4956-a706-35daee1c1319.PNG)


# 정리

이제 회원가입에 대한 정보를 서버는 받을 준비가 됬고,
프론트에서 데이터를 api주소에 보내줬을때, db에 잘 들어갔는지를 체크하면 된다. (11000에러는 중복이 있는거니, 아까 넣은 데이터는 삭제)
