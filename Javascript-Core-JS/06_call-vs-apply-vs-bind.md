# Call vs Apply vs Bind?

- example 
```js
let name =  {
    firstname : "Kevin",
    lastname : "Kim",
}
printFullName =  function(hometown,company){
    console.log(this.firstname + " " + this.lastname +", " + hometown + ", " + company)
}
```

- Call invokes the function and allows you to pass in arguments one by one.
```js
printFullName.call(name,"Seoul","Korea"); // Kevin Kim Seoul Korea
```

- Apply invokes the function and allows you to pass in arguments as an array.
```js
printFullName.apply(name, ["Seoul","Korea"]); // Kevin Kim Seoul Korea
```
- Bind returns a new function, allowing you to pass in a this array and any number of arguments.
```js
let printMyNAme = printFullName.bind(name,"Seoul","Korea");
printMyNAme(); // Kevin Kim Seoul Korea
```

# call 메서드
- call() 함수는 함수객체에 미리 정의되어 있는 함수로 첫번째 인자로 객체를 주는데
- call()을 호출하는 함수가 인자로 주어진 객체에 딸려 있는 객체 처럼 동작

```js
const koGreeting = {
	greeting : "안녕",
	name : "홍길동",
    // 함수안에 이런 함수가 하나 더 있다.
	sayHello: function() {
		return this.greeting + ", " + this.name;
	}
};

const enGreeting = {
	greeting: "Hello",
	name: "HongKilDong"
};

//그냥 부를경우 안녕 홍길동이 나온다.
console.log(koGreeting.sayHello());
// 아래처럼 할 경우, 영문 홍길동을 불러줄 수 있다.
console.log(koGreeting.sayHello.call(enGreeting));
```

# apply 메서드
- apply() 메소드는 call() 메소드와 기능은 동일 
- 차이점은 인자로 객체와 인자배열을 받는다는 것이다.
```js
function foo(lang, name) {
    if(lang === "ko") {
        console.log(this.koHello + name);
    } else {
        console.log(this.enHello + name);
    }
}

var greeting = {
    koHello: "안녕 ",
    enHello: "Hello ",
};

// foo 함수의 this에 binding한다.
foo.call(greeting, "ko", "홍길동"); // 안녕 홍길동
foo.apply(greeting, ["en", "HongGilDong"]); // hi honggildong
```

# bind 메서드
- bind함수가 call, apply와 다른 점은 함수를 실행하지 않는다는 점이다. 대신 bound함수를 리턴한다.
```js
function foo(lang, name) {
    if(lang === "ko") {
        console.log(this.koHello + name);
    } else {
        console.log(this.enHello + name);
    }
}

var greeting = {
    koHello: "안녕 ",
    enHello: "Hello ",
};

// greeting을 this로 사용하는 함수를 반환한다.
// 간단히 말해서 foo.bind(greeting) 얘는 혼자 못쓰고 변수에 넣어줘서 부른다.
var baz = foo.bind(greeting);

// 근데 이걸 변수라고는 안하고, bound함수 라고 한다.
baz("en", "HongGilDong");

// 인자의 일부를 미리 셋팅할 수 있다
var bar = foo.bind(greeting, "ko");
bar("홍길동");
```

# name 프로퍼티
- bind 메서드를 적용해서 새로 만든 함수는 한 가지 독특한 성질이 있다.
- name 프로퍼티에 동사 bind의 수동태인 bound라는 접두어가 붙는다.
```js
var func = function(a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func - 보통함수 이름 호출할때
console.log(bindFunc.name); // bound func - 바운드함수 이름 호출할때
```

# 화살표 함수의 예외사항
- 화살표 함수 =>는 실행 컨텍스트 생성 시 this를 바인딩 하지 않는다.
- 즉 화살표 함수 => 내부에는 this가 아예 없으며, this에 접근하고자 하면 스코프체인상 가장 가까운 this에 접근한다.

```js
조금 어렵고 헷갈리면, 
그냥 편하게 화살표 함수를 쓰면 내가 의도한 바로 그 this가 바인딩되는구나! 
하고 생각
```

# 총정리
- 전역공간에서의 this는 전역객체를 참조 (브라우저에서는 window, Node.js에서는 global)
- 함수를 메서드로 호출한 경우 this는 메서드 호출 주체를 참조 (메서드명 앞의 객체)
- 함수를 함수로 호출한 경우 this는 전역객체를 참조 (메서드의 내부함수에서도 동일)
- 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바를 참조
- this가 정의되어 있지않다면 전역객체를 참조
- class 함수에서 this는 생성될 instance를 참조
- 위 규칙에 부합하지 않는 경우 명시적 this 바인딩 규칙으로 예측할 수 있습니다.

- call, apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출
- bind 메서드는 this 및 함수에 넘길 파라미터를 일부 지정해 새로운 함수를 만듭니다.
- 콜백 함수를 반복 순회, 호출 하는 일부 메서드는 별도의 인자로 this를 받기도 합니다.
  - map(callback[, thisArg]), forEach(callback[, thisArg])
등등
- 콜백이란?
  - 함수가 끝나고 난 뒤에 실행되는 함수.
