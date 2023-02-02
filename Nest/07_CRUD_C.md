# 07. CRUD 의 C 기초

# 서비스 코드
- ID는 현재 로컬에서 할 예정이라, uuid 사용 => ```yarn add uuid```
- create하면, title과 description을 받아서 보드를 생성
- 다 생성된 보드는 boards 배열에 추가한다.
- 그리고 생성된 보드가 뭔지 return 해줘서 알수 있게 한다.

```JS
import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}

```

# 컨트롤러 코드
- post 부분 생성
- post 이런 method 들은 다 import 해와야한다.
- express와 다르게 req.body가 아니라 @Body로 가져올 수 있다.
```js
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}

```

# Postman
```js
{
    "title": "title 02",
    "description": "description 02"
}
```
![image](https://user-images.githubusercontent.com/59503331/216381490-9850d870-9bec-446f-990c-84dcef4de3db.png)

