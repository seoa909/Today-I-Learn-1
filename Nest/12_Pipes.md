# 12. Pipes 

- 파이프는 @Injectable 데코레이터로 주석이 달린 클래스이다.
- data Transformation / Validation을 위해 사용.
- 클라이언트에서 서버로 로그인 데이터를 보낸다 가정했을때, 유효성검사가 없으면 
- 잘못된 정보라도 일단 보내게 된다.
- 하지만, pipe를 설정해놓으면 Error Handling이 가능해진다.


# 파이프 사용하는법(3가지)
- Handler-level Pipes
  - @UsePipes() 라는 데코레이터를 사용
  - @Get, @Post등 메소드 전체를 핸들링함
  ```js
   @Delete('/:id')
   @UsePipes(pipe)
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
  ```
 
- Parameter-level Pipes
  - 특정한 파라미터에게만 적용이되는 파이프
  ```js
   @Delete('/:id')
  deleteBoard(@Param('id') id: string, parameterPipe): void {
    this.boardsService.deleteBoard(id);
  }
  ```
  
- Global-level Pipes
  - 클라이언트에 들어오는 모든 요청에 적용.
  - 가단 상단 영역인 main.ts에 적용하면 됌
  ```js
  
  async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes);
  await app.listen(3500);
  }
  bootstrap();
  ```

# 기본 파이프
- 파이프는 커스텀으로 만들어도 되지만, Nest가 제공해주는 6가지 기본 파이프도 있다.
- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe
- 예제: 아래처럼 number가 와야하는데 id에, string이 올 경우 에러처리를 해준다.,
```js
 @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Board {
    return this.boardsService.getBoardById(id);
  }
```

