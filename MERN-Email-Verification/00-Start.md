# 시작

# 참고한 깃헙 
- 아래 깃헙은 JS로 되어있고, 백엔드밖에 없다.
- 그리고 안되는 부분이 좀 있어서 고쳐가면서 진행했다 (아마 타입스크립트 때문일수도)
- 자바스크립트는 여기 참고 -> https://github.com/sk-Jahangeer/node-mongo-email-verify


# 모노레포
- 세팅 다 되어있는거 다운받기: https://github.com/kevinkim910408/NODE_VITE_TS_STARTER
- 직접세팅: https://github.com/kevinkim910408/Today-I-Learn/blob/main/Computer%20Sience/MonoRepo(Vite%2BNode(ts).md

# yarn install 하기전에 package.json을 아래로 변경.
- 만약 yarn install 했으면, 최상단에 위치한 yarn.lock 삭제하고 다시할것

- server 폴더의 package.json
- 패키지별 설명은 따로 안하지만, 오늘 메일을 주고받는거에 대한 패키지: nodemailer(server)
- 프론트는 메일관련 그런거 없다. 서버가 다 한다.
```js
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.ts",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.ts"
  },
  "dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "joi": "^17.7.0",
    "mongoose": "^6.8.1",
    "nodemailer": "^6.8.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.15",
    "@types/joi": "^17.2.3",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^18.11.17",
    "@types/nodemailer": "^6.4.7",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }
}
```

- Client의 package.json
```js
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^4.20.4",
    "axios": "^1.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.2",
    "react-responsive": "^9.0.2",
    "react-router-dom": "^6.4.5",
    "vite-tsconfig-paths": "^4.0.2"
  },
  "devDependencies": {
    "@types/node": "^18.11.17",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@types/react-responsive": "^8.0.5",
    "@typescript-eslint/eslint-plugin": "^5.46.1",
    "@vitejs/plugin-react": "^3.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.0.0"
  }
}
```
