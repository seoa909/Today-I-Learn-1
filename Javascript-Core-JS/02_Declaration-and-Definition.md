# Declaration and Definition

basic workflow of declaration of variables.
- get empty space in variables area
- name the area as variable name
- save values of variable in data area
- give the value's address from data drea to variable in data area. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------
```js
const number = 123
```
변수를 기본적으로 할당하는 방법은 위와 같다.

변수를 선언하고 데이터가 할당되는 기본 흐름은 아래와 같다.

1. 변수 영역에서 빈 공간을 확보하고  
2. 확보한 공간의 식별자를 number로 지정  
3. 변수 영역이 아닌 데이터 영역의 빈 공간에 123를 저장 
4. 변수 영역에서 number로 식별자를 검색
5. 데이터 영역에서 생성한 문자열의 주소를 number식별자로 검색한 변수 영역에 대입

쉽게말해서
- 변수를 저장하는공간, 데이터를 저장하는공간 이렇게 두개가 있다.
- 우리가 변수를 선언하면,
- 컴퓨터는 변수를 저장하는 공간에 새로운 공간이 필요하다고 알려주고
- 우리가 선언한 값은 데이터를 저장하는 공간에 저장한다.
- 그 후에 변수를 저장하는공간에 number라는 이름으로
- 데이터를 저장하는 공간의 주소를 준다.
