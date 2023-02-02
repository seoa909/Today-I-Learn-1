# 모델

# 모델이란?
- 모듈에 필요한 데이터가 어떤 것이 있는지 정의하기 위해 필요함
- 예를들면, 게시물일 경우, 게시물 id, 올린사람, 날짜 등등

# 모델생성
- 같은 모듈 폴더내에 파일 생성
- interface나 class를 사용해서 생성
  - interface: 변수의 타입만을  체크한다
  - class: 변수의 타입도체크하고, 인스턴스도 생성 가능

- boards.model.ts

```js
/* eslint-disable prettier/prettier */
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatue;
}

export enum BoardStatue {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
```

- boards.service.ts => 서비스, 컨트롤러에 타입 모델추가
```js
import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
```

```js
import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.BoardsService.getAllBoards();
  }
}
```
