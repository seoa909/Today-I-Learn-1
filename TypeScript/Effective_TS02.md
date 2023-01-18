# 이펙티브 타입스크립트 02


- 타입에러가 나도 컴파일은 가능하다.
- 왜냐면 컴파일과 타입체크는 독립적으로 일어나기 때문. 
- 타입을 어디다 줘야할지 모를때는, 그 타입이 그 자리에 없어도 자바스크립트 문법적으로 맞는지 본다 
- ex) If(shape instanceof xxx) 이런 구문에서 xxx에 타입을 주면 안된다. 
- 보통 타입은 type 혹른 interface로 정의하는데 이들은 컴파일이 되지 않는다 그래서 컴파일 후에 xxx를 찾을수 없음이 된다.

# 타입종류넣기 아래처럼 여러개 같이 가능
```js
interface rect {
 kind: “네모”
 width: “string”
}

interface tri{
 Kind:”세모”
 width:”string”
}

type shape = rect | tri;

// 들어오는 타입에따라 로직변경
Function example(shape:shape){
 If(shape.kind===“rect”){}
}
```
