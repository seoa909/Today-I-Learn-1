## Singleton

The singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. 

Reason to use?
 - in React, still not sure.
 - Other global states such as Redux can replace singleton pattern.

-------------------------------------------------------------------------------------------------------------------------------------------------
싱글톤 패턴(singleton)은 전체 시스템에서 클래스의 인스턴스를 하나만 존재하도록 하는 패턴.
보통 객체를 만들 때 하나의 생성자로 여러 개의 서로 다른 객체를 만들 수 있지만,
싱글톤에서는 단 하나의 객체만 존재하는 것이 보장.

자바스크립트에서 사용이유?
 - 리액트에서는 아직 사용이유를 못찾았다.
 - redux 등 다른 전역상태관리 라이브러리가 싱글톤 패턴을 대신 할 수 있다.

# 싱글톤 기본형
```js
const SingletonClass = (function() {
  let instance;

  function init(){ // 싱글톤 객체를 리턴할 비공개 함수
    return {
      publictMethod: function() {
        return 'public method';
      },
      publicProp: 'public variable',
    };
  }

  return {
    getInstance: function() {
      if (instance) {
        return instance; // 있으면 그냥 반환
      }
      instance = init();
      return instance; // 없으면 객체 생성 후 반환 (이해를 위해 명시적으로 나눔)
    }
  };
})();

const a = SingletonClass.getInstance();
console.log(a.publicProp, 'a'); // 'public variable'

const b = SingletonClass.getInstance();
console.log(a === b) // true
```

# 싱글톤으로 count
```js
function Singleton() {
  let count = 0;

  return {
    increasment() {
      count++;
      console.log(count);
    }
  };
}
```

아래처럼 진행해도 같은 count가 올라간다
```
s1.increasment() // 1
s2.increasment() // 2
```
