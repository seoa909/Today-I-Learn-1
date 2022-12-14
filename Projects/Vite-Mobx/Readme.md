# Setting

```js
yarn create vite
yarn add mobx mobx-react
```

- 플젝이름에 ./로 하면 현재폴더 설치 가능

- mobx는 react에서 상태 관리를 위해 사용되는 라이브러리

![zxczxc](https://user-images.githubusercontent.com/59503331/187145269-69bea66d-18f1-44e8-bf3e-839a9cabd2d0.png)

- Actions → Observable State에 저장되어 있는 데이터들을 변화시키는 액션 함수
- Observable State → 관찰되고 있는 데이터 값들이 저장되어 있는 장소
- Compute Values → Observable State에 저장되어 있는 데이터가 변화되는 것을 알아채면 렌더링과 같은 Side Effects trigger를 전달
- Side Effects → 렌더링과 같은 Side Effects가 실행되고 실행된 Side Effects들은 다시 액션 함수가 실행되도록 이벤트 전달
  - 위의 내용을 정말 간단하게 표현하면 액션 함수가 실행되어 state값들에 변화가 발생되면 렌더링 같은 side effects들이 실행되어 그에 따른 결과들이 화면이 보이게 되는 것입니다.
  - 하지만 만약 액션 함수가 실행되어도 state값들에 변화를 주지 않는다면 더 이상 아무것도 진행되지 않게 됩니다.
- mobx의 가장 큰 특징은 자바와 같이 객체지향적인 느낌으로 프로그래밍 한다는 것.
- 그리고 redux에 비해 사용되는 방식이 간단하고 또한 복잡하지 않다는 특징.

![123123](https://user-images.githubusercontent.com/59503331/187125461-d598bd71-fc20-45e7-8bfd-ca682bd964d6.PNG)

- View: 화면이다. 화면에 input, checkbox, form 등으로 이벤트를 발생시킨다.
- Container: 
  - front에서 로직을 담당하는 메서드가 구현되어 있다. (onChange(), onClick())
  - Event data를 store로 전달한다.
- Store: 
  - Container로 부터 받은 데이터에 대해 로직을 구현하여 가공하거나 저장한다.
  - 가공한 데이터를 Repo에 보낸다.
- Repo: 
  - Store에서 받은 데이터를 Server에 REST API 송신
- Model
  - Server에서 데이터를 받고, 그 데이터를 React.js에 최적화 시킨다.
  - 최적화 된 데이터는 이제 역순으로 전달되어 최종 고객의 화면에 뿌려진다.
  
 
