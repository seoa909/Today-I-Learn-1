# 로그인할때, 비밀번호 암호화 및 토큰생성

### signJWT.ts
src/functions/signJWT.ts
```js
import jwt from 'jsonwebtoken';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    const timeSinchEpoch = new Date().getTime();
    const expirationTime = timeSinchEpoch + Number(config.server.token.expireTime) * 100000;
    const expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    logging.info(NAMESPACE, `Attempting to sign token for ${user.username}`);

    try {
        jwt.sign(
            {
                user: user.username
            },
            config.server.token.secret,
            {
                issuer: config.server.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error: any) {
        logging.error(NAMESPACE, error.message, error);
        callback(error, null);
    }
};

export default signJWT;

```
