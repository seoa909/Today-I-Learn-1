# Browser Rendering Pipeline
- HTML Parsing: The browser utilizes its HTML Parser to convert this HTML text into the Document Object Model, or DOM.
- CSS Object Model: The browser will parse these stylesheets into a memory-efficient, lookup-efficient data structure, called the CSS Object Model, or CSSOM.
- Style and The Render Tree: Once the DOM and CSSOM are constructed, the browser can begin the next phase of the pipeline: Style. This phase is sometimes called Recalculate Style or a Render Tree Update.
- Layout: The Layout process (sometimes called Reflow) recursively traverses the newly constructed / updated Render Tree, and assigns each node precise floating-point positions and geometry.
- Paint: Once we have a styled, positioned set of Render Tree nodes, the browser utilizes a computational graphics library to draw the Render Tree nodes programmatically as pixels.
![123](https://user-images.githubusercontent.com/59503331/185799625-606d2027-7685-4a8e-b3fa-95cbdac2c355.png)

# 브라우저 렌더링 과정
- DOM, CSSOM(CSS Object Model)생성:  HTML은 DOM으로, CSS는 CSSOM으로 만듬.
- Render Tree생성: DOM Tree와 CSSOM Tree를 사용해서 Render Tree를 생성. (렌더트리에는 스타일 정보가 설정되어있다)
- Layout 단계: 브라우저의 뷰포트(Viewport) 내에서 각 노드들의 위치와 크기를 계산.
- Paint: Layout 계산이 완료되면 이제 요소들을 실제 화면을 그린다.
