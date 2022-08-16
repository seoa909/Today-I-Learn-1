## Data Type

JS has two major Data Types
- primitive type
  - number, string, boolean, null, undefined, Symbol
- reference type
  - object, Array, Function, Date, RegExp, Map, WeakMap, Set, WeakSet

What is Differences? 
- primitive type: 
  - When we declare a primitive data type in JavaScript, it is stored on a stack. 
  - A stack is a simple data structure that the computer uses to store and retrieve data quickly.
  - When we assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value and assigns it to the variable. 
  - It means that changing the value in one variable does not affect the other.
  
- reference type:
  - Copying a reference from one variable to another creates a reference so that two variables refer to the same object. 
  - This means that changing the object via one variable reflects in another variable.

Conclusion?
- All primitives are immutable(The variable may be reassigned to a new value, but the existing value can not be changed)
-------------------------------------------------------------------------------------------------------------------------------------------------

JS는 두가지 크게 2가지 데이터 타입이 있다.
- 원시타입
  - number, string, boolean, null, undefined, Symbol
- 참조타입
  - object, Array, Function, Date, RegExp, Map, WeakMap, Set, WeakSet

둘의 차이
기본형:
- 원시타입을 선언하게되면 그거는 stack에 쌓이게 된다 (stack은 기본 자료구조로, 컴퓨터에 저장했다 빼서쓰기에 빠르다.)
- 다른 값에서부터 값을 가져와서 할당할때, '복사'가 이루어 진다.
- 다시말해서, 값을 복사해도 원래 있던 값에는 영향이 전혀 없다.
참조형: 
- 다른 값에서부터 값을 가져와서 할당하면, '참조;가 이루어진다.
- 값을 참조하게되면, 원래 있던 값에 영향이 있다. 즉, 새로만든 데이터로 값을 변경하게 되면 원래 있던 값도 같이 변경이 된다.
![image](https://user-images.githubusercontent.com/59503331/184889410-eeb5b3a4-cfbc-4bb1-af75-415fc2fe2c9b.png)

결론
기본형이나 참조형 모두 무언가를 '복제' 하긴 하는데, 기본형은 데이터 값만 딱 가져오고 새로운 메모리에 저장하지만, 참조형은 데이터 값만 가져오는게 아니라 데이터가 저장된 메모리 주소마저도 가져온다. (그래서 기본형은 불변성 성질을 가지고 있다.)
