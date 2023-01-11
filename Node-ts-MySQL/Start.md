# mySQL 연결

### 타입스크립트 시작 
```https://github.com/kevinkim910408/Today-I-Learn/blob/main/Node.js/03_%20Node%20%2B%20TypeScript/Start.md```

### mysql 설치
```npm install mysql```

### src/server.ts(나홀로 콘솔로 데이터 확인하기)
```js
import express, { Application, Request, Response } from "express";
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "< MySQL username >",
  password: "< MySQL password >",
  database: "my_db",
});
connection.connect();

connection.query("SHOW TABLES", (error: any, rows: any) => {
  if (error) throw error;
  console.log("table: ", rows);
});

const app: Application = express();

const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

connection.end();
```

### api
만약 클라이언트에 줘야한다면, api를 만들어야한다.

### src/config/database.js (데이터베이스 모듈 생성)
```js
module.exports = {
  host     : 'localhost',
  user     : '< MySQL username >',
  password : '< MySQL password >',
  database : 'my_db'
};
```

### src/server.ts
```js
import express, { Request, Response } from "express";
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello ");
});

app.get("/tables", (req, res: Response) => {
  connection.query("SHOW TABLES", (error: any, rows: any) => {
    if (error) throw error;
    console.log("Tables: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
```
