# useState안에 배열에서 중복 삭제

- 상황: fetching한 데이터 (list)안에 vendor라는 타입이 있는데, 총 몇개의 타입인지 구분을 해야한다.
- list 안에는 6000개의 데이터가 있어서 하나하나 확인하는건 절대 불가능
- 방법: useState로 하나 정의하고, useEffect안에서 list에 map을 돌리고,
- set 을 이용해서 아래처럼 해결

```js
 useEffect(() => {
    const titles = list?.map((v: any, i: number) => {
      return v.vendor;
    });
    const set = new Set(titles);
    const newArr = [...set];
    setProductTitles(newArr);
  }, [loading]);
  ```
