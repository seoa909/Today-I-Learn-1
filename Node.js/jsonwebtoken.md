# jwt를 만들기

- 미들웨어
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

- 컨트롤러에서 사용 간단예제 (payload에 유저 정보를 같이 넣어줘야지 유저가 로그인마다 각기 다른 토큰을 받을 수 있다.)
```js
...
const payload = { email, isLogin: true };
                    jwt.sign(payload, "jwtSecret", { expiresIn: "1h" }, (err: any, token: any) => {
                        if (err) throw err;
                        res.send({ token, success: true, email: email });
                    });
...          
 ```
