# html에서 환경변수 끌어쓰기

# vite.config.ts
- 플러그인 추가해줘야함.
```js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), htmlPlugin(loadEnv(mode, "."))],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };
});

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre" as const,
      transform: (html: string): string =>
        html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    },
  };
}

```


# 사용법
```js
 <script type="text/javascript" src="https://%VITE_TABEAU_SERVER%/javascripts/api/tableau-2.min.js"></script>

```
