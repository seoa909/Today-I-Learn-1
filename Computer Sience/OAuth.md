# OAuth (Open Authorization)
- It's a process through which an application or website can access private data from another website. 
- It provides applications the ability to "secure designated access.

** Simply, SNS autorization is OAuth

# Background
- In the traditional method, before OAuth, sites ask for the username and password combination for login and use the same credentials to access your data.
- With OAuth flow, instead of sending the username and password to the server with each request, the consumer sends an API key ID and secret. 

# Workflow
![image](https://user-images.githubusercontent.com/59503331/185188170-e260fd6b-281a-446c-9720-7d47998363f7.png)

# OAuth1.0 vs 0Auth2.0
- https became mandatory
- OAuth1.0 has only one authorization method, but OAuth2.0 has more.
- OAuth 2.0 was to explicitly separate the roles of the authorization server from the API server. 

----------------------------------------------------------------------------------------------------------------------------------

# OAuth 란?
- 별도의 회원가입 없이 로그인을 제공하는 플랫폼의 아이디만 있으면 서비스를 이용 할 수 있고,
- 외부 서비스에서도 인증을 가능하게 하고 그 서비스의 API를 이용하게 해주는 것
- 이러한 매커니즘은 구글, 페이스북, 트위터 등이 사용하고 있으며 타사 애플리케이션 및 웹사이트의 계정에 대한 정보를 공유할 수 있도록 허용해준다.

** 간단히 말해서 소셜로그인이 OAuth다.

# 등장하게 된 배경?
- third party Application에 아이디와 비밀번호를 제공하고 싶지 않은 요구
- 개인정보를 여러 곳에 입력하면서 피싱에 둔감해지고 무엇보다 Application이 안전하다는 보장이 없기 때문에 보안에 취약

- 그 결과, Twitter의 주도로 OAuth 1.0이 탄생하였습니다.

- 종합
  - 비밀번호 인증방식의 문제
  - 신뢰: 사용자가 애플리케이션에 ID/PW를 제공하기 꺼려함
  - 피싱에 둔감해짐: 각 종 애플리케이션들에 ID/PW 를 계속 제공하는 경우
  - 접근범위가 늘어남에 따른 위험 부담: ID/PW를 모두 알고 있는 애플리케이션은 모든 권한을 가짐
  - 신뢰성의 제한: PW 를 변경한다면 애플리케이션은 동작을 하지 못하게 됨
  - 폐기문제: 권한을 폐기할 수 있는 유일한 방법이 PW를 변경하는 것
  
# OAuth 2.0의 등장
  - 달라진 점
    - 기능의 단순화, 기능과 규모의 확장성 등을 지원하기 위해 만들어 졌다
    - 1.0a는 만들어진 다음 표준이 된 반면 2.0은 처음부터 표준 프로세스로 만들어짐.
    - https가 필수여서 간단해 졌다.
    - 암호화는 https에 맡김.
    - 1.0a는 인증방식이 한가지였지만 2는 다양한 인증방식을 지원한다.
    - api서버에서 인증서버를 분리 할 수 있도록 해 놓았다.
    
# 작동방법(간단)
  - 사용자가 서비스에서 로그인버튼을 누르면 서비스에서 OAuth를 제공해주는 사이트의 redirect주소로 이동시켜준다.
  - 그 주소에서 요청토큰을 요청하고 지급받는다.
  - 사용자가 요청토큰을 다시 서비스에 주면서 서비스는 그 토큰을 토대로 인증확인 후 서비스를 제공한다.
  
- 토큰 종류
  - Access Token은 만료시간이 있고 끝나면 다시 요청해야 한다.
  - Refresh Token은 만료되면 아예 처음부터 진행해야 한다.
    
![123](https://user-images.githubusercontent.com/59503331/185186873-8d175ef3-ae3a-43e1-8a7e-c8b4d15d7608.png)
