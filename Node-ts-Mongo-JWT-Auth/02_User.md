# User Controller, routes 그리고 interfaces 만들기

### Controller
src/controllers/user.ts (회원가입, 토큰체크만)
```js
import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import bcryptjs from 'bcryptjs';

const NAMESPACE = 'User';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token Validated, user authorized');
    return res.status(200).json({
        message: 'Authorized'
    });
};
const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                messsage: hashError.message,
                error: hashError
            });
        }
        // TODO: Insert User Into DB here
    });
};
const login = (req: Request, res: Response, next: NextFunction) => {};
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {};

export default { validateToken, register, login, getAllUsers };

```

### Routes
src/routes/user.ts
```js
import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/validate', controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);

export = router;

```

### Interface
src/interfaces/user.ts
```js
export default interface IUser {
    username: string;
    password: string;
}
```
