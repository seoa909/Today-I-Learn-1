# 04_Crawling and Save It as a File
# 야믈 파일
- 아래 보면 git 이메일, name 적는데는 본인거 적어야함
- 깃헙 토큰은 발급받고 설정도 해야함 아래 링크참고
- https://zeddios.tistory.com/1047
- 만약 본인 이메일, name 모르면, 아무데나 깃헙 연동된 레포가서 ```git config user.name``` 이라 치면 이름나옴, 뒤에 ```email``` 치면 이메일나옴

```js
name: helloGithubAction

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
      with:
        # 개인 토큰을 사용할 것인지 말 것인지
        persist-credentials: false 
    - name: 1. pip 업그래이드
      run: python -m pip install --upgrade pip
    - name: 2. 환경 설정
      run: pip install -r requirements.txt
    - name: 3. 파이썬 실행
      run: python test.py
    - name: Commit files
      run: |
        git config --local user.email "@gmail.com"
        git config --local user.name " "
        git add .
        git commit -m "Run crawler and update current data"
    - name: Push changes
      uses: ad-m/github-push-action@master
      with:
        # branch: "master"
        github_token: ${{ secrets.TOKEN }}
```

# 파이썬파일
```js
import requests
from bs4 import BeautifulSoup
import json

url = 'https://ridibooks.com/category/new-releases/2200'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')

bookservices = soup.select(
    'main > div > section > ul > li > div > div > div > h3 > a')

l = []

for i, book in enumerate(bookservices, 1):
    # print(i, book.text.strip())
    l.append({
        '#': i,
        '책이름': book.text.strip(),
    })

# 파일을 한 번 쓴다.
with open('data.js', "w", encoding="UTF-8-sig") as f_write:
    json.dump(l, f_write, ensure_ascii=False, indent=4)

# 파일을 다시 읽는다.
data = ""
with open('data.js', "r", encoding="UTF-8-sig") as f:
    line = f.readline()
    while line:
        data += line
        line = f.readline()

# 파일에 변수명을 추가하여 다시 쓴다.
final_data = f"var data = {data};"
with open('data.js', "w", encoding="UTF-8-sig") as f_write:
    f_write.write(final_data)
```

- 파이썬 파일 저장할때 폴더이름으로 저장할수 있음
- 다만 폴더를 미리 생성해놔야함. 아래 예제는 src 폴더
```js
with open('./src/data.js', "w", encoding="UTF-8-sig") as f_write:
    json.dump(l, f_write, ensure_ascii=False, indent=4)
```

# 결과
![aa](https://user-images.githubusercontent.com/59503331/211112336-77c7f01d-f413-4647-9d2a-d398dbb76afa.PNG)
