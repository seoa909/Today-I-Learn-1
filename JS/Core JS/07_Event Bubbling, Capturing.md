# Event Bubbling, Capturing
- Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event.
  - With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
  - With capturing, the event is first captured by the outermost element and propagated to the inner elements.
---------------------------------------------------------------------------------------------------------------------------------------------------------
- 이벤트 버블링 - 어떤 요소에 대한 이벤트가 발생했을 때, 해당 요소의 최상위 부모까지 이벤트가 전달되어지는 과정
 ```js
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
가장 안쪽의 p태그 를 클릭하면 순서대로 다음과 같은 일이 일어난다.
- p태그에 할당된 onclick 핸들러가 동작합니다.
- 바깥의 div태그에 할당된 핸들러가 동작합니다.
- 그 바깥의 form태그에 할당된 핸들러가 동작합니다.
- document 객체를 만날 때까지, 각 요소에 할당된 onclick 핸들러가 동작합니다.
  
![Untitled](https://user-images.githubusercontent.com/59503331/186257480-d6529d62-7058-4bd0-8c23-0b1456e887fe.png)

- 이벤트 캡쳐링 - 최상위 태그에서 해당 태그를 찾아 내려간다.

![Untitled (1)](https://user-images.githubusercontent.com/59503331/186257482-9a1c4118-2ebd-408e-ac5c-300d4948a9a9.png)


- 이벤트 버블링이나 캡처링을 차단 하고 싶을때 e.stopPropagation을 호출하면 이벤트 전파를 막고 해당 이벤트만 실행시킬 수 있다.


```jsx
const clickEvent = (e) => {
  e.stopPropagation();
};
```
