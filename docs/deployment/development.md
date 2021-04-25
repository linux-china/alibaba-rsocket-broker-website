---
sidebar_position: 1
---

# 开发环境部署

为了便于项目开发和日常环境测试，最便捷的做法就是使用Docker Compose来启动RSocket Broker。

docker-compose.yml文件内容如下： 

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

然后执行 `docker-compose up -d` 启动RSocket Broker，对应的Web控制台为 http://localhost:9998/
