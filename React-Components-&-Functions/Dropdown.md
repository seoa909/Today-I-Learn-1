# 드랍다운 메뉴 (애니메이션x)

![Record_2023_01_20_17_09_31_521](https://user-images.githubusercontent.com/59503331/213814181-980af96a-9962-402f-9ac6-89a8aa78b7e9.gif)

- Index.tsx
```js
import React, { useState } from "react";
import { StWrap } from "./style";
import Filters from "./Filters";

const OrderFilter = () => {
  const [eliquid, setEliquid] = useState(false);
  const [hardware, setHardware] = useState(false);

  const onEliquidClickHandler = () => {
    setEliquid((v) => !v);
  };
  const onHardwareClickHandler = () => {
    setHardware((v) => !v);
  };
  return (
    <StWrap>
      <header>FILTER</header>
     <Filters
        name={Str.ELIQUID}
        subName={[Str.FREEBASE, Str.SALT]}
        click={onEliquidClickHandler}
        state={eliquid}
      />
      <Filters
        name={Str.HARDWARE}
        subName={[
          Str.ACCESSORIES,
          Str.BATTERIES,
          Str.BATTERY_CASE,
          Str.BOX_MODS,
          Str.CLOSED_POD_SYSTEM,
          Str.COILS,
          Str.DRIP_TIP,
          Str.HARDWARE,
          Str.OPEN_POD_SYSTEM,
          Str.PODS,
          Str.STARTER_KIT,
          Str.TANK,
          Str.UNICORN_BOTTLE,
        ]}
        click={onHardwareClickHandler}
        state={hardware}
      />
    </StWrap>
  );
};

export default OrderFilter;

```

- Filters.tsx
```js
import React from "react";
import { FilterEach, StIcon } from "./style";

interface IPropsTyp {
  name: string;
  subName: string[];
  state?: boolean;
  click?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Filters = ({ name, subName, state, click }: IPropsTyp) => {
const listing = useMemo(
    () =>
      subName.map((v, i) => {
        return (
          <FilterEach
            key={i}
            last={false}
            onClick={() =>
              name === Str.ELIQUID
                ? onClickHandler(name, v)
                : onClickHardwareHandler(v)
            }
          >
            <StIcon name="Dot" />
            <div className="nameDiv">
              {v === Str.HARDWARE ? Str.REPLACEMENT_GLASS : v}
            </div>
          </FilterEach>
        );
      }),
    [subName]
  );
  return (
      <div className="filter">
      {loading ? (
        <div className="mainCategory">
          {name}
          {state ? <StIcon name="Down" /> : <StIcon name="Right" />}
        </div>
      ) : (
        <div className="mainCategory" onClick={click}>
          {name}
          {state ? <StIcon name="Down" /> : <StIcon name="Right" />}
        </div>
      )}
      {/* Sub Categories */}
      {state && listing}
    </div>
  );
};

export default Filters;

```

- styles.ts (svg url이랑 크, flex 이런 세팅은 따로 해야함)
```js
import styled from "styled-components";
import { Resolution } from "@/core/enums/Resolution";
import flex from "@/core/utils/flex";
import { handleSvg } from "@/styles/Assets";

// Order SubHeader
export const StWrap = styled.div`
  ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}
  position: fixed;
  width: ${Resolution.Order_Filter_Width};
  height: ${Resolution.Order_Filter_Height};
  margin: 8.5rem 0 0 1rem;
  padding-left: 1rem;
  header {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const StIcon = styled.div<{ name: string }>`
  background-image: url(${(props) => handleSvg(props.name)});
  background-position: center;
  background-size: cover;
  width: ${(props) =>
    props.name === "Dot" ? "8px" : Resolution.OrderForecaster_Icon_Size_Down};
  height: ${(props) =>
    props.name === "Dot" ? "8px" : Resolution.OrderForecaster_Icon_Size_Down};
  margin: 0 ${(props) => props.name === "Dot" && "1rem"};
`;

export const FilterEach = styled.div<{ last: boolean }>`
  ${flex({ align: "center", justify: "flex-start" })}
  margin-bottom: ${(props) => !props.last && "0.5rem"};
  padding: 0.2rem 0;
  &:hover {
    background-color: var(--hover-filter);
  }
`;

```
