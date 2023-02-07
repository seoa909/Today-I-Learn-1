# AWS S3 로 Frontend 배포

- https://s3.console.aws.amazon.com/s3/get-started?region=us-east-1&region=us-east-1 
- 국가 설정
- 버킷생성  
  - 이름, 국가 확인하고, 아래 사진처럼 public access 체크풀고 warning에 이해했다고 체크
  - ![image](https://user-images.githubusercontent.com/59503331/217299649-9c3c2ea2-4cc7-48f8-9638-14cd24a3f042.png)
  - 생성
- 만든 버킷의 ARN 복사
![image](https://user-images.githubusercontent.com/59503331/217300058-cf0a6b3f-1bcd-488f-b588-20b6221138ff.png)

- Permission 가서 Edit
![image](https://user-images.githubusercontent.com/59503331/217300194-42913259-aa71-4c5b-bcf0-3b02070e3cff.png)


- 우상단 보안규칙 생성 클릭, 아래 사진처럼 입력후 생성 후 나오는 json 복사하기
- ![image](https://user-images.githubusercontent.com/59503331/217300393-e83c1428-d1f5-48dc-a186-9935705b2bbe.png)

 
 - 복사해서 버킷policy에 붙여넣고 Resource 제일 뒤에만 /* 추가하기
 - Properties의 제일 아래 Static website hosting enable 해주고, 시작파일 index.html로
 - 리액트가서 yarn build 해서 빌드파일 전체를 Objects 탭에가서 upload하기
 - 테스트 


* http 
