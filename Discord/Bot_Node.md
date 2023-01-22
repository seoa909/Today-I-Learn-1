# Nodejs로 봇 생성 (AWS-LAMBDA, AWS-CLOUDWATCH)

1. 디스코드 -> 채널편집 -> 연동 -> 웹 후크보기 -> 새 웹후크 로 간다
2. 만들어진 웹 후크의 URL을 복사해둔다 (여기 채널에 봇을 생성시킬 예정)
3. 코드
```js
const axios = require("axios");

exports.handler = async (event) => {
  // 만약 fetching 안할거면 axios 관련은 스킵한다.
  const data = await axios.get("내가 데이터를 fetching 할 사이트 => api");
  const TestDiscordChannel = "웹후크URL 아까 복사한거";
  const testAPI = {
    content: "일본만화 업데이트 목록",
    embeds: [
      {
        type: "rich",
        title: "",
        description: "",
        color: 0xb17ce9,
        fields: [
          {
            name:
              "이름추가",

            value: "보여질내용추가",
            inline: false,
          }
        ],
        footer: {
          text: `하고싶은말추가`,
        },
      },
    ],
  };
  
  // 내가 Lambda에서 실행할 친구
  if (event.bot === "test") {
    const result = await axios.post(TestDiscordChannel, testAPI);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
```

4. 람다로 이동 https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1
5. 지금 국가가 미국인데, 국가 설정 알아서
6. 함수생성
7. 이름쓰고 node12로 변경 후 생성
8. 아까 위의 코드있는곳의 파일들 (index.js, package.json, node_module, pacakge.lock.json, .env... 등등) 모두 알집으로 만든다
9. 람다에서 만든 함수 들어가서 우측에 업로드 있는데 누르고 .zip파일 업로드 클릭
10. 테스트 옆에 아래 화살표 눌러서 들어감
11. 이벤트 아래처럼 변경
```js
{
  "bot": "test"
}
```
12. 생성 후, 테스트 버튼 눌러서 디코 오나 테스트 하기
13. 성공했으면, https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#rules: 여기로 이동 (국가체크)
14. 규칙생성 -> 일정 -> cron 표현식 -> ```*/1 * * * ? *``` 이거 추가 (1분마다 실행한다는 의미, 테스트 전용)
15. 우측에 대상에 Lambda 추가 => 함수: 아까 만든 Lambda.
16. 아래에 입력구성 -> 상수Json에 ```{"bot" : "test"}``` 추가
17. 디코가 1분마다 오는지 체크
18. 디코가 잘 오면 다시 편집가서 Cron에 원하는 시간대로 변경
