# Admin_API

샤피파이는 Admin API를 제공해주고, 모든 정보를 이 api를 통해서 넘겨준다.

주의할점은 Admin API를 가져다 쓰기 위해서는, 첫번째로 dev 앱을 하나 만들어야한다.

Shopify계정이 Admin인지 보고, 앱추가하기에서 앱을 추가해줘야한다 (dev 앱으로 추가해야함)

그러면 admin key 등을 지급해주는데, 꼭 잘 메모해둬야한다.

# 프론트엔드에서 fetch

평소처럼 프론트에서 useQuery를 이용해서 fetching을 하려는데 CORS 문제가 뜬다.

제3자 API에서 CORS가 뜨는 이유가 뭘까해서 찾아보니, 샤피파이에서는 데이터를 프론트에서 fetch 못하게 막아뒀다. 

그래서 무조건 백엔드에서 fetching을 해야한다.

# 백엔드에서 fetch

백엔드에서는 axios가 아닌 fetch()를 사용해서 데이터를 받아봤다.

컨트롤러는 아래와 같다. 아직 import와 require를 섞어쓰는중이다..

보면 헤더안에 x-shopify... 이런게 있는데, 여기에 이제 아까 받은 admin token 을 넣어주어야 한다.

나는 Restful로 했고, 해당 내용은 get이다. 자세한 내용은 문서참고 https://shopify.dev/api/admin

문제는 내 url을 보면 알겠지만 받아오는 최대 데이터는 250개다. (기본50개)

만약 데이터가 3000개라면 어떻게 받아올지는 아직 연구중이다..
```js
import { Request, Response } from "express";
require("dotenv").config();

const getProductByType = async (req: Request, res: Response) => {
    const type = req.params.type;
    const headers = {
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_KEY
    };
    try {
        //logic
        const response = await fetch(
            `https://${process.env.SHOPIFY_STORE_NAME}.myshopify.com/admin/api/${process.env.SHOPIFY_YEAR}/${process.env.SHOPIFY_Category}.json?limit=${process.env.SHOPIFY_LIMIT}&status=${process.env.SHOPIFY_Status}&${process.env.SHOPIFY_Sub_Category}=${type}`,
            {
                method: "GET",
                headers: headers
            }
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(400).send("An error occured");
    }
};

export default { getProductByType };

```

# Fetch 알고리즘 (데이터 250개 이상일때)
```JS
import { Request, Response } from "express";
require("dotenv").config();

const getProductByType = async (req: Request, res: Response) => {
    const type = req.params.type;
    const headers = {
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_KEY
    };
    const arr: any[] = [];
    try {
        let url = `https://${process.env.SHOPIFY_STORE_NAME}.myshopify.com/admin/api/${process.env.SHOPIFY_YEAR}/${process.env.SHOPIFY_Category}.json?limit=${process.env.SHOPIFY_LIMIT}&status=${process.env.SHOPIFY_Status}&${process.env.SHOPIFY_Sub_Category}=${type}`;
        while (true) {
            //logic
            const response = await fetch(url, {
                method: "GET",
                headers: headers
            });
            const headerLink = response.headers.get("link");

            const slicedHeader = headerLink.split(" ");
            if (slicedHeader.includes('rel="next"')) {
                const savedHeader = slicedHeader.indexOf('rel="next"');
                const page_info = headerLink.split(" ")[savedHeader - 1].split(">;")[0];
                const data = await response.json();
                data.products.map((v: any) => {
                    return arr.push(v);
                });
                url =
                    `https://${process.env.SHOPIFY_STORE_NAME}.myshopify.com/admin/api/${process.env.SHOPIFY_YEAR}/${process.env.SHOPIFY_Category}.json?limit=${process.env.SHOPIFY_LIMIT}` +
                    "&page_info=" +
                    page_info +
                    '; rel="next"';
            } else if (!slicedHeader.includes('rel="next"')) {
                const data = await response.json();
                data.products.map((v: any) => {
                    return arr.push(v);
                });
                res.json(arr);
                break;
            }
        }
    } catch (error) {
        res.status(400).send("An error occured");
    }
};

export default { getProductByType };
```
