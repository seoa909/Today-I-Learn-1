# 목요일, 그리고 오늘 컨디션은 4.5/5

오늘은 큰 일은 안하고
- 전체적인 Dashboard의 resolution 변경
- 유저 회원가입(관리자만) 

이정도 한거같다.

모든유저정보 보기, 로그인 체크 까지 만들려했지만, 내일 할일이 없을거 같아서 일단 보류했다.

그러다가 월드컵에 롤백되었던 부분을 다시 돌려놓고, 이것저것 손을 봐줬다.

그러던 도중 고민이 하나 생겼는데, 아이폰은 노치 영역이라는게 있다.

노치영역이 ui를 가리기 때문에, 처리를 해 주어야한다.

그런데 나는 RN이 아닌 리액트로만 하기때문에 고민이많다. (물론 노치영역을 가진 폰도 없다)

월드컵은 번역쪽이 롤백이 좀 됬어서 돌렸고, 반응형까지 끝난거 같다.

이제 애니메이션 추가, 메타태그 변경, 팝업창 정도만 하면 1차 배포는 끝이다.

물론 safe area도 잡아야하긴 하는데.. 이건 조금 고민이 더 필요한거 같다.

------------------------------------------

오늘은 갑자기 아침에 떠오른 아이디어가 있다.

일단은 웹 이라고 하긴 좀 그렇고, 깃헙 리드미를 자동화 시켜주는 프로그램을 만들어 볼까 한다.

자동화 시켜주는 내용은, 세화님이 지금 하시는 날씨 관련 아이디어가 좋을거 같아서, 

깃헙 리드미 파일을 한시간에 한번씩 public api를 fetching 해오던지, 네이버 날씨를 크롤링 하던지 해야한다.

아마 풀스택 모노레포가 될거같고, 서버로는 노드로 할지 파이썬을할지... 등은 아직 고민중이다.

대충 방법은 이렇다.

서버로 데이터를 가져오거나 긁어온다.

그 다음에 데이터를 json 형식으로 프론트쪽 폴더 어딘가에 저장

프론트는 한시간마다 크론잡을 통해 깃헙액션으로 리드미 업데이트.

---------------------------------------------------

이것저것 해보고 싶고, 시간도 괜찮게 있으니.. 이것저것 해볼까 한다.