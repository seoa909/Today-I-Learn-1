# 경로

# tsconfig.json

```js
{
  "compilerOptions": {
      "target": "esnext",
      "module": "esnext",
      "allowJs": true,
      "jsx": "preserve",
      "importHelpers": true,
      "moduleResolution": "node",
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "sourceMap": true,
      "baseUrl": ".",
      "strict": true,
      "types": [
          "vite/client", // if using vite
      ],
      "paths": {
          "@/*": [
              "src/*"
          ]
      },
      "lib": [
          "esnext",
          "dom",
          "dom.iterable",
          "scripthost"
      ]
  },
  "include": [
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.vue",
      "tests/**/*.ts",
      "tests/**/*.tsx"
  ],
  "exclude": [
      "node_modules"
  ]
}
```

# vite.config.ts

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

# tsconfig.vite.json -> original name was tsconfig.node.json
tsconfig.json's reference change like below

```"references": [{ "path": "./tsconfig.vite.json" }]```

tsconfig.node.json vs tsconfig.json
-> tsconfig.json is for src
-> tsconfig.node.json is for vite

```js
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```
