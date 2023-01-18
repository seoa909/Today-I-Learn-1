# Axios Get with Headers

```js
import axios from "axios";
import { useQuery } from "react-query";
const { VITE_SHOPIFY_TOKEN_VALUE } = import.meta.env;

const useFetchShopifyData = () => {
  const fetcher = async () => {
    const { data } = await axios.get(
      `url`,

      {
        headers: {
          "X-Shopify-Access-Token": VITE_SHOPIFY_TOKEN_VALUE,
        },
      }
    );
    return data;
  };

  return useQuery("shopify_product", fetcher);
};

export default useFetchShopifyData;

```
