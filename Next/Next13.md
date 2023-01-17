# 넥스트 13

- 바뀐점: page의 기본 경로, 변경, 기타 성능 향상

# 설치
- npx create-next-app -e with-tailwindcss
- 주의: next13은 console찍으면 터미널에 나온다.	

# config 설정
- app폴더 생성후,
- next.config.js를 아래처럼 변경후 타입스크립트 설치
```js
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

```

# layout 설정

- app 폴더안에 page.tsx를 하나 만들어 주고 실행을하면,
- next12가 만들어낸 pages안에 있는 애들이랑 충돌에러가 난다.

- 그러면 pages안의 index.tsx를 지우고면 app폴더안에 layout.tsx가 자동으로 생긴다.
- 만약 안생기면 아래 코드 복사
layout.tsx
```js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
```

# layout에 css 설정
- css를 pages/_app.tsx가 받고있는데 이걸 layout으로 옮길려면 일단
_app.tsx에 가서 ```import '../styles/globals.css'``` 를 지우고, layout.tsx로 옮겨준다.

- 그러고 아래 코드로 잘 되는지 테스트 해본다.
layout.tsx
```js
import React from "react";

const Home = () => {
  return <div className="text-red-500">page</div>;
};

export default Home;
```

# 중첩레이아웃 걸때
- 주요할점: 
  1. html, body, head 태그들은 최상단 레이아웃에 한번만,
  2. 그래서 두번째 부턴 아래처럼 되야함.
```js
import Header from "../Header";
import "../../styles/globals.css";

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
```

# 폰트
- yarn add @next/font
- 최상단 레이아웃에서 불러주면 된다.
- 넥스트 폰트는 구글폰트를 그냥 가져올 수 있음.
```js
import "../styles/globals.css";
import Header from "./Header";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

```

- 로컬폰트를 가져오는건 아래와 같이하고, 위와같이 className에 추가 
```js
const myFront = localFront({src: ' '})
```

# fetching
- 이미 빌드된 웹에, 정적 페이지를 새롭게 추가하거나, 업데이트 할 수 있도록 하는 Next.js 기능
- next: { revalidate: 20 },
- 최종코드
```js
import React from "react";

async function fetcher() {
  const res = await fetch(`http://spartacodingclub.shop/sparta_api/seoulair`, {
    next: { revalidate: 20 },
  });
  const data = res.json();
  return data;
}

const Home = async () => {
  const data = await fetcher();
  return (
    <div className="text-red-500">
      data fetching
      {data.RealtimeCityAir.row.map((v: any, i: number) => {
        return (
          <div key={i} className="flex">
            <p className="text-black">{v.MSRSTE_NM}</p>
            <p>{v.IDEX_NM}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

```

# ssr
```js
async function fetcher() {
  const res = await fetch(`http://spartacodingclub.shop/sparta_api/seoulair`, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
}
```
