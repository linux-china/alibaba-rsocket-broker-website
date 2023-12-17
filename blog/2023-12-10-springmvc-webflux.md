---
title: Spring Boot 3.2同时支持SpringMVC和WebFlux
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [ rsocket ]
---

不少同学想在自己的项目中使用RSocket，但是考虑到自己的项目还是SpringMVC，没法迁移到WebFlux上，所以一直比较苦恼。
但是伴随着Spring Boot 3.2的发布，这个问题就迎刃而解了。

Reactor 3.6增加对Java 21 Virtual
Thread的支持，详细请参考 [What new is coming in reactor-core 3.6.0?](https://spring.io/blog/2023/10/31/what-new-is-coming-in-reactor-core-3-6-0)
也就是借助新的`BoundedElasticThreadPerTaskScheduler`类，可以使用Virtual Thread来执行任务。

伴随着Spring Boot 3.2的发布，Spring Boot也增加了对Java 21 Virtual Thread的支持，这也意味着我们可以在一个项目中同时支持SpringMVC和WebFlux，
你再也不用担心如何Web项目如何混合些SpringMVC和WebFlux了。

首先我们要在pom.xml中，添加`spring-boot-starter-web`作为web基础框架，另外添加`reactor-core`作为对Reactive的支持，如下：

```xml

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>io.projectreactor</groupId>
        <artifactId>reactor-core</artifactId>
    </dependency>

</dependencies>
```

接下来我们要在`application.properties`中，添加如下配置启动Virtual Thread的支持：

```properties
spring.threads.virtual.enabled=true
```

最后我们编写一个典型的SpringMVC的Controller，如下：

```java
@RestController
public class PortalController {

    @GetMapping("/where-am-i")
    public String getThreadName() {
        return Thread.currentThread().toString();
    }

    @GetMapping("/reactive")
    public Mono<String> reactive() {
        return Mono.just("Hello Reactor!").doOnNext(s -> {
            System.out.println("Reactive on " + Thread.currentThread());
        });
    }
}
```

你会发现不借助`spring-boot-starter-webflux`你可以在SpringMVC中使用`Mono`和`Flux`， 这样就可以在一个项目中同时支持SpringMVC和WebFlux了。

性能方面你不用担心，Reactive的调度是通过Virtual Thread来实现的，而不是传统的线程池，所以性能方面的担心是没有必要的。


总结一下：借助Java 21的Virtual Thread，Spring Boot 3.2通过Virtual
Thread同时支持SpringMVC和WebFlux，所以我们再也不用担心如何在一个项目中同时支持SpringMVC和WebFlux了。
当然基于Reactive的RSocket也是完全没有问题的。

