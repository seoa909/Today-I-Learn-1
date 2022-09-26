# Install

```
yarn add --dev babel-plugin-module-resolver
```

# babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: "./src/components",
            hooks: "./src/hooks",
            shared: "./src/shared",
            pages: "./src/pages",
          },
        },
      ],
    ],
  };
};


```

# tsconfig.json (If Typescript)

```js
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    // Path alias config
    "baseUrl": ".",
    "paths": {
      "components/*": ["src/components/*"],
      "pages/*": ["src/pages/*"],
      "hooks/*": ["src/hooks/*"],
      "shared/*": ["src/shared/*"]
    }
  }
}


```
