# 도커 명령어

```js
# 이미지 만들기
# 명령어: docker build -f Dockerfile -t fun-docker .
# 설명: 도커를 빌드한다, 우리의 도커파일이름, 저장될이미지 이름,  . 은 이제 명령의 마무리를 나타냄

# 이미지를 이용해서 컨테이너 실행
# docker run -d -p 3000:3000 fun-docker

# 실행중인 컨테이너 확인
# docker ps

# 컨테이너 정지
# docker stop 이름

# 컨테이너 삭제 (실행이 안되고 있어야함)
# docker rm 이름

# 이미지 확인(도커 태그 이름 확인)
# docker images

# 헙에가서 리포 만들고 복사하자.. 그래야 push 된다.

# 도커 태그 복사
# docker tag fun-docker:latest junhokevinkim0408/test

# 도커 리파지토리에 이미지 푸시하기
# docker push 리자지토리이름:태그이름
# ex) docker push junhotest/test:latest
# 만약 access denied => 로그인

# 땡기기 => 이미지를 땡겨오는거다.
# docker pull junhokevinkim0408/test

# 그러면 이 이미지로 도커를 실행해서 규칙을 맞추는 거 같음.
```
