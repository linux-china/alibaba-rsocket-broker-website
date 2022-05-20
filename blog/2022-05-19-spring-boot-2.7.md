---
title: Alibaba RSocket Broker with Spring Boot 2.7.0
author: linux_china
author_title: RSocket Broker作者
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [rsocket, release]
---

Spring Boot 2.7.0正式发布了，详细请参考 https://spring.io/blog/2022/05/19/spring-boot-2-7-0-available-now
其中包括了不少新特性，这里列举一下：

* Spring GraphQL的支持：Spring GraphQL支持RSocket协议，请参考 https://spring.io/blog/2022/05/19/spring-for-graphql-1-0-release
* 简化了Jackson Mixins的注册:

```
@RestController
public class UserController {

  @GetMapping("/user")
  public User user() {
    return new User(1L, "jaciej", "my-secret-password");
  }
}

record User(Long id, String username, String password) {}

@JsonMixin(User.class) 
class UserMixin {
   @JsonIgnore
   private String password;
}

```

* SSL配置支持PEM格式证书

```
server.ssl.enabled=true
server.http2.enabled=true
server.ssl.certificate-private-key=classpath:cert/key.pem
server.ssl.certificate=classpath:cert/cert.pem
server.ssl.key-store-password=changeit
```

SSL的PEM配置同样适用于RSocket TCP Server，对应的配置项如下：

```
spring.rsocket.server.ssl.certificate-private-key=classpath:cert/key.pem
spring.rsocket.server.ssl.certificate=classpath:cert/cert.pem
```

* RSocket handler支持 `@Authenticated` `Principal`

```java
@MessageMapping ("test") 
Mono<String> hello (@Authenticated Principal p){ 
    return Mono.just ("Hello, "  + p.getName()) ;
}
```

当然Alibaba RSocket Broker也是支持Spring Boot 2.7.0的，此外也不要忘记Java 17的支持，祝大家开发愉快！
