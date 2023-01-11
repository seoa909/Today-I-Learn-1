# 환경변수

# Plugin

```
- JS
yarn add react-native-dotenv
- TS
yarn add -D @types/react-native-dotenv
```

# babel.config.js
```
module.exports = function () {
  return {
    ...,
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
        },
      ],
    ],
  };
};
```

# Remove Cache

```
expo r -c
```

# Usage

```
const API_KEY = `${process.env.Weather_Key}`;
```
