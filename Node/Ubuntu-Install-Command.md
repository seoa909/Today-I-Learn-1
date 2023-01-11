# 배포후 ubuntu에서 추가설치 명령어


- 아래순서대로

```js

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start

// 본인 포트가 3000번이면 뒤에 3000, 다른거면 다른거
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```

# 주의할점
env로 아래처럼 쓰면 안됌
```js
USER= xxxxx
```

이건 ubuntu의 env와 겹치는지 콘솔 찍어보면 ubuntu 나옴..
