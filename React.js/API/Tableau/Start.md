# 태블로 api를 가져올때 필요한거
 - 서버주소
 - 작업물주소
 - (옵션)trusted token

# 가져오기 기본
- index.html에 아래와같이 서버주소 가져오는 코드 추가
```js
 <script type="text/javascript" src="https://%VITE_TABEAU_SERVER%/javascripts/api/tableau-2.min.js"></script>
 ```
 
- 내가 사용할 페이지
```js
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import { FlexBox, FlexCol, TableauChart } from "./styles";
import useGetUser from "@/hooks/user/useGetUser";
import { useEffect, useRef, useState } from "react";

const { VITE_TABEAU_TEST } = import.meta.env;

// @ts-ignore
const { tableau } = window;

const OrderForcaster = () => {
  const { data } = useGetUser();
  const [url] = useState(VITE_TABEAU_TEST);
  const ref = useRef(null);
  var options = {
    hideTabs: true,
    width: "75vw",
    height: "80vh",
    onFirstInteractive: function () {
      // The viz is now ready and can be safely used.
    },
  };

  const initViz = () => {
    new tableau.Viz(ref.current, url, options);
  };

  useEffect(initViz, []);
  return (
    <FlexBox>
      <SideBar />
      <FlexCol>
        <Header data={data} />
        <TableauChart ref={ref} />
      </FlexCol>
    </FlexBox>
  );
};

export default OrderForcaster;

```

# 결과
![asdadsa](https://user-images.githubusercontent.com/59503331/209974760-e71fb642-7e1a-46e2-ae46-c874026e2d30.PNG)
