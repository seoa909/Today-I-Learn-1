# 회원가입을 위한 스키마 작성

### 1. 스키마란?
스키마는 간단하게 말해서 데이터가 어떠한 방법으로 저장이 될지를 정하는 거다.

예를들어서 회원가입으로 가정하면,

보내주는 username은 문자열인지, 숫자열인지, 유니크한지(한개뿐인지), 최대길이가 몇인지... 이런걸 정하는게 스키마.

### 2. 폴더구조

models 라는 폴더를 하나 만들고 안에 register.js 라는 파일을 만든다.

### 3. 코드작성

```js
const mongoose = require('mongoose'); // mongoose 선언

const userRegiSchema = mongoose.Schema({  // Schema 작성시작
  email: {
    type: String,
    maxLength: 50,
    trim: true, // 여백 삭제
    unique: 1, // 중복금지, 1 은 true를 뜻함
  },
  // 로그인시 프론트에 보내줄 jwt 토큰
  token: {
    type: String,
  },
  // 토큰의 유효시간
  tokenExp: {
    type: Number,
  },
});

const UserRegi = mongoose.model('UserRegi', userRegiSchema); // Schema를 model로 감싸준다. 
module.exports = { UserRegi }; // export
```
