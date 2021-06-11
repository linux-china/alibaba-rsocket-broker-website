---
title: Alibaba RSocket Broker 1.1.1发布
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [graphql, rsocket]
---

从1.1.1版本开始，我们决定对RSocket Broker进行瘦身，一味地叠加特性不是好的设计策略。 将核心功能做的更加可靠，并提供更好的扩展才是好的设计策略，同时让RSocket Broker也能更小。
所以在1.1.1的版本中，我们将以下功能从RSocket Broker的核心代码移除： 

* Remove SMI beans：不会再支持 https://smi-spec.io/ 规范， 关于RSocket Broker和K8S整合，请参考 https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker 
* Config Server功能：从Broker中迁移到外部服务加载方式 https://github.com/alibaba-rsocket-broker/rsocket-broker-config-server-service
* HTTP DNS的功能移除

### 特性调整

* CloudEventsNotifyService： 可以给集群中任意应用或者任意应用实例列表发送CloudEvents事件
* 服务直连支持： 服务消费方通过Broker获取服务地址列表，然后直接给服务提供方通讯，Broker会提供对应的地址列表更新通知 https://github.com/alibaba/alibaba-rsocket-broker/wiki/RSocket-P2P
* CloudEvents Java SDK升级至2.1
* 添加对等通讯的能力: 如果某一服务接口在两个系统之间调用量非常大，你可以考虑跳过Broker而采取直连的方式，详细请参考 https://github.com/alibaba/alibaba-rsocket-broker/wiki/RSocket-P2P
* CloudEventImpl中添加事件来源，这样事件消费可以增加来源判断
* 添加GraphQL样例：https://github.com/alibaba-rsocket-broker/rsocket-graphql-gateway
* RSocket Broker控制台: Vaadin升级至20.0
* RSocket Java SDK升级至1.1.1
* Spring Boot 2.4.7/2.5.1兼容测试


如果你使用Kubernetes，那么建议看一下 [Alibaba RSocket Broker Helm chart](https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker) .
