---
sidebar_position: 2
---

# Gossip广播集群部署

在日常测试和产品环境下，RSocket Broker会涉及到多台服务器，虽然单台Broker可能性能已经能够满足啦，但是考虑到RSocket Broker还涉及到发布等，
所以最少需要2台及以上RSocket Broker实例组成一个集群。 这个时候你可以选择基于Gossip广播进行集群搭建，这种方式的好处在于不需要对网络进行任何调整，
只需要产品环境包含对应的服务器就可以。

Gossip广播需要种子节点，所以你需要给每一个RSocket Broker实例分配固定的IP，然后将其中的一些IP作为种子地址添加到application.properties配置项中，如下： 

```properties title="/src/main/resources/application.properties"
rsocket.broker.topology=gossip
rsocket.broker.seeds=192.168.1.2,192.168.1.3,192.168.1.4
```

这样RSocket Broker实例启动后，就会基于种子地址的信息进行Gossip通知并组成一个集群。 

**注意：** Gossip广播设置和监听端口号42254

更多详细信息，请参考 [RSocket Broker README](https://github.com/alibaba/alibaba-rsocket-broker/tree/master/alibaba-broker-server)
