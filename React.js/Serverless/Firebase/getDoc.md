# 상황

db에 저장되어있는 파일을 가져올건데, 그걸 useState의 배열에 집어넣을 생각.

# 코드
일단 useState의 type은 아래와 같다. DocumentData는 파이어베이스가 제공해준다.

```js
const [data, setData] = useState<DocumentData[]>([]);
```

그다음에 데이터를 가져오는 함수
```js
const getData = async () => {
    const data = await getDocs(dbCollection);
    return setData(data.docs.map((doc) => doc.data()));
  };
  ```
