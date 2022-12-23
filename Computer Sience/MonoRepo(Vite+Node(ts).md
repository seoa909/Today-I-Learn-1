```js
Vite, Node.ts
1. yarn init -y 로 폴더 최상단에 package.json 생성
 - 이 package.json은 전체적인 workspace 관리할 예정.

2. mkdir server 로 폴더에 server 폴더를 생성
3. cd server로 폴더안에 들어가서 다시 server용 pakage.json 생성 -> yarn init -y

4. cd ../ 로 다시 폴더 밖으로 나와서 client 폴더 생성
 - yarn create vite

5. 최상단 pakage.json에 아래처럼 추가
{
  "name": "Vite_Node.ts",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "workspaces": [
    "server",
    "client"
  ],
  "scripts": {
    "start": "concurrently \"yarn workspace server start\" \"yarn workspace client run dev"
  },
  "devDependencies": {
    "concurrently": "^7.3.0"
  }
}

6. yarn workspace server add express -> 서버에 express 추가
7. yarn workspace server add typescript ts-node @types/node @types/express -D -> 서버에 타입 추가 
8. yarn workspace server add nodemon -D -> 서버에 nodemon 추가

9. 서버용 pakage.json 아래처럼
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.ts",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.ts"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.15",
    "@types/node": "^18.11.17",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}



9. server 폴더에 index.ts 만들기
const express = require("express");

const port = 3200;

const app = express();

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

10. 최상단 폴더에 yarn add concurrently -D 받고 -> 에러나면, 패키지 제이슨에 이미 있나없나 확인, 있으
최상단 pakage.json 확인후

yarn start 가 최상단에서 제대로 되는지 
```
