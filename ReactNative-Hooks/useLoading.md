# useLoading.tsx

```js
import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      // Loading -> Home
      setLoading(false);
    }, 3000);

    return () => {
      // Clean TimeOut
      clearTimeout(interval);
    };
  }, []);
  return loading;
};

export default useLoading;

```

# Usage
```js
const loading = useLoading();
```
