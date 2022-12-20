# 토큰을 검사하는 코드를 만든다

### middleware
src/middleware/extractJWT.ts
```js
import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import Jwt from 'jsonwebtoken';
import config from '../config/config';

const NAMESPACE = 'Auth';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validating Token');

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        Jwt.verify(token, config.server.token.secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: error.message,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default extractJWT;
```

### config
src/config/config.ts
```js
import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'Kevin Kim';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'supersecured';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET
    }
};

const config = {
    server: SERVER
};

export default config;

```
