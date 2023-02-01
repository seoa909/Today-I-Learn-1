# 01. Next.js Start

- Express와 같은 서버 프레임 워크 사용.
- type, oop functional programming 등 지원
- TDD

# 설치
### nestjs/cli  => global
- ```npm i -g @nestjs/cli```

### 프로젝트 시작
- ```nest new ./ ```

### 시작 명령어
- ```yarn/npm run dev```

# 폴더 및 파일 설명
- nest-cli.json: nest 프로젝트 설정 json 파일
  - "sourceRoot": "src", 에서 baseURL 정의
- tsconfig.build.json: 빌드할때 필요하고, exclude에 빌드시 필요없는 파일 명시 가능

# 평범한 flow
- 모듈을 만들면, 모듈은 서비스와 컨트롤러를 연결해 준다.
- 서비스는 클래스로만들어지고, 컨트롤러에서 서비스에 접근해서 필요한 서비스들을 가져와서 사용한다.
