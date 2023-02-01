# 04. Service & Provider

# 프로바이더란?
- 주요 아이디어는 종속성을 주입할수 있다는 것 이다.
- Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등을 프로바이더로 취급한다.
- 컨트롤러에 무언가를 제공해 주는것들을 프로바이더라고 한다.

# 프로바이더 등록하기
- 서비스나 리포지토리 등을 사용할려면 프로바이더를 등록해야한다.
- 모듈파일에 Providers 항목에 사용할 서비스등을 넣어주면 된다.

# 서비스란?
- @Injectable 이라는 데코레이터르 감싸져서 모듈에 제공된다.
- 이 서비스 인스턴스는 애플리케이션 전체에서 사용가능.
- 서비스는 주로 데이터의 유효성체크 혹은 DB에 아이템 생성 등의 작업을 처리할 때 사용한다.

# 서비스 생성
- ```nest g service 모듈이름```
- 자동으로 프로바이더에 등록된다.
- @Injectable 데코레이터가 다른 폴더에서도 해당 서비스를 부를 수 있게 해준다.

# 서비스를 컨트롤러에서 사용하기
- 생성자 생성 (접근제한자 사용)
```js
import { BoardsService } from './boards.service';
import { Controller } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}
}
```
