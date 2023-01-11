# 컨트롤러 제작

- 컨트롤러는 2개가 제작될 예정 
  - 1. 클라가 정보를 보내면(post), 그걸 토대로 인증메일을 보내주는 api
  - 2. 유저가 메일함에서 이메일을 클릭하면 이제 정보를 읽어보고 올바르면 verify를 pass시켜줄 api
- 추가로 알아야할점
  - 토큰생성은 crypto라는 패키지를 이용해서 생성 (블록체인 만들듯이 생성)

```js
import { Request, Response } from "express";
import * as crypto from "crypto";
const sendEmail = require("../utils/email");
const { User, validate } = require("../models/user");

const postEMailController = async (req: Request, res: Response) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("User with given email already exist!");

        user = await new User({
            name: req.body.name,
            email: req.body.email,
            token: crypto.randomBytes(32).toString("hex")
        }).save();

        const message = `${process.env.FRONT_DEVELOPMENT}/user/verify/${user.id}/${user.token}`;
        console.log(message);

        await sendEmail(user.email, "Verify Email", message);

        res.send({ message: "An Email sent to your account please verify", success: true });
    } catch (error) {
        res.status(400).send("An error occured");
    }
};

const getVerifyController = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ token: req.params.token });
        if (!user) return res.status(400).send("Invalid link");

        await User.updateOne({ _id: user._id, verified: true, token: " " });
        res.send({ message: "email verified sucessfully", success: true });
    } catch (error) {
        res.status(400).send("An error occured");
    }
};

export default { postEMailController, getVerifyController };

```
