토큰을 어디에 저장할까 하다가, 쿠키나 로컬에 저장을 했을경우,

보통 axios로 토큰을 헤더에 끼워서 서버에 전송해 준다.

그러면 서버는 토큰을 확인해서 유저 데이터를 찾던지, 아니면 어디어디에 access 할 수 있게 열어준다.

그리고 이 토큰을 삭제함으로서 로그아웃을 완성한다.

# 문제: 만약의 토큰값을 임의로 변경했을경우?

수정되었지만, 토큰이 존재함으로서 우리는 token === undefinend 일때 로그인페이지로 navigate 할 수 없다.

토큰이 수정되었으므로, 원하는 데이터를 받을 수 없다.

그래서 여러 방법을 생각하다가, setTimeout을 쓰기로 했다.


```js
 const auth = cookie.get("Authorization");
  useEffect(() => {
    if (auth === undefined) {
      navigate("/");
    }
    const timer = setTimeout(() => {
      if (data?.isLogin !== true) {
        cookie.remove("Authorization");
        navigate("/");
      }
    }, Count.LOGOUT_IN_5SEC);

    return () => {
      clearTimeout(timer);
    };
  }, [auth]);
  ```

아래 코드처럼 만약에 auth가 비어있으면 => 로그아웃 된거니까 '/' 페이지로

만약에 내가 정한 시간초 후에 내가 가져올 데이터의 (데이터는 그냥 평범한 getData()로 서버 통신으로 가져왔다.)

로그인값이 true가 아닐경우 -> 쿠키삭제 그리고 -> 페이지 이동 (페이지 이동은 중복이지만, 안전성을 위해 한번 더 사용)
