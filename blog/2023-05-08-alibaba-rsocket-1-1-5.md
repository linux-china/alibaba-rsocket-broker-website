---
title: Alibaba RSocket 1.1.5发布
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [ rsocket ]
---

Alibaba RSocket 1.1.5发布，核心的变化是将RSocket Broker Server，gRPC gateway, HTTP Gateway都升级到Java 17 + Spring Boot 3，
这样就可以使用最新的Java 17进行开发了，同时也可以使用最新的Spring Boot 3进行开发了。
Alibaba RSocket Broker的客户端还是兼容的Java 1.8的，你还是可以使用Java 1.8进行应用开发。

Spring Boot 3.0已经内置支持GraalVM native image，Alibaba RSocket Broker也对其进行了支持，
你可以使用Spring Boot 3.0开发native image应用，样例请参考： https://github.com/alibaba-rsocket-broker/ali-rsocket-graal-boot3-demo

### 特性调整

* Java 17 and Spring Boot 3 for RSocket Broker, gRPC gateway, HTTP Gateway

# Bug修复

* RSocket Broker 拒绝 accept 连接时，是否未关闭 requesterSocket [#224](https://github.com/alibaba/alibaba-rsocket-broker/issues/224)
* gRPC gateway的RPC类型判断错误

### 依赖更新

* Spring Boot 3 for Broker Service, gRPC gateway, HTTP Gateway
* Vaadin 24
* Kotlin 1.8.21 & Kotlin coroutines 1.7.0
