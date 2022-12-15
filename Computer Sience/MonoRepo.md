# MonoRepo

![zxczcz](https://user-images.githubusercontent.com/59503331/187052868-486932b2-c6af-44fa-bb38-02f12c6253bc.png)

- MonoRepo 는 Monolithic Repositories 의 약자로, 하나의 리포지토리에서 여러개의 프로젝트가 구성된 것을 의미합니다.

- 장점
  - 하나의 리포지토리로 여러개의 프로젝트 관리
    - 프로젝트를 스위치해가며 개발할 필요없이 하나의 IDE에서 하위폴더로 구분된 여러 패키지들이 코드를 작성할 수 있다
  - 중첩되는 코드의 공통화
    - 여러 프로젝트들이 공통으로 사용해야 하는 로직이 있을때, 분리해서 따로 import/require 가 가능하다 
  - 중첩되는 모듈은 하나만 설치해서 사용
    - root path에만 node 를 설치하고, 필요한 곳에서 가져다 사용할 수 있다.
- 단점
  - Dependency 충돌 문제
    - 특정 패키지가 특정 버전의 모듈을 필요로 하는 경우, 충돌 가능성
  - 단일 리포지토리 문제
    - 관리하는 패키지가 증가함에 따라 오히려 가독성이나 여러가지 측면에서 비효율적
  - 긴 초기 프로젝트 설정시간
    - MonoRepo 로 포함되는 모든 프로젝트를 사용한다면 상관없지만, 그 중 일부만 필요한 경우에도 node_module 설치가 이루어 져야함.


- 관리방법

![zxczxc](https://user-images.githubusercontent.com/59503331/187306325-44ceab8d-41c4-431c-ae07-75a4140f2ac6.PNG)



- 세팅방법
```js
React, Node.js
1. yarn init -y 로 폴더 최상단에 package.json 생성
 - 이 package.json은 전체적인 workspace 관리할 예정.

2. mkdir server 로 폴더에 server 폴더를 생성
3. cd server로 폴더안에 들어가서 다시 server용 pakage.json 생성 -> yarn init -y

4. cd ../ 로 다시 폴더 밖으로 나와서 client 폴더 생성
 - yarn create vite

5. 최상단 pakage.json에 아래처럼 추가
{
  "name": "React-Vite-GraphQL",
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
7. yarn workspace server add nodemon -D -> 서버에 nodemon 추가

8. 서버용 pakage.json 아래처럼
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
}

9. server 폴더에 index.js 만들기
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
https://www.youtube.com/watch?v=ACDGXHR_YmI
