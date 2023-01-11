# Nodemon 설치

### 1. 노드몬이란?

서버 코드가 업데이트 될때마다, 서버를 껏다켜야하는 불편함을 해결해주는 친구.

### 2. 설치
```npm install nodemon --save-dev```

### 3. package.json 

script를 변경해야함.
```js
"scripts": {
    "backend": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```


전체 코드
```js
{
  "name": "server",
  "version": "1.0.0",
  "description": "First time Nodejs and MongoDB",
  "main": "server.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "express",
    "mongodb",
    "rest",
    "api"
  ],
  "author": "K",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^6.8.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}

```

### 4. 명령어
```npm run start``` 로 변경.

실행했을때, 아래처럼 나오면 성공

![aa](https://user-images.githubusercontent.com/59503331/207714917-7bea2d9d-84fd-4c21-82f1-ac32fa2bc19d.PNG)

### 5. 확인
서버를열고, ```http://localhost:8080/```에 가면 
welcome....... 이 보일텐데

server.js에서 아래 부분을 변경해주고 저장을 한 후, 새로고침을하면 변경된게 적용되는게 보임
```js
app.get("/", (req, res) => {
    res.json({ message: "welcome zzzzzzz." });
});
```

