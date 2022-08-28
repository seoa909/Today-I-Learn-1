# MonoRepo

![zxczcz](https://user-images.githubusercontent.com/59503331/187052868-486932b2-c6af-44fa-bb38-02f12c6253bc.png)

- MonoRepo 는 Monolithic Repositories 의 약자로, 하나의 리포지토리에서 여러개의 프로젝트가 구성된 것을 의미합니다.

- 장점
  - 하나의 리포지토리로 여러개의 프로젝트 관리
    - 프로젝트를 스위치해가며 개발할 필요없이 하나의 IDE에서 하위폴더로 구분된 여러 패키지들이 코드를 작성할 수 있다
  - 중첩되는 코드의 공통화
    - 여러 프로젝트들이 공통으로 사용해야 하는 로직이 있을때, 분리해서 따로 import/require 가 가능하다 
  - 중첩되는 모듈은 하나만 설치해서 사용
    - root path에만 node 를 설치하고, 필요한 곳에서 가져다 사용할 수 있다.
- 단점
  - Dependency 충돌 문제
    - 특정 패키지가 특정 버전의 모듈을 필요로 하는 경우, 충돌 가능성
  - 단일 리포지토리 문제
    - 관리하는 패키지가 증가함에 따라 오히려 가독성이나 여러가지 측면에서 비효율적
  - 긴 초기 프로젝트 설정시간
    - MonoRepo 로 포함되는 모든 프로젝트를 사용한다면 상관없지만, 그 중 일부만 필요한 경우에도 node_module 설치가 이루어 져야함.


- 관리방법
- ![zcscsadadad](https://user-images.githubusercontent.com/59503331/187052919-5806829b-a00e-4e97-983b-c95886f52ccc.png)
