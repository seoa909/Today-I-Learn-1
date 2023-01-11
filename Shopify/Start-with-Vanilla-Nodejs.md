# Shopify + Nodejs

shopify + nodejs prac (shopify version: 3.x)
1. install
```npm install -g @shopify/cli @shopify/theme```

2. version
```shopify version```

3. yarn create @shopify/app
- node,react로 monorepo로 해줌

4. start command
```yarn dev```

5.  Press any key to open the login page on your browser(docs에 없다)
-> 터미널에서 아무거나 눌러서 로그인

6. A Shopify Partners organization is needed to proceed.(docs에 없다)
-> 터미널에서 아무거나 눌러서 새 그룹 만들기

7.shopify partners의 store에서 development store 하나 만들기 (docs에 없다)
-> 만들면 뭔가 shopify 페이지 열리는데, Setup guide 이런거 나옴
-> store password 꼭 확인하자 -> practice 이런걸로 변경

8. yarn run dev로 실행(docs에 없다)
-> https://dashboard.ngrok.com/login 가서 계정생성, 토큰생성

9. ngrok 로그인하고 아래 링크가서 토큰 받은다음에,(docs에 없다)
-> shopify 터미널에  토큰 입력

10. Have Shopify automatically update your app's URL in order to create a preview experience? (docs에 없다)
걍 always by default

11. backend.. frontend.. 이런거 보이면 연결성공

12. install(docs에 없다)
- 일단 shopify partners의 store에 잘 등록되어있나 체크
- 되있으면 패스, 안되있으면 위에 add store 누른 후 managed store 누른 다음 url 집어넣기
- 그다음에 shopfy partners에 apps라는데가 있는데 가면 아까 만든 node앱 있음
- 그거 들어가면 test your app 이런거 있는데 아래 select store 누르기
- 거기에 이제 아까 그 store 나오면 그거 눌러서 install
- shopify 관리 사이트의 Apps에 아까 그 node앱 나오면 성공 

13. example app fontend
https://shopify.dev/apps/getting-started/build-app-example/frontend

docs에 없던거
- Shopify 관리페이지에 Products 가서 상품하나 test라는 이름으로 등록해두기
- https://{shop}.myshopify.com/apps/{app-name}/qrcodes/1
 이거 주소 나같은경우는 https://practicekevintwo.myshopify.com/admin/apps/node-80/qrcodes/1 이런주소였음.
이거는 본인 shopify 관리페이지에서 app에 node앱 눌렀을때 나오는 위에 url + /qrcodes/1 이렇게 해줘야함.

14. example app backend
- index.js 에러 그냥 두기 혹은 //@ts-ignore 을 윗줄에 추가

15. connect frontend and backend
- discount도 추가해주자.

16. 에러
Tunnel bf256c0ea7e2.ngrok.io not found 이런거 뜨면

```shopify auth logout``` 한다음 다시 로그인
