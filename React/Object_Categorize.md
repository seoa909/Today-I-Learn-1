# 객체내부의 같은 key, value 가진 애들끼리 묶기(reduce)

```js
const groupValues = list?.reduce((v: any, i: any) => {
  v[i.key.trim()] =
    v[i.key.trim()] || [];
  v[i.key.trim()].push(i);
  return v;
}, {});
```

# 예제

```js
const [productTitles, setProductTitles] = useState<any>([]);

useEffect(() => {
  const groupValues = list?.reduce((v: any, i: any) => {
    v[i.tags.split(",")[i.tags.split(",").length - 1].trim()] =
      v[i.tags.split(",")[i.tags.split(",").length - 1].trim()] || [];
    v[i.tags.split(",")[i.tags.split(",").length - 1].trim()].push(i);
    return v;
  }, {});
  setProductTitles(groupValues);
}, [loading]);
```
