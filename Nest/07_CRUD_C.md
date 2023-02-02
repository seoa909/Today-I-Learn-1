# CRUD 의 C 기초

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
