# 상황

Vite로 배포했는데, routing이 잘 안먹고, 새로고침하면 404 뜨는 에라

# 해결

### 기본경로에 vercel.json 추가
vercel.json
```js
{
    "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }]
  }
  ```
