# 02. Module

# 모듈이란
- App Module (root module) 안에 여러 모듈이 연결된다.
- 각 모듈들은 Controllers, Services 등을 갖는다.
- App Module은 무조건 한개 이상 (Next.js가 시작하는 시작점)
- 모듈은 singleton 이기 때문에, 여러 모듈간의 인스턴스 공유가 가능하다 (*중요)

# 모듈 생성
- 대부분의 nest 파일들은 명령어로 실행한다.
- ```nest g module 모듈이름```
- 명령어로 모듈을 생성하면, ```app.module.ts```의 imports에 모듈이 자동으로 추가된다.

