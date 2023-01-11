# 03. Cron

- 일정 주기로 실행시켜줌

- 크론 문법
```js
아래처럼 총 5개의 공간에 숫자를 줄 수 있는데,

* * * * * 

순서대로(범위) 아래와 같다.
분(0-59)　　시간(0-23)　 일(1-31)　　 월(1-12)　  요일(0-7)

예를들어
1. 매 시간 30분이 될때마다 실행을 시키고 싶다.
30 * * * *

2. 매일 오전 9시에 실행
0 9 * * 0-6
```

- 문법이 어려우면 아래 링크 참고(공식문서)
- https://crontab.guru/#5_*_*_*_*
-------------------- 

- 아래는 크론 사용하는 규칙
```js
- repo마다 20개까지 workflow를 등록할 수 있습니다.
- job에 단계마다 최대 6시간 사용이 가능합니다.
- 전체 repo를 통틀어 1시간 최대 1,000번(job)까지만 실행가능합니다.
- 공개 저장소는 무료이고, 비공개 저장소는 500MB, 2,000분이 넘으면 과금됩니다.
- UTC 타임존을 사용합니다.
- 스케줄러의 지연시간이 꽤 깁니다. 10분으로 했을 경우 30분이 넘게 기다려야 하는 경우도 있으며, 사용량이 많아서 지연되는 것으로 보입니다. google에 github actions cron delay로 검색해보시면 다른 repo도 동일한 현상임을 알 수 있습니다.
```
--------------------
- 야믈파일에 크론 추가(10분마다)

```js
name: test

on: 
  schedule:
  - cron: '*/10 * * * *'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: 1. 파일 목록 출력
      run: ls -al
    - name: 2. 설치되어 있는 패키지 확인
      run: pip list
    - name: 3. pip 업그래이드
      run: python -m pip install --upgrade pip
    - name: 4. 환경 설정
      run: pip install -r requirements.txt
    - name: 5. 파이썬 실행
      run: python test.py
```

* 크론은 딜레이가 있다.
* 
