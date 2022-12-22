  # res.locals
  
  res.locals은 글로벌하게 쓸수있는 변수를 저장해 두는거라고 한다 간단하게.
  
# 예제
- 토큰 시크릿키는 아직 암호화 하지 않았다.
```js
import { Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "type";
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = async (req: IGetUserAuthInfoRequest<string, any>, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const { email, isLogin } = jwt.verify(token, "jwtSecret");
        res.locals.email = email;
        res.locals.isLogin = isLogin;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};

```

# 사용법
```js
const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
    const { email } = res.locals;
    User.findOne({ email }, function (err: Error, userInfo: any) {
        console.log(err, userInfo);
        if (err) return res.status(500).json({ error: err });
        if (!userInfo) return res.status(404).json({ error: "user not found" });
        res.json({ userInfo, isLogin: res.locals.isLogin });
    });
};
```
