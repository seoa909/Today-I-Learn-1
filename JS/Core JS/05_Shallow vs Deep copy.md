# Shallow copy
- A shallow copy of an object is a copy whose properties share the same references 
- (point to the same underlying values) as those of the source object from which the copy was made. 
- As a result, when you change either the source or the copy, you may also cause the other object to change too

# Deep copy
- A deep copy of an object is a copy whose properties do not share the same references 
- (point to the same underlying values) as those of the source object from which the copy was made. 
- As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too

------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 얕은복사

- 객체가 담겨있는 변수를 다른 변수에 할당하면 call by reference (데이터 복사가 아닌 참조)가 일어나게 되어, 한 변수의 데이터를 변경하면 다른 변수의 데이터도 함께 변경이 된다.
```js
const person1 = {name:'kevin'};

const person2 = person1;

person1.name = 'kim';

// result

person2.name // 'kim'

person1 === person2; // true - 같은 데이터 주소를 바라보고 있는 두 변수
```

즉, 다시말해서 객체를 그냥 복사를 하게되면, 원래객체와 복사된객체가 서로 같은 주소를 사용한다.

# 깊은복사
- 한 데이터의 공유가 아닌, 똑같은 구조의 객체를 하나 더 생성하여 따로 사용하고자 할 때 사용한다.
- 방법은 Object.assign()을 이용하던지 Spread 문법을 이용한다.
-
```js
// Spread 문법
const Obj1 = {a:1, b:2};
const Obj2 = {...Obj1};

// result

Obj2 // {a:1, b:2}

Obj1 === Obj2 // false
```

# 깊은복사의 함정
- 두 번째 Depth 이상의 요소들은 참조 값을 전달하는 데이터는 얕은 복사(Shallow copy)가 된다.
- Object.assign(), Spread 문법 둘다 동일하게 이런 함정이 있음.
- 
```js
// Spread 문법
const Obj1 = { a: { b: 1 } };
const Obj2 = { ...Obj1 };

// result

Obj2 // { a: { b: 1 } }

// 제일 바깥 depth는 깊은 복사가 되지만
Obj1 === Obj2 // false

// 얕은복사가 진행됌
Obj1.a === Obj2.a // true...!!
```

# 해결방법
- 재귀적으로 깊은 복사를 수행 
  - 재귀함수를 만들경우 Depth의 길이가 늘어날 수록 Time Complexity(시간 복잡도)가 복잡해 진다.
- Lodash의 cloneDeep 사용
  - 현재로서는 제일 좋은 방법 같다.
  - 라이브러리를 받아야한다.
- JSON.parse()와 JSON.stringify()함수 사용
  - JSON.stringify 함수를 이용해서, Object 전체를 문자열로 변환 후, 
  - 다시 JSON.parse 함수를 이용해서 문자열을 Object 형태로 변환한다. 
  - 그러면 문자열로 변환하는 순간 참조 값이 끊기기 때문에 새로운 Object로 만들어 사용할 수 있다.   
  - JSON 함수는 엄청나게 리소스를 잡아먹어서 성능적인 부분에서 매우 좋지 않다.
