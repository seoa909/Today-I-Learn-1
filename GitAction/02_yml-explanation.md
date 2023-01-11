# 03_yml_explanation

### 야믈파일에 대한 설명


```js
# gitactions 이름
name: test

# push가 일어났을 경우 아래 jobs 실행
# [push, pull_request] 등과 같이 다중 이벤트 처리 가능(아래 페이지 참고)
on: [push]

# 위 이벤트가 일어났을 경우 실행될 job, 여러개 설정 가능.
jobs:
  # 작업 단위
  build:
    # 실행되는 OS, Window와 Mac OS도 제공합니다. 자세한 version은 document 참고
    runs-on: ubuntu-latest
    steps:
    # 다른 사람이 만들어놓은 action을 가지고 오는 것
    # github.com/actions/checkout 폴더 참고(깃헙에서 만든 것)
    # marketplace에서 여러 uses를 가지고 올 수 있음
    # 아무것도 없는 OS에서 자동으로 우리의 코드를 클론하고 다운받아 실행하게 해주는 소스코드
    - uses: actions/checkout@v2
    # OS에서 실행할 이름
    - name: 1. 파이썬 실행
    # OS에서 실행할 명령어
      run: python test.py
   ```
   
   
# 필요한 패키지 다운받는거 세팅
- root 경로에 requirements.txt 파일 생성 그리고 아래 두줄 추가
```js
beautifulsoup4
requests
```

yml 파일 설정
```js
name: helloGithubAction

on: [push]

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

# 파이썬 파일로 크롤링 진행 (리디북스에서 책 이름 가져오기)
```js
import requests
from bs4 import BeautifulSoup

url = 'https://ridibooks.com/category/new-releases/2200'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')

bookservices = soup.select(
    'main > div > section > ul > li > div > div > div > h3 > a')
for no, book in enumerate(bookservices, 1):
    print(no, book.text.strip())

```

# 결과
![aaa](https://user-images.githubusercontent.com/59503331/211102819-95aeda88-d19f-44e2-8d72-f6b2a80c4a49.PNG)

