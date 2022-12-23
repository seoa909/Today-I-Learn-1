# db 연결

- src/config/db.ts 생성
- 아래처럼 몽고db 연결
```js
import mongoose from "mongoose";
const config = require("./development");
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(config.DB, {});

        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
```
- src/config/development.ts 생성
- 모듈 생성
- 그냥 process.env로 줘도 된다.. 귀찮아서 그냥 뒀을뿐.. 
```js
import dotenv from "dotenv";
dotenv.config();

module.exports = {
    DB: process.env.DB
};
```


- index.ts로 돌아와서 옆의 코드 상단에 추가 (db연결 가져오기) ```js const connectDB = require("./src/config/db"); ```
- 그러고 대충 아래서 ```app.get("/")``` 이 코드 아래다가 추가 ```connectDB();```


전체코드 index.ts
```js
import express, { Request, Response } from "express";
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/db");

var corsOptions = {
    origin: [process.env.FRONT_PRODUCTION, process.env.FRONT_DEVELOPMENT],
    default: process.env.FRONT_PRODUCTION
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is Running now....");
});

// DB
connectDB();

const port = process.env.PORT;

/* Error handling */
app.use((req: Request, res: Response) => {
    const error = new Error("Not found");

    res.status(404).json({
        message: error.message
    });
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

```

# yarn start 최상단에서 했을때 ```MongoDB Connected...``` 가 터미널에 나오면 성공
- 에러나면 몽고db 클러스터 url 체크
