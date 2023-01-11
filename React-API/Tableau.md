# 태블로 란?

- 라이브 차트, 라이브 대시보드를 만들기 좋은 데이터 저장소
- JavaScript API 파일은 Tableau 서버(Tableau Online, Tableau Public 포함)에 있어서 별도로 다운받을 필요가 없음. 웹페이지에서 JavaScript API 파일의 URL만 지정해주면 됨.
- 일반 인증 프로토콜(authentication)은 서버의 View에 엑세스하는데 사용되고, 호스팅된 Tableau 서버 인스턴스로부터 View를 얻어오는 경우에도 마찬가지로 (일반적으로) 인증이 필요함.
- (Tableau Public에서 View를 가져오는 경우에는 인증이 필요없음)
- 사용자가 로그인을 하지 않은 상태에서 View 요청을 하면 Tableau 서버는 서버 로그인 페이지로 이동시키고, 사용자는 이 페이지에서 사용자 이름과 암호를 입력해야 함.
– 사용자가 로그인을 하면 브라우저는 세션 정보를 저장하므로(캐시함, caches) 사용자가 서버에서 명시적으로 로그아웃을 하거나 세션이 만료되기 전까지는 다시 로그인을 할 필요가 없음.

- 자바스크립트 공부: https://peagcom.wordpress.com/2019/09/29/1-tableau-javascript-api-%ec%95%8c%ec%95%84%eb%b3%b4%ea%b8%b0/

- 샘플코드

```js
기본 포함 요소(Basic Embed)
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_basic_embed.htm
동적 로딩
: 전 후 버튼을 클릭하여 동일한 영역에 서로 다른 시각화를 출력
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_dynamic_load.htm
PDF로 추출
: PDF로 추출 버튼을 클릭하여 PDF로 추출하는 Dialog를 출력
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_export_to_pdf.htm
필터
: 페이지 내에 존재하는 필터를 이용해 시각화에 필터링 효과 주기
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_filter.htm
데이터 가져오기
: 현재 활성화된 시트의 기본 데이터(underlying data)를 가져옴. 단, 통합 문서의 데이터를 다운로드하기 위해서는 Tableau 서버 사용자 계정이 ownload Summary Data와 Download Full Data 권한을 가지고 있어야 함.
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_samples_get_data.htm
Resize
: 시각화를 지정한 크기로 조정함. 워크시트의 경우 시각화를 위한 div의 크기에 맞게 자동으로 크기가 조정되지만, 대시보드 및 스토리는 Tableau Desktop에서 자동 크기 옵션으로 작성하지 않으면 자동으로 크기가 조정되지 않음.
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_resize.htm
Event에 대한 응답
: Mark를 선택하면 선택한 Mark에 대한 정보를 표시
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_respond_to_events.htm
Mark 선택
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_sample_select_marks.htm
튜토리얼
https://help.tableau.com/samples/en-us/js_api/tutorial.htm
```
