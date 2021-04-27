---
sidebar_position: 1
---

# 开发环境部署

为了便于项目开发和日常环境测试，Alibaba RSocket Broker包括了多种快速启动方式，如下：

### 独立jar启动

```bash
curl -o alibaba-broker-server.jar -L https://repo1.maven.org/maven2/com/alibaba/rsocket/alibaba-broker-server/1.1.0/alibaba-broker-server-1.1.0.jar
java -jar alibaba-broker-server.jar
```

### Docker命令行启动

```bash
docker run --rm --name alibaba-rsocket-broker -p 9997:9997 -p 9998:9998 -p 9999:9999  linuxchina/alibaba-rsocket-broker
```

### docker-compose.yml文件启动

如果你使用Docker Compose来管理应用开发环境，只需要在docker-compose.yml中包含以下代码即可：

```yaml
version: "3"
services:
  alibaba-rsocket-broker:
    image: linuxchina/alibaba-rsocket-broker:1.1.0
    ports:
      - "9997:9997"
      - "9998:9998"
      - "9999:9999"
```

# RSocket Broker Web控制台

RSocket Broker在启动后，会包含一个对应的Web控制台，对应的地址为：http://localhost:9998/
