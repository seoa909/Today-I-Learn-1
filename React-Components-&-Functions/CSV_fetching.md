# CSV 파일 Fetching 해서 테이블 만들기

```js
import { CSVForm, FlexBox, FlexCol, StTable } from "./styles";
import { memo, useState } from "react";

const CSVUpload = () => {
  // input file 보관
  const [file, setFile] = useState();
  // 데이터 fetch해서 보관
  const [array, setArray] = useState([]);
  // 파일 읽어오기
  const fileReader = new FileReader();
  // 파일 올리면 state에 채우기
  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  // file 내부 열어서 array로 만들기
  const csvFileToArray = (string: string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array: any = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce(
        (object: any, header: string, index: number) => {
          console.log(object, header, index);
          object[header] = values[index];
          return object;
        },
        {}
      );
      return obj;
    });

    setArray(array);
  };

  // submit하면 파일을 array로 만드는 작업
  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event: any) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };
  // 파일내의 key값(헤더) 가져오기
  const headerKeys = Object.keys(Object.assign({}, ...array));
  return (
    <FlexBox>
      <FlexCol>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <CSVForm>
            <input
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleOnChange}
            />

            <button
              onClick={(e) => {
                handleOnSubmit(e);
              }}
            >
              Send Data
            </button>
          </CSVForm>
          <StTable>
            <thead>
              <tr key={"header"}>
                {headerKeys.map((key, i) => (
                  <th key={i}>{key}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {array.map((item, i) => (
                <tr key={i}>
                  {Object.values(item).map((val: any, n) => (
                    <td key={n}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StTable>
        </div>
      </FlexCol>
    </FlexBox>
  );
};

export default memo(CSVUpload);

```

```js
export const CSVForm = styled.form`
  ${flex({ direction: "column" })}
  width: 50%;
  padding: 2rem;
  border-right: 1px solid var(--main);
  position: relative;
  input {
    width: 100%;
    border-bottom: 1px solid var(--main);
    margin-bottom: 2rem;
  }
  button {
    padding: 1rem 1.5rem;
  }
`;

export const StTable = styled.table`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 50%;
  height: 820px;
  overflow: scroll;
  margin: 1rem;

  th,
  td {
    width: 200px;
    border: 1px solid #444444;
    padding: 20px;
  }
  th {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

```
