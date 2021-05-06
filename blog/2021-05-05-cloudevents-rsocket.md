---
title: CloudEvents Java SDK 2.1.0添加RSocket支持
author: linux_china 
author_title: RSocket Broker作者 
author_url: https://github.com/linux_china
author_image_url: https://avatars.githubusercontent.com/u/46711?s=96&v=4
tags: [cloudevents, rsocket, spring]
---

最新发布的CloudEvents Java SDK 2.1.0添加了RSocket支持，主要CloudEvents对应的cloudevents-spring模块，Maven依赖如下： 

```xml
   <dependency>
      <groupId>io.cloudevents</groupId>
      <artifactId>cloudevents-spring</artifactId>
      <version>2.1.0</version>
   </dependency>
```

这样特性主要就是CloudEvent接口类型可以作为API函数的参数或者返回值类型，这样就省去了对CloudEvent进行转换的操作，代码如下：

```java
    @MessageMapping("event")
	public Mono<CloudEvent> event(@RequestBody Mono<CloudEvent> body) {
		return body.map(event -> CloudEventBuilder.from(event) //
				.withId(UUID.randomUUID().toString()) //
				.withSource(URI.create("https://spring.io/foos")) //
				.withType("io.spring.event.Foo") //
				.withData(event.getData().toBytes()) //
				.build());
	}
```

为了达到上述的效果，你只需要添加一个RSocketStrategiesCustomizer bean，添加添加CloudEvent对应的encoder和decoder就可以，如下： 

```java
@Bean
@Order(-1)
public RSocketStrategiesCustomizer cloudEventsCustomizer() {
	return new RSocketStrategiesCustomizer() {
		@Override
		public void customize(Builder strategies) {
			strategies.encoder(new CloudEventEncoder());
			strategies.decoder(new CloudEventDecoder());
		}
	};
}
```

在启动Spring Boot RSocket应用后，你就可以使用一下命令进行测试： 

```bash
rsc --request --dataMimeType=application/cloudevents+json --route=event \
    --data='{"data": {"value": "Foo"},
           "id": "1", 
           "source": "cloud-event-example", 
           "type": "my.application.Foo", 
           "specversion": "1.0"}' \
    --debug tcp://localhost:7000
```

当然Alibaba RSocket Broker在1.1.0版本也增加了CloudEvent接口支持，你同样可以在API函数中使用CloudEvent作为参数和返回值。 

**注意**:  如果你使用CloudEvent作为参数类型，那么只能传递一个CloudEvent参数值，当然CloudEvent本身就包括数据和扩展，对实际使用没有任何影响。

CloudEvents Spring RSocket样例代码： https://github.com/cloudevents/sdk-java/blob/master/examples/spring-rsocket/pom.xml

