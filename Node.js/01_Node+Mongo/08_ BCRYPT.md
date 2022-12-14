# 회원가입시 비밀번호 암호화.

### 1. 설치
```npm install bcrypt```


### 2. register.js
```js
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); // bcrypt 임포트

const saltRounds = 10; // 비밀번호를 암호화할떄(해쉬할때) 부가데이터를 얼마나 추가할지

const userSchema = mongoose.Schema({  
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

//mongoose 기능 pre  > save 전에 아래 함수 실행 (즉, db에 보낼 쿼리에 비번을 저장하기 전에 발동)
userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) { // password 가 수정될때 암호화 실행
    bcrypt.genSalt(saltRounds, function (err, salt) { // salt 생성
      if (err) return next(err); // 에러처리
      bcrypt.hash(user.password, salt, function (err, hash) { // ser.password를 salt로 변경해서 hash로 return
        if (err) return next(err);
        user.password = hash; // user.password에 hash를 할당
        next(); // pre에서 나간다.
      });
    });
  } else {
    next(); // 비밀번호랑 무관하면 암호화 안들어가고 쿼리에 저장
  }
});

const UserRegi  = mongoose.model("register", userSchema);
module.exports = { UserRegi };
```

### 3. Postman 실행

아래처럼 나오면 성공.

![aaa](https://user-images.githubusercontent.com/59503331/207719346-024a088a-5451-4de6-9d57-17eac5f0e1d4.PNG)
