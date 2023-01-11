# 05_env

환경변수는 저번에 깃헙 토큰 가져온듯이 가져와도 되지만,

변수처럼 선언해서 쓸수도 있다. 아래 참고

```js
name: sub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: 1. 변수출력
      env:
        NAME: 'kevin'
        AGE: 10
        HUMAN: true
        ID: ${{ github.actor }} 
      run: | 
        echo "내 이름은 $NAME 입니다."
        echo "내 이름은 $NAME, 내 아이디는 $ID 입니다."
        echo "내 이름은 $NAME, 내 아이디는 $ID 입니다. 제 나이는 $AGE이고, 휴먼 : $HUMAN 입니다."
 ```
