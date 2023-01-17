# 이펙티브 타입스크립트 01

# 타입스크립트란, 
- 자바스크립트에서 런타임에 에러를 확인하기 위해 등장
- state 객체는 미리 타입을 정해주는게 좋음, 아래와 같이 오타같은거 체크 잘해준다.
```js
  interface Type {
    name: string;
    age: number;
  }

  const [state, setState] = useState<Type>({ name: "kevin", age: 100 });
  console.log(state.ago); // Property 'ago' does not exist on type 'Type'.
```
- 타입스크립트가 100%에러를 집어주지는 않음. 지능이 좋긴한데 탈인간급은 아님.
- ```noImplicyAny=true``` 설정을 해주는건 자바스트립트를 타입스크립트로 바꿀때 점진적으로 안전하게 바꿀수 있게 도와준다. 
- ```strictNullChecks=true```는 null/undefiend가 모든 타입에서 허용되는지 체크하는 설정, false로 주면,``` a:number = null ```이런 코드가 가능. 
- 만약 이걸 false로 하고 개발하면, undefiend는 객체가 아닙니다라는 끔찍한 런타임오류가 괴롭힘 => 그냥 설정하는게 답
