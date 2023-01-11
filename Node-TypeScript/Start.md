# Node + Typescript start

### 타입스크립트 글로벌하게 설치
```npm install -g typescript```

###  package.json
```npm init```

### 모듈 추가
```npm i express ```

```npm i -D typescript ts-node @types/node @types/express```

###  tsconfig.json 생성
```npx tsc --init```

###  폴더관만들기 -> src, dist
src(ts파일관리) dist(빌드파일관리)

###  nodemon
```npm i -D nodemon```

###  package.json
```js
"scripts": {
    "dev": "nodemon src/server.ts"
  },
```
여기서 dev가 실행 명령어임, start로 바꿔도되고 뭐든 상관없음

###  src/server.ts
```js
import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 3001

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to first node server." });
});


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
```

### 시작 명령어
```yarn dev / npm dev```
