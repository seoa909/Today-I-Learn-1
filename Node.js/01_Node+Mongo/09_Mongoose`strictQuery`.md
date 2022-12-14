```js
(node:13028) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

위와 같은게 뜨고있는데 보기 싫게생겼으면

register.js에 아래 코드 추가.

```js
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
mongoose.set('strictQuery', true); // 추가된 코드
```

그냥 몽구스가 유저들에게 알려주고자 하는 메세지 일 뿐이다. 경고도 에러도 아님.
