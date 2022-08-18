# Abstract Factory

- Abstract Factory pattern is similar to a group of several factory methods.
- Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

-------------------------------------------------------------------------------------------------------------------------------------------------
추상 팩토리 패턴(Abstract Factory)은 여러 개의 팩토리 메서드를 그룹으로 묶은 것과 유사하다.

- 먼저 만들어야할 컴포넌트들을 추상적으로 정해놓고, 구체적인 상황이 주어지면 컴포넌트들을 구체적으로 만드는 패턴.
- 아래 사진처럼 버튼, 체크박스 등을 만들고 싶은데, window or linux 운영체제에 따라서 각자 다른 컴포넌트들을 만들어 줘야한다.
- 이럴경우 추상적으로 버튼, 체크박스 등을 정해놓고, 나중에 만들어야하는 상황이 오면 운영체제에 따라서 구체적으로 만들어 주는게 추상팩토리 패턴이다.

![aa](https://user-images.githubusercontent.com/59503331/185396685-27fc5604-b040-47b2-aafe-a161d6021b69.PNG)


# 추상팩토리 예제
```js
const operatingSystem = (type) => {
    let os = osFactory(type); // 여기서 운영체제에 따른 새 객체를 아래 공장함수에서 만들어 준다.

    // 만들어진 객체를 가지고 추가 메소드들을 실행한다.
    os.create();

    return os;
}

const osFactory = (type)  => {
    let os;
    
    if(type === 'window') os = new Window();
    else if(type === 'linux') os = new Linux();
    
    return os;
}
```
