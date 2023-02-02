# CRUD 의 R 기초

- Service
```js
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}

```

- Controller
```js
import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}

  @Get('/')
  getAllBoards() {
    return this.BoardsService.getAllBoards();
  }
}

```

# 정리
- 클라이언트가 요청을 보내면, 컨트롤러로 가며, 컨트롤러에서는 이제 요청 경로에 따라서 해당 핸들러로 안내해준다.
- 그러고 핸들러는 그 요청을 처리하게위해 서비스로 들어가게되며, 서비스가 요청을 처리한다.
- 처리 후 컨트롤러로 리턴값을 보내주고, 컨트롤러는 다시 그 리턴값을 클라이언트로 돌려준다
- 클라이언트 -> 컨트롤러 -> 서비스 -> 컨트롤러 -> 
