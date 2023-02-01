# 03. Controller 

# 컨트롤러란
- 컨트롤러: 들어오는 요청을 처리하고, 클라이언트에 응답을 반환한다.
- @Controller 데코레이터로 클래스를 데코레이션 하여서 정의한다.
- 내부에서 @Get, @Post, @Patch, @Delete등의 Handler들이 클래스의 메소드를 데코레이션 한다.

# 컨트롤러 생성
- ```nest g controller 모듈이름```
- 명령어로 Controller가 만들어 지는 과정
  - cli는 일단 먼저 모듈이름의 폴더를 찾는다.
  - 그리고 모듈 폴더안에 Controller 파일 생성.
  - 모듈폴더안에서 모듈파일을 찾는다.
  - 모듈파일에다가 controller를 추가해준다.
