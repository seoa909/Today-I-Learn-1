# 17 PostgresSQL & pgAdmin

# 설치
- PostgresSQL: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- pgAdmin: https://www.pgadmin.org/download/

- 다 설치되면 PostgresSQL은 마지막에 뭐 stack 하라는거 체크 해제하고 끄면 됌.
- 윈도우 검색창에 PSQL 치면 새로운 터미널 하나 나오는데 클릭
- 내부 들어가서 엔터만 입력하다가 비밀번호 나오면 설치하면서 설정한 비밀번호 입력함 (입력해도 아무것도 안나오는거처럼 보이는데, 실제로 비밀번호는 써지는 중임, 그냥 쓸거 다 쓰고 엔터)
- 아래 화면처럼 나오면 연결 성공
- ![image](https://user-images.githubusercontent.com/59503331/217329998-170a09f1-21be-470f-8e47-af6b085dba6f.png)

- 혹시 모르니 버전체크 ```select version();``` 

-pgAdmin 실행
- 서버생성
- ![image](https://user-images.githubusercontent.com/59503331/217330940-1c457675-5134-42d5-a0d3-5dff92d52a1a.png)
- 이름주고, connection 가서 아래처럼 입력. 비밀번호는 아까 들어올때 입력한거 누르고 저장 하면 서버가 생성된다.
- ![image](https://user-images.githubusercontent.com/59503331/217331119-0df86c81-6f50-4771-a1a6-67a8a517e1ba.png)

- 데이터베이스 생성
- ![image](https://user-images.githubusercontent.com/59503331/217331987-f961ef89-df57-4958-b066-154262c88995.png)
- 이름만 적고 저장하면 데이터베이스가 생성된다.
