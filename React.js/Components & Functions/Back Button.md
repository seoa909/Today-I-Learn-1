```js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Back from "@/assets/Back.svg";

const BackButton = () => {
  const navigate = useNavigate();
  const onClickHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div onClick={onClickHandler}>
      <BackSVG name={Back} />
    </div>
  );
};

export default BackButton;

export const BackSVG = styled.div<{ name: string }>`
  background-image: url(${(props) => props.name});
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin: 0 1rem;
  cursor: pointer;
`;

```

# 사용
```js
<BackButton />
```

# 이미지용 svg
```js
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="50" height="50" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_10" transform="scale(0.02)"/>
</pattern>
<image id="image0_1_10" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRoge3ZQQrCMBhE4eABrUqlC727UKEKPUKE51IXCTTd/EOY7wKZB8kqKZn1CzgDL2AFxug9uwATkPlZozc1K0QAvKN3NalEZOASvW0z4FqI+AC36G2bOUKFI1Q4QoUjVDhChSNUOEJFLxGnQkQGpuhtTYCnWsQh8vBw3VytlFICxspjv0dva+YYVY5R5RhVjlHlGFWOUeUYVb3F1D5Dh+htzSoxc/SuXQoxS/Sm3YABeAAzcIzeY/bnC2MoRKjxstEpAAAAAElFTkSuQmCC"/>
</defs>
</svg>

```
