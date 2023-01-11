# 중첩라우팅 

- 꼭 기억할것: 중첩라우팅을하는 이유가 보통, 헤더, 사이드바는 그냥 고정으로 한번만 부르고, 안에 컨텐츠화면만 휙휙 바꿔주려고 하는데, 이럴경우 리 렌더링은 헤더와 사이드바에 일어나지 않는다.
- 중첩라우팅에는 두가지 종류가 있다

1. outlet 미사용
- 만들거 (위에는 헤더가있고, 옆에는 사이드바가 있다. 내수용이라 공개불가..)
![Record_2023_01_04_11_54_03_722](https://user-images.githubusercontent.com/59503331/210608003-634676b3-bbfb-4920-868a-9b9d31cfebb6.gif)

- 뒤에 어떠한 url이 올지 모를때 사용하면 좋다고 생각한다.
- 아래처럼 path 제일뒤에 * 을 사용해서 뒤에 어떠한 url이 오던지 중첩하겠다, 라는 식으로 사용한다.
```js
<Route>
  <Route path="/Dashboard/*" element={<Dashboard />} />
</Route>
```

- 그러면 이제 뒤에 url 넣는거는 아래와 같다.
- 지금 상황은 대시보드에 tab bar를 추가한다고 생각한다 => 헤더 사이드바는 그대로, main contents 부분만 변경해야함.

```js
const Dashboard = () => {
  return (
     <FlexBox>
     //사이드바
      <SideBar />
      <FlexCol>
      //헤더
        <Header data={data} />
        <div className="main>
          <FlexBox>
          // 여기는 평범한 버튼이다. <Link> 태그를 커스터마이징해서 사용한거지만, 그냥 button으로 하고 navigate('/') 줘도 된다.
            <CustomLink to="" className="linkTab" content="First Tab" />
            <CustomLink to="two" className="linkTab" content="Second Tab" />
            <CustomLink to="three" className="linkTab" content="Third Tab" />
            <CustomLink to="four" className="linkTab" content="Forth Tab" />
            <CustomLink to="five" className="linkTab" content="Fifth Tab" />
            <CustomLink to="six" className="linkTab" content="Sixth Tab" />
            <CustomLink to="seven" className="linkTab" content="Seventh Tab" />
          </FlexBox>
          // 이 아래부분이 이제 중첩될 화면이 켜질 부분이다. 이 아래부분만 리 렌더링 된다고 보면 된다.
          <Routes>
            <Route path="/" element={TabOne />}></Route>
            <Route path="/two" element={<TabTwo />}></Route>
            <Route path="/three" element={<TabThree />}></Route>
            <Route path="/four" element={<TabFour />}></Route>
            <Route path="/five" element={<TabFive />}></Route>
            <Route path="/six" element={<TabSix />}></Route>
            <Route path="/seven" element={<TabSeven />}></Route>
          </Routes>
        </div>
      </FlexCol>
    </FlexBox>
  );
};
export default Dashboard;
```

- 물론 코드를 위처럼 짜진 않는다.
- Tab bar들은 하나의 폴더로 이동시키고, 그 폴더안에 Index.ts를 하나 만들어준다
- 그리고 아래처럼 만들어준다.
```js
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import TabFour from "./TabFour";
import TabFive from "./TabFive";
import TabSix from "./TabSix";
import TabSeven from "./TabSeven";
export { TabOne, TabTwo, TabThree, TabFour, TabFive, TabSix, TabSeven };
```

- 그리고 새로운 routing 컴포넌트를 만들어서 아래처럼 불러준다.
```js
import { Routes, Route } from "react-router-dom";
import * as dash from "@/pages/DashboardTabs/Index";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<dash.TabOne />}></Route>
      <Route path="/two" element={<dash.TabTwo />}></Route>
      <Route path="/three" element={<dash.TabThree />}></Route>
      <Route path="/four" element={<dash.TabFour />}></Route>
      <Route path="/five" element={<dash.TabFive />}></Route>
      <Route path="/six" element={<dash.TabSix />}></Route>
      <Route path="/seven" element={<dash.TabSeven />}></Route>
    </Routes>
  );
};
export default Routing;
```

- 조금 더 컴포넌트를 잘 활용한거 같은 기분이다.
- 최종 dashboard
```js
const Dashboard = () => {
  return (
    <FlexBox>
      <SideBar />
      <FlexCol>
        <Header data={data} />
        <div className="main
          <FlexBox>
            <CustomLink to="" className="linkTab" content="First Tab" />
            <CustomLink to="two" className="linkTab" content="Second Tab" />
            <CustomLink to="three" className="linkTab" content="Third Tab" />
            <CustomLink to="four" className="linkTab" content="Forth Tab" />
            <CustomLink to="five" className="linkTab" content="Fifth Tab" />
            <CustomLink to="six" className="linkTab" content="Sixth Tab" />
            <CustomLink to="seven" className="linkTab" content="Seventh Tab" />
          </FlexBox>
          // 컨텐츠가 이렇게 한줄로 커버 된다.
          <Routing />
        </div>
      </FlexCol>
    </FlexBox>
  );
};
export default Dashboard;
```

2. outlet 사용
- outlet을 사용하면, dashboard/first, dashboard/two에만 접근시키고 싶은데, dashboard/three 이런데 들어오는 애들을 에러처리로 막을 수 있다.
- outlet은 아래 링크 참고
- 
https://mygumi.tistory.com/414


