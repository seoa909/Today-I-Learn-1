# 도커 파일 구조 

```js

FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]

# 이 구조를 Layout 이라 하는데,
# 더 빈번히 사용할 파일들이 아래로 가야한다.

# 이 파일로 설명을 하자면,
# 먼저 노드다 라고 명시하고, 노드에 필요한 기능들을 가져온다(alpine)
# WORKDIR: 어떤경로에 이 도커파일에 명령을 실행시킬지 적는다 => /app 적으면, 도커를 실행하면 모든게 /app 폴더안에 들어가게 된다.
# COPY는 이제 사용할 패키지들을 복사해서 이미지화 하는거다. 가장 빈번히 바뀌지 않는 패키지 제이슨 이런게 먼저 불리고, 가장 자주 바뀌는 index.js같은게 마지막에 온다
# npm ci => npm start 해도 되지만 혹은 node index.js, npm ci를 해야지 패키지 제이슨 안에 명시된 버젼으로 다운받는다. npm start는 최신버전을 찾는다.

```
