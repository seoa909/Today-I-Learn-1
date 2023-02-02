# 08. Data Transfer Object

- DB에서 데이터ㅏ를 얻어서 Service나 Controller로 보낼때 사용하는 객체
- 데이터가 네트워크가 전송되는 방법을 정의하는 객체이기도 하다.
- 공식문서는 interface보단 class를 이용해서 구축하는걸 추천
- DTO 사용이유
  - 유효성체크에 효율적
  - 더 안정적인 코드로 만들어줌 
  - board를 만들때, title과 description을 받아서 사용하고 있는데, 만약 100군데에서 해당 property들을 불러주고 있는데,
  - pm이 title말고 name으로 바꿔주세요 라고 하면, title을 모두 찾아서 name으로 바꿔야하는 불편함이 있다.
  - 이러한 경우, DTO를 사용해서 문제해결가능


# dto 생성
- 모듈안에 dto 폴더를 만들고, 해당 폴더안에 ```create-board.dto.ts``` 생성
```js
/* eslint-disable prettier/prettier */
export class CreateBoardDto {
  title: string;
  description: string;
}

```

# 컨트롤러, 서비스 변경
```js
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}

```

```js
import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description } = CreateBoardDto;
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
