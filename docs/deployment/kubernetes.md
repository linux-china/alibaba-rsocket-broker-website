---
sidebar_position: 3
---

# Kubernetes部署

在Kubernetes集群中部署RSocket Broker最快捷的方式就是通过Helm安装，安装步骤如下：

```bash
helm repo add alibaba-rsocket-broker https://alibaba-rsocket-broker.github.io/helm/charts/
helm install rsocket-broker alibaba-rsocket-broker/alibaba-rsocket-broker
```

在Helm安装完毕后，你可以使用rsocket-box对RSocket Broker进行测试，启动rsocket-box命令如下： 

```bash
kubectl run -i --rm --tty rsocket-box --image=linuxchina/rsocket-box --restart=Never --image-pull-policy=Always
```

更多关于rsocket-box信息请参考： https://github.com/alibaba-rsocket-broker/rsocket-box

# 参考资源

* Alibaba RSocket Broker Docker镜像: https://hub.docker.com/r/linuxchina/alibaba-rsocket-broker
* Alibaba RSocket Broker Helm: https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker
* RSocket Broker Kubernetes部署: https://github.com/alibaba/alibaba-rsocket-broker/wiki/RSocket-Kubernetes
