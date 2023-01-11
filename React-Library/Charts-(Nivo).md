# 리액트 차트 - Nivo

공홈: https://nivo.rocks/chord/

장점: 차트 종류 많고, 문서 친절, 쉬움.

단점: 차트 커스터마이징의 한계, 하지만 있는걸로 충분히 훌륭한 차트 생성 가능


### 2022-12-15 기준 Line Chart

#### 1. 설치
```JS yarn add @nivo/core @nivo/line ```

#### 2. Line.tsx

Line 공홈에서 추가 커스터마이징 : https://nivo.rocks/line/

공홈 example은 JS전용, 아래 내가 바꾼게 TS 전용
- data는 MyResponsiveLine에 props로 받아와서 하는게 제일 좋은데 example이라서 그냥 때려 넣었음.

```js
import { ResponsiveLine } from "@nivo/line";

export const MyResponsiveLine = () => (
  <ResponsiveLine
    data={[
      {
        id: " ",
        color: "hsl(180, 70%, 50%)",
        data: [
          {
            x: "1",
            y: 100,
          },
          {
            x: "2",
            y: 400,
          },
          {
            x: "3",
            y: 300,
          },
          {
            x: "4",
            y: 200,
          },
          {
            x: "5",
            y: 900,
          },
          {
            x: "6",
            y: 1200,
          },
          {
            x: "7",
            y: 100,
          },
        ],
      },
    ]}
    margin={{ top: 20, right: 10, bottom: 20, left: 60 }}
    // Line Style
    curve="monotoneX"
    // Grid Value
    gridYValues={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
    // Axis
    axisTop={null}
    axisRight={null}
    axisLeft={{
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 0,
      legendPosition: "middle",
    }}
    axisBottom={null}
    colors={"var(--main)"}
    // Points
    pointSize={5}
    pointColor={{ theme: "background" }}
    pointBorderWidth={5}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={0}
    // Mouse Hover event
    isInteractive={false}
  />
);

```

#### 3. 사용
import 하고 ```js <MyResponsiveLine /> ``` 한줄이면 됌.

#### 4. 
![aa](https://user-images.githubusercontent.com/59503331/207958407-4a14ef83-2d8a-4546-915d-7191bb3a3e2f.PNG)


### 2022-12-16 기준 Pie Chart

Line하고 똑같이 사용하면됨, data만 따로 data.ts를 만들어서 보관중
data.ts
```js
export const PieData = [
  {
    id: "Websites",
    label: "Websites",
    value: 900,
    color: "hsl(307, 70%, 50%)",
  },
  {
    id: "Logo",
    label: "Logo",
    value: 800,
    color: "hsl(307, 70%, 50%)",
  },
  {
    id: "Social Media",
    label: "Social Media",
    value: 200,
    color: "hsl(307, 70%, 50%)",
  },
  {
    id: "Adwords",
    label: "Adwords",
    value: 400,
    color: "hsl(307, 70%, 50%)",
  },
  {
    id: "E-Commerce",
    label: "E-Commerce",
    value: 300,
    color: "hsl(307, 70%, 50%)",
  },
];

```
Pie.tsx
```js
import { ResponsivePie } from "@nivo/pie";

interface exampleType {
  data: { id: string; label: string; value: number; color: string }[];
}

export const MyResponsivePie = ({ data }: exampleType) => (
  <ResponsivePie
    data={data}
    colors={["#5684fe", "#25396e", "#3855a5", "#4164c2", "#4a74df"]}
    margin={{ top: 20, right: 120, bottom: 30, left: 20 }}
    // Pie Size
    innerRadius={0.6}
    // Sort
    sortByValue={true}
    // Space between pie bars
    padAngle={0}
    cornerRadius={0}
    //  Border
    borderWidth={0}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0]],
    }}
    // Hover
    activeOuterRadiusOffset={8}
    // Label - Inside
    enableArcLabels={false}
    // Label - Outside
    enableArcLinkLabels={false}
    // Legends
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 110,
        translateY: 10,
        itemsSpacing: 10,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 10,
        symbolShape: "circle",
      },
    ]}
  />
);

```
![adada](https://user-images.githubusercontent.com/59503331/208188821-07254e08-f4a5-4fa2-8ad2-b18fcb23df56.PNG)

