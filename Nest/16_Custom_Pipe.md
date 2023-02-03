# 16. 커스텀 파이프 제작

- Pipe Transform을 구현해야한다.
 - 모든 파이프에서 가지고 있어야하는 인터페이스다.
 - transform() 이라는 메소드를 필요로한다.
  - 2개의 파라미터를 갖는다. (이 부분은 실제 코드 참고)
  - 1: 처리가 된 인자의 value
  - 2: 인자에 대한 메타데이터를 포함한 객체

# 콘솔 띄워서 transform()의 파라미터 
- pipes/boards-status-validation.pipe.ts
- 콘솔을 띄워본 결과, value에는 그냥 내가 body에 실어 보낸 value가 return 됬고,
- metatype에는 ```{ metatype: [Function: String], type: 'body', data: 'status' }``` 이렇게 나왔다.

```js
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    return value;
  }
}

```
- 컨트롤러
```js
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/boards-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}

```

# 적용해보기
- Status에 PUBLIC, PRIVATE만 오게 하기
- pipe 코드
```JS
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';
import { BadRequestException } from '@nestjs/common/exceptions';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in the status option`);
    }

    return value;
  }
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

```

# 결과
![image](https://user-images.githubusercontent.com/59503331/216705367-5bead828-8d80-4cec-8570-74aa5598d072.png)
