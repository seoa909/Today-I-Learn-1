# URL, 폴더이름, 파일이름을 input으로 받아서 Storage에 저장

### 1. 핵심파트 설명

```js

 // 평범한 useState로 값을 받음
 const [title, setTitle] = useState("");
  const [folder, setFolder] = useState("");
  const [url, setUrl] = useState("");

  // 버튼 누르면 이제 데이터 보내짐
  const onClickHanlder = async () => {
    // image url을 가져와서 blob으로 만든다 -> storage 보내는 uploadBytes()가 blob만 받음
    const blob = await fetch(url).then((r) => r.blob());
    
    // 그냥 await부터 실행해도 가는데, 아래 개발자 도구에서 사진 바로 다운받을 수 있게 할려고 변수로 넣음
    const upload_file = await uploadBytes(
      ref(storage, `${folder}/${title}.png`),
      blob
    );
    
    // 개발자도구에서 바로 사진 다운받게 해줌
    const file_url = await getDownloadURL(upload_file.ref);
    console.log(file_url);
  };
 ```



### 2. 전체코드

```js
import flex from "@/utils/flex";
import styled from "styled-components";
import { storage } from "@/shared/firbase";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";

const Index = () => {
  const [title, setTitle] = useState("");
  const [folder, setFolder] = useState("");
  const [url, setUrl] = useState("");

  const onClickHanlder = async () => {
    const blob = await fetch(url).then((r) => r.blob());
    const upload_file = await uploadBytes(
      ref(storage, `${folder}/${title}.png`),
      blob
    );
    // 개발자도구에서 바로 사진 다운받게 해줌
    // const file_url = await getDownloadURL(upload_file.ref);
    // console.log(file_url);
  };
  return (
    <CenterFlex>
      <Box>
        <input
          type="text"
          placeholder="URL - 구글에서 걍가져오기"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="사진이름- 한글만사용"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="폴더이름 - 월드컵끼리 같은폴더"
          onChange={(e) => {
            setFolder(e.target.value);
          }}
        />
        <button onClick={onClickHanlder}>보내기</button>
      </Box>
    </CenterFlex>
  );
};

export default Index;

const CenterFlex = styled.div`
  ${flex({})};
  height: 100vh;
`;

const Box = styled.div`
  ${flex({ direction: "column" })};
  width: 600px;
  height: 600px;
  background-color: #eceaea;
  input {
    margin: 10px;
    width: 300px;
    height: 50px;
    font-size: 2rem;
  }
`;
```
