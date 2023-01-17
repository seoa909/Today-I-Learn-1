# 백그라운드 데몬01 - Forever

# 설치 
- ubuntu 인스턴스에서 ```sudo npm install forever -g```


# 시작
- 일반적인 방법 ```forever start node index.ts```
- 특정 명령어 입력(주의: 제일 뒤에 경로추가해야함)```forever start -c "npm start" ./```


# 리스트 확인
- ```forever list```


# 중지
- ```forever stop 리스트번호```
- ex) ```forever stop 0```
