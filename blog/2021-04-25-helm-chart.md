---
title: Alibaba RSocket Broker Helm Chart发布 
author: linux_china 
author_title: RSocket Broker作者 
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [broker, helm, kubernetes]
---

Alibaba RSocket Broker 1.1.0版本增加了Kubernetes的支持， 部署也不是特别麻烦，就是大家都懂的`kubectl apply -f deployment.yaml`， 考虑到K8S社区还是基于Helm部署为主，所以我们添加了RSocket Broker Helm Chart，借助Helm更方便地管理RSocket Broker部署。
详细的信息请参考： https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker

RSocket Broker的Helm安装步骤如下：

```
helm repo add alibaba-rsocket-broker https://alibaba-rsocket-broker.github.io/helm/charts/
helm install rsocket-broker alibaba-rsocket-broker/alibaba-rsocket-broker
```

在使用Helm安装RSocket Broker完毕后，我们建议使用rsocket-box来验证RSocket Broker是否正常工作，命令行如下：

```bash
kubectl run -i --rm --tty rsocket-box --image=linuxchina/rsocket-box --restart=Never --image-pull-policy=Always
```

然后调用alirsc对rsocket broker的集群进行服务测试，如查看Broker集群的拓扑结构： 

```
$ alirsc tcp://rsocket-broker.rsocket.svc.cluster.local:9999 --request --route com.alibaba.user.UserService.findById -d '[1]'
```
