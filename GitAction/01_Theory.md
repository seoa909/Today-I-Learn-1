# 02_Theory

- github에서 제공되어지는 컴퓨터 시스템 및 소프트웨어의 자동화를 제공하는 도구
---------------------

# CI/CD?
- CI 는 지속적인 통합(continuous integration)으로 개발하면서 코드 통합을 지속적으로 진행하면서 품질을 확인, 모든 프로젝트가 끝난 후에 코드의 품질을 관리하는 단점을 해소하기 위해 나타난 개념, 여러 명의 개발자가 한 프로젝트를 진행 할 때 수시로 각자의 작업들을 확인하며 협업
- CD는 지속적인 배포(continuous deploy/delivery)로 소프트웨어가 항상 신뢰 가능한 수준에서 배포될 수 있도록 지속적으로 관리

- 즉, CI 과정을 통해 개발 중에 지속적으로 코딩 빌드와 테스트를 하고 이를 거친 코드는 CD 과정으로 배포에 반영
![aaa](https://user-images.githubusercontent.com/59503331/211092848-58868e11-36f2-4e8f-a5ce-46dd3b8d825b.png)

- ---------------------

# yml 파일? (야믈이라고 읽는다)
- 가독성이 좋아 가벼운 마크업언어로 사용
- JSON이랑 비슷하게 key value 형식으로 저장하는 느낌


#### 문법
- 주석은 `#`
- 문서의 시작은 `---`
- 문서의 끝은 `...`
- int, str, bool 형을 지원. str만 큰 따옴표필요.
- 줄바꿈을 지원합. 주로 파이프(`|`)를 사용. `>`를 사용하면 줄바꿈을 무시.
- key, value가 여러개면 아래와 같음
```js
key: 
  key1:
    key2:
      key3:
        key4: value
  ```
- 변수 사용은 ```foo: "{{ variable }}"```
- 조건문 사용은 ```if: ${{ success() }}```


- 문법 공식문서
- https://docs.github.com/en/actions/learn-github-actions/contexts
