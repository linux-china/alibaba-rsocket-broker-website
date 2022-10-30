---
title: rsocket-py命令行介绍
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [rsocket]
---

[rsocket-py](https://github.com/rsocket/rsocket-py/)是RSocket的Python客户端，目前已经支持了RSocket协议的多数功能，
如TCP, WebSocket, QUIC, HTTP3协议支持，RxPy集成等，详细请参考 https://github.com/rsocket/rsocket-py/#progress
如果你使用Python进行应用开发的话，那么使用rsocket-py完全没有问题。

最新的rsocket-py 0.4.2版本添加了命令行的支持，也就是说你现在可以通过`rsocket-py`命令就可以进行RSocket服务的测试，
这个和RSocket另外一个命令行工具[rsc](https://github.com/making/rsc)非常相似，不同的是rsc使用Java + Spring Boot开发，
而rsocket-py命令行工具则是使用Python开发，主要是方便一些Python的开发者。

安装rsocket-py命令行非常简单，只需要执行`pip3 install "rsocket[cli]"`即可，接下来就是使用`rsocket-py`命令行。
简单样例如下：

```shell
$ rsocket-py --request --route hello --data 'Jackie' ws://localhost:8080/rsocket
$ rsc --request --route hello --data 'Jackie' ws://localhost:8080/rsocket
```

考虑到rsc开发在先，rsocket-py命令行的参数和rsc命令行的参数基本上是一致的，保证了Java/Python开发者一致的使用体验。

最后关于rsocket-py及其命令介绍，请参考：https://rsocket.io/guides/rsocket-py
