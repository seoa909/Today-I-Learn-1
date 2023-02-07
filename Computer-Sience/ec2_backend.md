# AWS EC2로 Backend 배포 (http)

- https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:
- 국가선택 및 인스턴스 생성
- ![image](https://user-images.githubusercontent.com/59503331/217316227-b73d8920-0ca0-48f1-a308-003f3749efeb.png)
- 우분투에 20.04로 선택(더 높으면 stable하지 않고, 낮으면 es6 못씀)
- ![image](https://user-images.githubusercontent.com/59503331/217316343-be779c43-06c1-4f41-b7f0-9e2707223301.png)
- 키페어 생성 후 보관 (중요)
- ![image](https://user-images.githubusercontent.com/59503331/217316422-b138c80d-530c-453b-b4a7-d059faa92428.png)
- 보안규칙생성, 3000포트는 본인이 서버에 사용하는 포트로
- 깃배시로 우분투 접속
- ssh -i 키페어 ubuntu@Public IPv4 address

- 파일 transfer을 해야하는데, filezila가 간편
- ![image](https://user-images.githubusercontent.com/59503331/217316772-a6a2302b-813c-4528-908f-91e6d76d9572.png)
- 사진처럼 채워놓고 연결

- 내가 필요한 파일 올리기 (노드모듈은 지우고 올리자)
- 아래 파일 설치로 이어짐
- https://github.com/kevinkim910408/Today-I-Learn/blob/main/Node/Ubuntu-Install-Command.md
