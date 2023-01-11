# 불변성

Immutables are the objects whose state cannot be changed once the object is created.

------------------------------------------------------------------------------------------------------------------------------------------------

# 불변객체

객체가 불변하다는 것(immutable)은 객체가 최초 생성되었을 때의 값이 변하지 않고 유지된다는 의미이다.

객체의 불변성을 지키면 원본 데이터가 변경, 훼손되는 것을 막을 수 있다.

하지만 자바스크립트는 객체가 너무나도 동적이라 속성 변경이 쉽다는 단점을 갖고 있다.

원본객체에 손상이 가지않게 함수나 다른걸 이용해서 한번 돌려서 변경해주면 된다.

Immer등의 라이브러리를 쓰면 조금 더 간단할 수 있다.

```js
cosnt user = {  
 name: 'kevin',  
 gender: 'male',  
};  
  
const changeName = function(user, newName) {
    return {  
        name: newName,  
        gender: user.gender,  
    };  
};  
  
const user2 = changeName(user, 'kim');  
  
if (user !== user2) {  
 console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.  
}  
console.log(user.name, user2.name); // kevin kim  
console.log(user === user2); // false
```
