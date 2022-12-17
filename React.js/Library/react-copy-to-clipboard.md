```yarn add react-copy-to-clipboard```

SharedUrl.tsx
```js
import { CopyToClipboard } from "react-copy-to-clipboard";

const SharedURL = ({ str }: { str: string }) => {
  const currentUrl = window.location.href;

  return (
    <CopyToClipboard text={currentUrl}>
      <div>{str}</div>
    </CopyToClipboard>
  );
};

export default SharedURL;

```

# 사용
```js
<SharedURL str="공유하기" /> 
```
