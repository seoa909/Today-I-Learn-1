# 시작

https://github.com/kevinkim910408/Today-I-Learn/blob/main/Node.js/03_%20Node%20+%20TypeScript/Start.md

### 추가 설치
- ```yarn add body-parser dotenv cors bcryptjs jsonwebtoken```
- ```yarn add --save-dev @types/body-parser @types/dotenv @types/cors @types/bcryptjs @types/jsonwebtoken```

### 폴더정리

- src안에 config폴더, controllers폴더, routes 폴더, middleware, interfaces, functions폴더 생성
- 최상단에는 .gitignore추가

### 파일추가
src/config/config.ts
```js
import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
};

export default config;

```

src/config/logging.ts
```js
const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
      object
    );
  } else {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
      object
    );
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
      object
    );
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
      object
    );
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

const getTimeStamp = (): string => {
  return new Date().toISOString();
};

export default {
  info,
  warn,
  error,
  debug,
};
```

src/controllers/user.ts
```js
import { NextFunction, Request, Response } from "express";

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "pong",
  });
};

export default { serverHealthCheck };
```

src/routes/user.ts
```js
import express from "express";
import controller from "../controllers/user";

const router = express.Router();

router.get("/ping", controller.serverHealthCheck);

export = router;

```

src/app.ts
```js
import http from "http";
import bodyParser from "body-parser";
import express from "express";
import logging from "./config/logging";
import config from "./config/config";
import userRoutes from "./routes/user";

const NAMESPACE = "Server";
const router = express();

/** Log the request */
router.use((req, res, next) => {
  /** Log the req */
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    /** Log the res */
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

/** Routes go here */
router.use("/users", userRoutes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
);
```

.prettierrc
```js
{
    "singleQuote": true,
    "printWidth": 200,
    "proseWrap": "always",
    "tabWidth": 4,
    "useTabs": false,
    "trailingComma": "none",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "semi": true
}
```

.gitignore
```js
node_modules/**/*
build/**/*
certs/**/*

*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*

package-lock.json
```
