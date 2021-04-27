---
sidebar_position: 1
---

# Alibaba RSocket Broker特性

Alibaba RSocket Broker除了支持RSocket通讯以外，还支持各种特性，主要特性分类如下： 

# 开发支持

* rsc命令行测试支持
* 外部的单元测试和集成测试支持: RSocket Mock Server, TestContainer等
* 支持Kubernetes Liveness & Readiness Probes
* GraalVM native-image支持
* Kotlin支持
* 日志查看： 基于error code方式的日志记录，排查问题更方便
* Metrics采集： 设计到连接、服务接口
* Docker镜像支持： 快速启动RSocket Broker，方便开发和测试

# 通讯层

* 基于Java Interface接口通讯规约
* 接入层Java SDK支持负载均衡和集群同步
* 支持WebSocket通讯：突破防火墙限制，支持外部伙伴安全接入
* 支持新版Linux内核(5.9版本以上)io_uring特性： Ubuntu 21.04兼容测试通过
* 支持RDMA(实验性)

# Reactive框架支持

主要支持以下三个Java Reactive框架

* Project Reactor
* RxJava 3
* Kotlin Coroutines & Flow

对于其他语言，如RxJS, RxPHP等，对应语言的SDK都有支持。

# 序列化框架支持

Alibaba RSocket Broker主要支持以下主流序列化框架，同时还支持自定义的序列化框架支持。

* Hessian
* JSON
* Protobuf
* Avro
* Cbor
* Java object serialization
* ByteBuffer支持： 如图片传输、数据分析场景，之间传递原生字节流

# Java生态支持

* Spring Boot集成：通过alibaba-rsocket-spring-boot-starter快速接入RSocket Broker，兼容Spring RSocket和Spring Cloud RSocket等
* Spring Boot Actuator支持： 快速了解RSocket接入和通讯情况，支持RSocket Broker的健康度检查
* Spring Cloud Discovery支持： RSocket Broker可以作为服务注册发现服务器
* ESB(企业服务总线)对接支持:  Spring Integration, Apache Camel

# 其他协议接入

RSocket和其他协议之间的互操作主要是通过Gateway的方式完成的，目前主要支持：

* HTTP: 通过HTTP REST API方式访问RSocket服务，由RSocket HTTP Gateway提供接入支持
* gRPC： 通过gRPC方式访问RSocket服务，由RSocket gRPC Gateway提供

# 服务治理

* 单个服务级别的上下线控制：可以下线某一应用的某一服务接口
* 单个服务提供者的权重设置： 应用基本的权重支持
* Metrics支持：完备的Metrics支持，支持应用级别、服务接口级别的Metrics采集
* Sticky Session支持：支持点对点通讯粘连特性，相关的服务接口调用只会发生在某一服务提供者节点上，如数据解析场景、顺序调用等业务场景

# 集群管理

目前Alibaba RSocket Broker主要是三者集群管理方式：

* Standalone: 单个Broker作集群，适合开发测试
* Gossip广播: 基于Gossip广播机制的集群管理，适合各种网络环境，也非常稳定，测试和产品环境均可使用
* Kubernetes: 适合基础架构为Kubernetes的场景，采用Helm部署，应用对接也非常简单

此外RSocket Broker提供完备的Web控制台。

# 安全

* 支持应用JWT接入支持，验证算法为RS256
* 支持RSocket的TLS加密，支持TLS 1.3和1.2两个版本
* 支持多租户设计，租户之间可以安全隔离，同时支持多租户之间的服务白名单通讯

