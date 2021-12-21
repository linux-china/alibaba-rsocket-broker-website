---
title: Alibaba RSocket Broker JBang Catalog
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [broker, jbang]
---

考虑到方便Java开发人员更快启动Alibaba RSocket Broker进行本地测试，Alibaba RSocket Broker提供Jbang支持，现在你只需要执行以下命令就可以启动RSocket Broker。

```
jbang rsocket-broker@alibaba
```

JBang的安装请参考： https://www.jbang.dev/download/ ，如Mac下执行 `brew install jbangdev/tap/jbang` 即可。 

如果你本机已经安装了Docker Compose，那么使用Docker Compose启动RSocket Broker也是没有问题的，如下：

```yaml
version: "3"
services:
  alibaba-rsocket-broker:
    image: linuxchina/alibaba-rsocket-broker:1.1.2
    ports:
      - "9997:9997"
      - "9998:9998"
      - "9999:9999"
```
