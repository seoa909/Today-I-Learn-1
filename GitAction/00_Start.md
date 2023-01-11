# Start

1. 새 깃헙 레포 만들고, action tab으로 간다.

2.아래 사진의 동그라미 눌러서 손수 제작

![w](https://user-images.githubusercontent.com/59503331/211092101-638cb5bd-565f-40a9-887a-61b1ff62c712.PNG)

3. 아래 코드 복붙

```js
name: helloGithubAction
 
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
     # run 뒤에는 실제 작동하는 코드를 넣어야 합니다.
    - name: hello world 출력!!
      run: echo Hello, world!
    - name: 디렉토리 출력!!
      run: ls -al
    - name: 파이썬 버전 출력!!
      run: python -V
    - name: 파이썬 실행
      run: python 'test.py'
```

4. 깃헙 최상단에 test.py 파이썬 파일 하나 만들고 아래 코드 복붙하고 저장

```js 
print("test")
```

5. 다시 action 탭 가서 workflow에 있는거 클릭해서 빌드가 위의 순서대로 되는지 체크
