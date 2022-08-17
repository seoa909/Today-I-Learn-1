# Clean Code & Refectoring

Clean Code and Refectoring are similar but different.

- Clean Code:
  - The Readability is good.
    - Good Naming
    - No Errors, Warnings
    - No Duplicated
    - Less Dependency
    - One Class One Work
    
  - As a result, Clean Code is for anyone else who work with me.
    - example in js
    ```js
    // bad
    const $$$ = ($, $$) => {
      return $+$$;
    }
    
    // good
    const Sum = (a, b) => {
      return a + b;
    }
    ```
    
- Refectoring:
  - Restructure the code without changing functionings for improvement 
    - Refectoring needed?
      - Duplicated Codes
      - Long Methods
      - Huge Classes
      - Switch ~ Case
      - OOP Codes
    
  - Sometimes our codes' Readability is too low, and Refectoring is to make codes' Readability better.
  
Conclusion?
Refectoring > Clean Code
Clean Code is only for improving readability but Refectoring is for maintenance work including Clean codes etc.
It is important that well-structure the code for Clean Code, Refectoring is usually used after we see the results of our works.

------------------------------------------------------------------------------------------------------------------------------------------------------

클린코드와 리팩토링은 의미만 보면 비슷할 수 있지만, 둘은 다르다.

- 클린코드:
  - 가독성이 높은 코드
    - 네이밍이 잘 되어야 함
    - 오류가 없어야 함
    - 중복이 없어야 함
    - 의존성을 최대한 줄여야 함
    - 클래스 혹은 메소드가 한가지 일만 처리해야 함
    
  - 쉽게말해서 누가보던지간에, 알아보기 쉬운 코드를 쓰는게 클린코드다
    - 예제) js
    ```js
    // 나쁜예제
    const $$$ = ($, $$) => {
      return $+$$;
    }
    
    // 좋은예제
    const Sum = (a, b) => {
      return a + b;
    }
    ```
    
- 리팩토링:
  - 프로그램의 외부 동작은 그대로 둔 채, 내부의 코드를 정리하면서 개선하는 것
    -리팩토링이 필요한 코드는?
      - 중복 코드
      - 긴 메소드
      - 거대한 클래스
      - Switch 문
      - 절차지향으로 구현한 코드
    
  - 쉽게말해서 가독성이 떨어지는 부분이 존재한다. 이 부분을 개선시키기 위해 필요한 것이 바로 리팩토링이다.
  
  - 리팩토링 하는이유? 
    - 성능향상도 있지만 성능향상 부분은 클린코드라고 해도 좋을거 같다
    - 유지보수가 메인 이유다
    
결론?
리팩토링 > 클린코드
클린 코드는 단순히 가독성을 높이기 위한 작업으로 이루어져 있다면, 리팩토링은 클린 코드를 포함한 유지보수를 위한 코드 개선이 이루어진다.
클린코드와 같은 부분은 설계부터 잘 이루어져 있는 것이 중요하고, 리팩토링은 결과물이 나온 이후 수정이나 추가 작업이 진행될 때 개선해나가는 것이 올바른 방향이다.
