# 태블로는 api v3로 가져오는걸 추천한다.
# jwt 토큰을 가져와야지, 항상 로그인을 안해도 된다.


1. 태블로 cloud 로그인 해서, setting -> connected app -> create 해서 하나 생성한다. (driect trust로)
<img width="709" alt="aa" src="https://user-images.githubusercontent.com/59503331/210412456-758b6a74-c174-434b-9567-81c857f11737.png">
2. secret 관련 id, value 를 generate 한다 - 아래 gif 참고 (env에도 미리미리 등록하자) => 태블로 로그인 아이드를 username으로 등록
https://user-images.githubusercontent.com/59503331/210412479-06e44191-96b0-423d-a801-d021d70b5b5a.gif

3. 서버
- 컨트롤러
```js
const getTableauJWT = (req: Request, res: Response) => {
    const uuid = uuidv1();
    const timenow = new Date().getTime();
    const expiry = new Date().getTime() + 5 * 60 * 1000;
    var token = jwt.sign(
        {
            iss: process.env.TABLEAU_CLIENT_ID,
            sub: process.env.TABLEAU_USERNAME,
            aud: "tableau",
            exp: expiry / 1000,
            iat: timenow / 1000,
            jti: uuid,
            scp: ["tableau:views:embed", "tableau:metrics:embed"]
        },
        process.env.TABLEAU_SECRET_VALUE,
        {
            algorithm: "HS256",
            header: {
                kid: process.env.TABLEAU_SECRET_ID,
                iss: process.env.TABLEAU_CLIENT_ID
            }
        }
    );
    res.send(token);
};
```
- 라우터
```js
router.get("/tablejwt", verifyController.getTableauJWT);
```

- 포스트맨에서 실험해보기


4. 클라
- data fetching 하는건 평소처럼 리액트쿼리나 리덕스로 하면됌
- 차트그리기
- index.html에 모듈추가
```js
<script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
```
- 내가사용할 위치에 차트 추가: src는 내 차트가 있는곳에서 share로 가져온 url, token은 아까 만든 jwt 토큰=> 모듈 가져오는데 빨간줄 에러 보기싫어서 ignore 키워드
```js
 {/* @ts-ignore */}
  <tableau-viz
    id="tableauViz"
    width="80vw"
    height="82vh"
    src={VITE_TABEAU_TEST}
    device="Desktop"
    toolbar="hidden"
    token={jwtToken}
  />
```
