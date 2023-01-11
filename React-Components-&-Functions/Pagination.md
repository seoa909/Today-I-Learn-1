# 페이지네이션 (버튼4개)

- ts, styled-components

```js
import flex from "@/core/utils/flex";
import React, { memo } from "react";
import styled from "styled-components";

interface PropsType {
  total: number;
  limit: number;
  page: number;
  setPage: (num: number) => void;
}

const Pagination = ({ total, limit, page, setPage }: PropsType) => {
  const numPages = Math.ceil(total / limit);

  const onPrevPageHandler = () => {
    setPage(page - 1);
  };
  const onNextPageHandler = () => {
    setPage(page + 1);
  };
  const onFirstPageHandler = () => {
    const temp = 1;
    setPage(temp);
  };
  const onLastPageHandler = () => {
    const temp = numPages;
    setPage(temp);
  };

  return (
    <StPagination>
      <StButton onClick={onFirstPageHandler} disabled={page === 1}>
        &lt;&lt;
      </StButton>
      <StButton onClick={onPrevPageHandler} disabled={page === 1}>
        &lt;
      </StButton>
      <p style={{ margin: "2rem", fontWeight: "700" }}>
        {page}/{numPages}
      </p>
      <StButton onClick={onNextPageHandler} disabled={page === numPages}>
        &gt;
      </StButton>
      <StButton onClick={onLastPageHandler} disabled={page === numPages}>
        &gt;&gt;
      </StButton>
    </StPagination>
  );
};

export default memo(Pagination);

const StPagination = styled.div`
  ${flex({})}
`;

const StButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px;
  background-color: var(--main);
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    opacity: 50%;
  }
  &[disabled] {
    opacity: 0;
    cursor: revert;
    transform: revert;
  }
`;

```

# 사용
```js
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const offset = (page - 1) * limit;

const lists = users?.users
  ?.slice(offset, offset + limit)
  .map((v: mapData, i: number) => {
    return (
      <tr key={i}>
        <th scope="row" className="num">
          <div>{i + 1}</div>
        </th>
        <td className="name">
          <div>{v.name}</div>
        </td>
        <td className="email">
          <div>{v.email}</div>
        </td>
        <td className="level">
          <div>{v.level}</div>
        </td>
      </tr>
    );
  });

  
<Pagination
  total={users?.users.length}
  limit={limit}
  page={page}
  setPage={setPage}
/>
 ```
 - 여기서 total은 이제 전체 데이터 길이
 - limit은 최대 몇장 보여줄지
 - page는 시작 페이지 번호
 - 위에 lists() 처럼 데이터를 offset이랑, limit을 이용해서 잘라야함.
