# 모델 생성

- 일단 modles안에 파일을 user.ts로 변경
- 그냥 유저 스키마인데, Joi라는게 새롭게 등장.
- Joi는 그냥 validate해주는 친구.
```js
import mongoose, { Schema } from "mongoose";
import Joi from "joi";
import { Validate } from "user";

const userSchema: Schema = new Schema(
    {
        name: {
            type: String,
            maxlength: 50,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        // 아이디 생성하면 기본으로 빈 토큰이 하나씩 주어짐, email verification을 하게되면 랜덤 토큰이 떨어지고, 인증이끝나면 다시 비워줄 예정
        token: {
            type: String,
            default: " "
        },
        // 현재 verification에 통과 됬는지 안됬는지를 체크하기 위함
        verified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

// 보면 Joi를 이용해서 함수제작 -> user정보를 가져와서 이게 내가 원하는 validation이랑 맞는지 체크해줄 예정
const validate = (user: Validate) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    });
    return schema.validate(user);
};

module.exports = { User, validate };

```

# Validate Types
src/types/user.ts
```js
export interface Validate {
    name: string;
    email: string;
}

```
