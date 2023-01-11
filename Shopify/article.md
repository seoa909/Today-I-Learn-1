# Article for Learning

https://medium.com/uconnec/%EC%BB%A4%EB%A8%B8%EC%8A%A4-%ED%95%9C%EB%B2%88-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%BC%EA%B9%8C-1-feat-shopify-260dee40a230
LEEER
LEEER
Apr 2, 2020

·
24 min read





커머스 한번 만들어 볼까? #1 (feat. Shopify)
커머스 조사를 시작하며

유커넥에서는 그 동안 함께하고 있는 인플루언서 분들에게 좀 더 수익을 창출할 수 있는 길을 만들고 상생하기 위해 많은 고민을 하고 있습니다. 지금 유커넥 서비스와 자연스럽게 연결되는 모양을 만들어가면서 직관적인 비즈니스 구조여야 하는 고려사항이 있었는데요. 그리고 드디어 그 일환으로 지금 유커넥에서는 개발단위가 큰 새로운 서비스를 준비하고 있고 그 서비스의 핵심 기능은 결국 커머스라고 할 수 있습니다.

저희가 커머스 개발을 검토할 때 가장 먼저 고려한 것은 (모두가 다 그렇게 하겠지만) 서비스의 (할 수 있는 최선의) 구체적인 기획, 주어진 일정과 가지고 있는 리소스입니다.

저희가 가지고 있는 리소스를 보면

기존/새로운 서비스를 유지보수하고 기능을 확장하는 개발을 병렬로 계속 지속하고 있고,
일반 커머스(multi vendor 기능이 없는) A to Z의 개발을 경험해본 적이 없고
따라서 제한된 소수의 개발인력으로 서비스를 새로 시작해야 하는 상황입니다.
스타트업을 표방한다면 늘 그렇듯 새로운 도전을 즐길 줄 알아야 된다고 생각합니다. 다행히 꽤 오랜 기간 함께해 와 서로 커뮤니케이션이 익숙한 팀 동료들과 개발 외적으로 커머스를 위한 인프라 환경이 세팅되어가고 있는터라 꽤 즐겁게 작업을 할 수 있을거 같은데요.


될 만한 사업을 즐겁게 만든다!
그래서 이왕 커머스 기능을 만들자고 한 김에 조금 시간을 내서 조사를 진행 중이고 그 과정에서 알아낸 정보들을 공유하려고 합니다. 저희의 개발스택과 역량을 기반으로 두고 조사했으며 따라서 커머스 개발하는 방법론을 다 알아낸 것이 아닌 지엽적 정보입니다.

하지만 완성된 개발 경험을 공유한 글은 봤어도 진행 중의 과정에 대해 공유된 글들이 많이 없다고 보여 조금은 ‘스타트업의 생생한 의사 결정 과정’을 같이 본다고 생각해도 좋을 것 같습니다!

두괄식 결론부터
그래서 결론이 뭔데? 라고 현기증 나는 분들을 위해 지금 정리된 생각을 말씀드리면..

Django의 eCommerce 프레임워크인 Saleor, Oscar를 검토한다.
검토 후 결과에 따라 둘 중에 하나를 선택하거나 혹은 직접 만들지를 결정한다.
입니다.

저희는 Django와 React를 주 개발스택으로 가져가고 있습니다. 그래서 커머스도 일단 동일한 스택을 가져간다고 가정하였고 지금까지 결론은 위와 같습니다.

린하게 빠르고 치고 나가고 싶은 욕망이 가득가득했기에 그게 어떻게 가능할까에 대해 초점을 두고 조사를 시작했습니다. 그래서 사실 이 글은 Shopify에 대한 얇고 깊게(뭔 말?) 알아본 글일지도 모릅니다.

처음에 3가지 방향성을 두고 조사를 시작했습니다.

3가지 방향성

커머스 기능을 그냥 하나하나 새롭게 만들기
시간만 허락된다면 새롭게 만드는 것이 모든 개발자들이 원하는 것일지도 모르겠습니다. 하지만 주어진 시간을 단축하고 개발에만 매몰되지 않아야겠다는 생각을 뼛속까지 하고 있기에 2가지 대안을 찾게 되었습니다.

django 프레임워크의 eCommerce 솔루션 커스터마이징하기
shopify, cafe24 등의 이커머스 전문 솔루션 커스터마이징하기
처음에 Shopify를 보면서 ‘아 매력적이다.’ ‘기능도 많고 커스터마이징 가능하겠는데?’의 생각을 하고 계속 조사를 했지만 다음의 근거로 아래의 결론에 다다르게 되었습니다.

결론

웹호스팅이 가능한 솔루션을 쓸 경우 현재 시점에서 가장 성공한 Shopify를 커스터마이징 할지 결정하기로 함
Shopify 검토 결과 아래와 같은 이유로 우리가 사용하기 부적합함
웹호스팅 기반의 비개발자를 위해 시작된 코드가 공개되지 않는 솔루션
기능을 추가하고 싶은 경우 앱으로 확장하거나 직접 서버 구축해 커스텀 앱을 제작해 연동하는 방법이 있음. 그러나 앱의 경우 비용이 꽤 많이 추가되며 직접 서버를 구축해 기능을 확장함에도 불구하고 Shopify에 종속됨
경험이 축적되는 어느 지점에서 반드시 직접 개발하는 것을 간절히 원할 것으로 판단됨
많은 리뷰에서 커머스를 long-term으로 가져가게 될 경우 결국 커스터마이징이 많이 필요하게 되었다를 반복해서 들음
우리는 인플루언서가 주축이 되는 커머스라는 관점에서 이미 일반 커머스와 기능적 결이 다름
Django의 eCommerce 프레임워크는 많은 리뷰를 검토해 보았지만 결국 직접 실행해보고 코드를 만져보며 최종적인 판단이 필요했음
Commerce Reserch
1. 커머스의 일반적 기능

eCommerce 의 시대!
조사 결과 대략 다음의 기능들이 잘 구현되면 그것을 커머스 서비스라고 부를 수 있는 것으로 보입니다. (말로 표현하기는 엄청 간단하네요)

커머스의 일반적인 기능

Admin Dashboard (CMS, 통계)
장바구니
주문
결제
배송확인
이메일/카톡 알림
재고 관리
정산
프로모션, 할인
판매할 제품의 종류나 특징에 따라 다음과 같은 기능이 추가적으로 필요할 수도 있습니다.

정기적 구독 모델이 들어가는 경우

구독
디지털 제품이 아닌 실물(Physical) 제품인 경우

배송확인
재고관리
1_2. 유커넥 커머스의 최소 requirement.txt (습관적으로 치게 되는 장고의 …….)
유커넥은 아래와 같은 기능에 더 우선순위를 두고 개발하려고 합니다.

사용자 정의

저희 서비스를 이용하게 될 사용자는 크게 4가지 타입이 있습니다.

서비스 사용자를 관리하고 부가서비스를 제공하는 유커넥 어드민 관리자
상품을 등록하거나 유통하길 원하는 벤더 (저희 초기모델은 제조사와 유통사를 구분하지 않는 걸로 가정했습니다)
상품을 구매자분들에게 유통시킬 인플루언서
구매자
인플루언서 Affiliate Structure

기본 커머스와 구조적으로 가장 차별점을 가지게 될 요소로 전통적으로는 Affiliate program으로 많이 알려져 있음
인플루언서 전용 코드 발행 또는 인플루언서 전용 페이지 필요
Admin 전용 Dashboard

Dashboard는 CMS 역할과 판매현황, 실적을 조회할 수 있는 통계적인 역할로 크게 2가지가 있습니다. 3 종류의 사용자 타입에 따라 각각 보여지게 될 기능을 분리해야 합니다. 예로 초기에는 벤더, 인플루언서는 직접 상품을 등록할 수 없으며 Multi vendor 기능을 추가하게 된다면 벤더는 상품을 관리할 수 있지만 인플루언서는 Dashboard에서 상품을 등록할 수 없을 것입니다.

유커넥 관리자를 위한 Dashboard
벤더를 위한 Dashboard
인플루언서 Dashboard
그외

상품 프로모션 / 디스카운트 기능
주문
결제 옵션
추가적으로 고려할 요소

재고관리, 배송확인
구매자의 상품리뷰
인플루언서, 벤더 간 상호 리뷰
사용자 간 커뮤니케이션
Multi vendor feature
2. 외부 솔루션 또는 프레임워크를 선택할 때 딥하게 알아야 할 점
커머스의 최소 기능에 대한 이해, 우리의 니즈를 파악했으니 이제 우리가 솔루션이나 프레임워크를 택하게 될 때 무엇을 고려해야 하는지에 대한 공부가 필요했습니다. (리서치 아니고 공부 맞음 ㅜ)

커스터마이징이 용이한가

이는 저희가 하려는 인플루언서 커머스가 기존 일반 커머스와 다르다는 것을 전제로 합니다. 솔루션이 Open source로 변경 및 확장이 용이한지, Table이나 Field를 쉽게 변경할수 있는지, Custom api를 만들 수 있는지 등을 알아야 했습니다. 특히 상품의 variation이 얼마나 잘 지원되는지도 궁금했습니다. (같은 상품을 스몰, 라지로 판매할 경우 Product → ProductVariant의 관계 필요)

그 밖에 조사한 것들

Database (import) /export 용이성 (외부 솔루션은 결국은 거쳐가는 것 뿐이…)
Multi-vendor 지원 여부 (지금 당장은 아니더라도 커머스가 잘 되어가면 가야 할 방향이지 않을까?)
User model을 내부 database로 사용할 수 있는지 여부
Payment를 추가하는 Plugin이 얼마나 쉽게 구성되어 있는지 여부
비가입자의 주문/결제가 가능한지 여부
적립금 개념 탑재(?) 여부
위 관점에서 조사를 하다보니 결국 Shopify의 늪에 빠지고 말았습니다. Shopify는 커스터마이징이 쉬운거 같기도 하고 아닌거 같기도 하고, 장점이 많은거 같기도 하고 단점이 많은거 같기도 하고, 계속 쓸만한거 같기도 하고 결국은 옮겨야 되는거 같기도 하고… 아무튼 그랬습니다

3. Shopify에 대해 알아보자

https://www.shopify.com/
Shopify의 컨셉

Shopify는 비개발자가 자신의 커머스 사이트를 쉽게 만들 수 있는 사이트로 첫 출발했습니다. 즉 판매자가 제품을 셋업하고 판매하기 위해 시작부터 끝까지 필요한 모든 것을 턴키 전자 상거래 형태로 제공하는 호스팅 서비스로 유사 서비스는 해외의 woocommerce, 국내의 cafe24 등이 있습니다. 거기에서 상품 등록, 주문, 배송 뿐만 아니라 마케팅, 통계 분석등 토탈 솔루션을 제공하기 시작했습니다. 그리고 Shopify App store 환경이 구축되면서 SaaS 기반의 이커머스 토탈 플랫폼 중에서도 크게 성공하는 길을 열게 됩니다.

App store는 생각보다 많이 활성화되어 있는데 Shopify App은 3rd party로서 기능을 add-on 할 수 있는 방식의 앱스토어입니다. Shopify 본진이 모든 것을 다 해낼 수는 없기에 부가기능들을 플러그인 앱을 통해 실현할 수 있도록 했죠. 예로 shopify는 single vendor의 기본 커머스를 매우 디테일하게 제공하고 있는데 앱을 확장함으로써 affiliate 기능이나 multi vendor 기능을 admin에 쉽게 추가하여 사용할 수 있게 됩니다.

Pricing

Shopify는 월 정액과 판매 수수료를 결합한 방식을 채택하고 있습니다. 그 내용은 아래와 같아요.


$29/month with 2.0% fee
$79/month with 1.0% fee
$299/month with 0.5% fee
하지만 Shopify의 무서운 점은 바로 앱인데요. 앱을 통해 기능을 확장함으로써 추가 비용을 발생시키게 됩니다. 예로 affiliate 기능을 제공하는 다음 앱은 아래와 같은데요 이 앱을 확장하게 될 경우 아래의 금액이 뾰로롱 추가됩니다

Secomapp: Affiliate Marketing - Ecommerce Plugins for Online Stores - Shopify App Store
Powerful influencer/referral/affiliate programs to grow sales Build, share, track and analyze affiliate/influencer…
apps.shopify.com

$19.99/mo with 300 referral orders/month
$49.99/mo with 600 referral orders/month
$99.99/mo with unlimited
Shopify의 장점

앱을 통해 확장하는 방식은, 단순히 커머스를 만드는게 아니라 마케팅하고 판매수단을 넓힐 수 있는 방안도 전반적으로 제공합니다.
SEO를 고려한 웹페이지 설계가 기본으로 되어 있습니다. 오랜 경험을 쌓은 솔루션을 택할 때 얻는 이점 같은 것이라 생각합니다.
소셜미디어, 마켓플레이스와의 연동으로 브랜드를 알리고 판매루트를 확장하는 것이 가능합니다. 글로벌로 빠르게 치달…
Shopify 단점

호스팅 솔루션의 공통점으로 source code를 제공하지 않아 확장이 용이하지 않음.
Shopify는 앱 생태계로 이를 극복하려 하나, 독자적 서비스를 만들 수 있는제품팀을 보유한 저희가 내린 결론은…. 애매하다 ㅜ
Shopify는 크게 커머스를 운영하려는 비개발자 집단과 Shopify에서 앱을 통해 수익을 창출하려는 개발자 집단이 존재합니다. 그리고 각 개별 커머스를 만들려는 제품팀을 보유한 회사는 뭔가, 그 가운데에 애매하게 낀거 같습니다. Shopify는 이 제품팀이 확장이 필요할 경우 역시 앱을 만들어 Shopify 내부 솔루션과 연동할 수 있도록 지원하며 이를 Public App이 아닌 Custom App으로 부르고 있습니다. (어차피 내부 서버 호스팅해서 확장 기능 개발한다면 굳이 Shopify를 굳이 써야 하나?의 의문이 강하게 제기되는 순간)
Shopify App

개발자는 Shopify App을 수익의 수단으로 활용할 수 있고 비개발자는 Shopify가 가진 기능적 제한을 해소하는 서비스 확장 수단으로 볼 수 있습니다. 또한 Shopify는 App의 기능을 아래와 같이 명확히 제한해두고 있습니다.

Shopify DB read/write
Shopify admin 기능 확장
Frontend 커스터마이징
Building Shopify Apps
Shopify apps are web applications that add functionality to Shopify stores. They can do this in several different ways…
shopify.dev

즉, Shopify Frontend의 표현에 대해서는 길이 열려있으나 DB의 확장은 불가능하며 개발자가 자체 서버를 따로 만들어서 Shopify admin을 확장하는 것은 가능합니다.

3_2. Shopify의 커스터마이징 능력을 파헤쳐보자
Shopify는 비개발자가 커머스를 운영하게끔 지원하는 서비스에서 앱스토어를 통해 개발자가 참여할 수 있는 환경으로 확장된 서비스입니다. 따라서 Shopify의 커스터마이징을 이해하고 비교하기 위해서는 비개발자/개발자가 있을 때와 없을 때로 구분해서 이해해야 합니다.

원하는 커머스가 다수의 커머스 사업자가 운영하는 일반적인 형태일 경우 Shopify로 큰 변형없이 활용가능할 수도 있으나 특별한 기능이 상품, 재고, 배송 등에 영향을 끼쳐서 Flow나 Logic을 전반적으로 수정/확장이 필요한 경우 부가적인 앱을 만드는 방향으로 이를 확장해야 합니다.

이를 프론트엔드와 백엔드 2가지 경우로 나누어서 정리해보겠습니다.


Frontend 커스터마이징 with 비개발자

Shopify는 프론트 변경에 있어서는 전반적으로 제약사항을 많이 두고 있지 않습니다. 조금 다르게 표현하면 비개발자도 프론트의 디자인이나 컨셉, 문구 등을 변경하기 위한 많은 선택사항이 존재합니다. Shopify store나 Themeforest에서도 쉽게 프론트엔드를 꾸미기 위한 Theme을 구매할 수 있고 색상이나 언어, 문구 등 세부적인 변경도 잘 지원하는 편입니다. Themeforest에서 Theme을 구매할 때 더 싸다는건 안비밀.

Frontend 커스터마이징 with 개발자

커머스 솔루션은 보통 프론트엔드를 StoreFront로 많이 표현합니다. Shopify는 StoreFront api를 완전한 수준으로 지원하므로 백엔드의 database 규칙을 지킨다면 프론트를 완전히 갈아엎고 새롭게 만드는 것도 가능합니다. GraphQL api 형태로 shopify의 db에 접근가능합니다.

StoreFront api 바로 보기

Getting started with Shopify Storefront API
Note The Storefront API can only be accessed using GraphQL. If you're not familiar with GraphQL, we encourage you to…
shopify.dev

접근할 수 있는 data는 아래 링크를 참고하면 되는데 Product, Checkout, Order, Payment를 비롯해 대부분의 기능을 읽고 쓸 수 있습니다.

Queryable objects
Objects in GraphQL represent the resources that you can access. Objects can contain a list of fields, which are…
shopify.dev

내부 서버를 따로 두고 Custom App을 만들어 database와 api를 확장하는 것을 염두에 둔다면 프론트엔드의 제약은 사실상 없는 편이라 할 수 있습니다.

Frontend Liquid Markup Language

Theme이 shopify 내부 규격을 잘 맞춘 경우이거나 shopify의 디자인 템플릿을 사용하는 경우 비개발자/개발자도 쉽게 디자인 작업을 할 수 있습니다. Liquid는 shopify에서 ruby를 사용하며 만든 open-source Markup 언어입니다. 아래 링크를 통해 예를 확인할 수 있으며 프론트에서 사용하는 형태는 Django나 ROR에서 템플릿에 데이터를 표현하는 방식과 유사하다고 볼 수 있습니다.

Getting started with the Liquid markup language
Website designers and developers can use a template language to build webpages that combine static content, which is…
shopify.dev

즉, 특정 Theme을 구매하거나 구하여 최소의 노력으로 프론트를 디자인하고 싶은 경우 Liquid template을 사용하면 됩니다. 그렇지 않고 완전히 새롭게 만들고 싶은 경우 StoreFront api를 활용하여 프론트를 만들 수 있습니다.


Backend with 비개발자

비개발자가 Backend를 커스터마이징하는 방법은 극도로 제한되어 있습니다. (사실 없는 것일지도..) 유일하게 기능확장을 할 수 있는 방법은 Shopify의 앱스토어에서 앱을 활용하여 추가된 기능을 사용하는 것입니다. Shopify 앱은 Shopify 생태계 안에서 다른 개발자/개발회사가 확장기능을 만들어 제공/업데이트하는 것입니다. 생태계가 꽤 잘 구축되어 있어 다양한 기능이 확장 가능하나 그 앱이 제공하는 기능 안에서만 사용 가능하며 앱을 추가할 때마다 비용이 추가됩니다. 예로 influence affiliate program을 기능화시킨 Secomapp의 경우 아래의 링크처럼 월 $99.99를 추가로 지불해야 합니다.

Secomapp: Affiliate Marketing - Ecommerce Plugins for Online Stores - Shopify App Store
Powerful influencer/referral/affiliate programs to grow sales Build, share, track and analyze affiliate/influencer…
apps.shopify.com

Backend with 개발자

기본적으로 Shopify는 Open-source가 아니라 소스 수정 및 확장이 불가능하며 database 역시 Shopify 내부 서버에 존재하고 변경이 불가능합니다. 다만 주요 테이블은 meta field, attribute, variants 의 field가 있어 개발자가 임의로 정의하는 방식으로 추가 확장 지원하나 개수나 지원하는 테이블 등의 제약이 있습니다. 따라서 Shopify만 쓴다면 기능 확장을 하는 초기에 커스터마이징의 한계에 부딪힐 것이라 생각합니다.

그러나 개발자가 자신의 서버를 호스팅하고 shopify와 연동해서 기능 확장하는 방법이 있습니다. Shopify는 이를 Custom App 또는 Private App이라는 명목으로 지원하며 이를 Shopify와 매끄럽게 연결되게끔 합니다. Custom App은 앱스토어에 등록되지 않고 개인적으로 만들어 사용하는 앱이라고 생각하면 무방합니다. 즉 Shopify를 사용하는 개발자는 Shopify 앱 생태계에서 Public App을 만들어 추가 수익을 도모하거나 자신들만 활용할 목적의 Custom App을 만들게 됩니다.

Shopify의 migration

Shopify의 migration은 전반적으로 migration이 개발자 친화적이진 않은 것으로 보입니다. Shopify의 데이터 migration은 유저친화적 UI를 통해 CSV 파일 형태로 import / export가 가능합니다. CLI나 API 형태로 제공은 가능하지 않은 것으로 파악되며 단지 Shopify plus라는 엔터프라이즈 용 가격 정책을 쓸 경우 ‘import’에 한해서 CLI자동화 기능을 사용하는 것이 가능하다고 합니다. (우리는 export에 더 관심이 있습니다만..) import와 export의 example은 아래 링크를 통해 확인 가능합니다.

Import example

Getting started with your store migration
This page was printed on Apr 02, 2020. For the current version, visit…
help.shopify.com

Export example

Exporting products
This page was printed on Apr 02, 2020. For the current version, visit…
help.shopify.com

사용자의 경우 password가 마이그레이션이 안되기 때문에 차후 별도의 서비스를 만들 것을 고려한다면 별도의 중간 서버를 구축하여 사용자 정보를 동기화하거나 새롭게 사용자를 초대하여 비밀번호를 리셋시켜야 합니다. 관련하여 아래 링크를 참조하면 좋을 것 같습니다.

Customer migration- best practices
I'm in the process of moving my site to Shopify from an Amazon web store. I used Shopify's tool to import my products…
community.shopify.com

4. Django eCommerce 프레임워크
이쯤에서 저희는 Shopify를 쓰는 옵션을 버리게 되었고, 처음부터 모든 것을 만들어갈지 프레임워크로 시작할지에 대한 기로에 놓이게 됩니다. (현재 진행 중)

아래와 같이 주요 Django eCommerce 프레임워크의 링크와 이미 이 솔루션을 거쳐가신 선배님들의 비교 및 리뷰 글을 보면서 블로그를 마칠려고 합니다. 리뷰 글은 최대한 있는 그대로 직역했구요. 리뷰를 최대한 많이 뜯어본 결과 내린 결론은 결국은 직접 해봐야 된다 (항상 같은 결론에 도달하는거 같긴 하지만) 입니다.

Django eCommerce things

sample codes step by step

codingforentrepreneurs/eCommerce
This course will teach you step-by-step to build a eCommerce site from scratch. We'll be using open-source software to…
github.com

saleor (7000+ stars)

mirumee/saleor
Customer-centric e-commerce on a modern stack A headless, GraphQL-first e-commerce platform delivering ultra-fast…
github.com

shuup (1100+ stars)

shuup/shuup
Shuup is an Open Source E-Commerce Platform based on Django and Python. https://shuup.com/ Copyright (c) 2012-2020 by…
github.com

oscar (4200+ stars)

django-oscar/django-oscar
Oscar is an e-commerce framework for Django designed for building domain-driven sites. It is structured such that any…
github.com

doorstep

mysteryjeans/doorstep
Doorstep is open source e-commerce solution, simplicity in designed is to thrive sales and reduce development effort.
github.com

Django solution reviews (by mainly reddit and googling)

직접 만들 때의 장점
eCommerce는 정형화되기 어렵고 특정 프레임워크를 사용하더라도 그들의 업데이트 방식에 논쟁을 하기가 쉽지 않음. 그리고 대부분 무료로 제공하는 정도는 쉽게 짤 수 있다고 생각함

직접 만들때의 단점
결정해야 될 구조적 문제들이 많고 결국 참고할 레퍼런스에서 많이 재작성할 코드들이 많음. 많이 테스트되고 리뷰된 솔루션보다 올바른 결정을 할 수 있을지 의문이 됨

Shopify vs Django solution
비즈니스적으로 바로 상품을 팔고 싶다면 shopify를 쓰고 long term으로 커스터마이징을 하려면 Django solution이나 직접 짤 것

e-commerce는 기능이 추가될 것이 매우 많고 커스터마이징이 필요하므로 shopify가 적절한 대안이 아님. 내 아내는 제한된 기능에서 shopify를 쓰고 있는데 기능 추가시마다 드는 비용이 비싸고 심지어 꽤 느림

Shopify를 쓰고 싶다면 내부 django 서버를 두어서 동기화시켜야할 필요성이 있음

Shopify는 subscription을 지원하지 않아서 복잡하게 구현할 필요 있음

Saleor 장점
modern looking 스타일의 프레임워크

커스터마이징 시 코드를 깨끗하게 유지할 수 있고 기능 확장도 용이

부가기능이 많음 (geolocalization, multilingualism, taxes, multiple currencies, discounts, order fulfillment, SEO tools, user-friendly dashboard) — by salor contributor

Django solution 중에는 saleor가 가장 좋으나 multi vendor feature가 지원되지 않고 계획이 없음

Saleor로 몇번 작업을 해봤는데 프레임워크라기보다 fork할 프로젝트에 가까움. 좋은 시작점이자 당신만의 코드를 짜더라도 좋은 레퍼런스가 될 수 있음

숨겨진 기능이 많고 프론트를 별도로 만들어도 GraphQL api로 쉽게 대처됨. 모델이 비교적 이해하기 쉬움

Saleor 단점
Contributor가 saleor 회사에 종속되어 있어 프레임워크 느낌이 들지 않음

Community가 활성화되어 있지 않아 보임

제시된 프론트엔드 React 코드가 별로임 (React를 아는 사람)

django-payments를 사용해서 checkout을 하는데 커스터마이징된 payment를 쉽게 추가할 수 있을지 모르겠음

admin을 수정하려면 react를 배워야 함

그들의 슬로건인 moving fast and breaking things를 볼 때, 큰 변화를 자주 주는 것으로 보임. Fork 떠서 소스를 한참 만들었는데 업데이트가 되면..?

Oscar 장점
pre-built sales funnel/checkout flow가 존재함

완전히 모듈화되어 있어 원하는 로직에 녹이기 용이함

쉽게 클래스 형태로 변경가능한 모듈형식이 좋음

커스터마이징할게 많지 않다면 프레임워크 기반의 oscar를 사용할 것을 추천

꽤 복잡하지만 좋은 기능이 많아 override해서 쓰기 좋음

Django의 eCommerce sector가 좋진 않지만 그나마 oscar가 리서치 결과 좋은 대안이었음. 그렇지만 php 배우는걸 더 추천

Component base가 좋음

Oscar 단점
오스카는 러닝커브가 길었음.

서유럽 출신이 아니면 Oscar lingo 방식이 헷갈릴 수 있음

커스터마이징을 많이 할 경우 doc이 좋지 않고 소스를 보는데 시간을 많이 할애해야 함.

doc 기술하는 방식이 좋지 않고 헷갈려서 러닝커브가 있음

oscar의 모듈 패턴은 약간의 기능을 커스터마이징하기엔 용이하나 크게 바꾸고 싶을 경우 엄청나게 많은 code를 override해야하고 하다보면 왜 이러고 있나 할 수 있음

oscar를 상용화하기까지 코드를 짜다보니 oscar의 기존 코드는 없어졌음. 이후로 forkable solution을 지지함

커스터마이징하다보면 대부분의 코드가 custom code로 이루어지게 됨

결국 oscar를 선택했지만 완전히 이해하는데 6개월 걸림

그 밖에..
Shuup는 상용화의 준비가 되어있지 않은 것 같음

5. 마치며..
긴 글 읽어주셔서 감사드립니다. 새로운 커머스 프로젝트를 시작하는 분들이나 개발자 관점에서 Shopify를 검토하시는 분들에게 도움이 되면 좋겠구요. 현재 진행형인 커머스 프로젝트의 다음 소식을 가지고 또 돌아오겠습니다.

Written by Japing81
developer

제가 쓴 글에 관심이 생기셨거나 얘기를 나누길 원하시는 분은 편하게 연락 주세요. 서비스 개발에 관한 발전적인 토론은 언제나 환영입니다.

juyup.sung@uconnec.com
