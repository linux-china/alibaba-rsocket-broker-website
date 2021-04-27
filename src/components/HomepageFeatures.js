import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: '开发简易',
        image: 'img/broker-reactive.png',
        description: (
            <>
                通讯接口基于Reactive(Mono或者Flux)语义，服务实现自动完成Broker注册，服务调用方不用担心负载均衡、错误重试、限流等问题。
            </>
        ),
    },
    {
        title: '极致性能',
        image: 'img/broker-performance.png',
        description: (
            <>
                Alibaba RSocket Broker基于全异步化架构设计，通讯过程中内存操作完全是零拷贝(Zero Copy)，二进制路由解析，支持io_uring。
            </>
        ),
    },
    {
        title: '多语言支持',
        image: 'img/broker-languages.png',
        description: (
            <>
                RSocket包含对多种主流开发语言的支持，如Java/Kotlin, JavaScript/Node.js/Deno, Python, Golang, Rust等，总计10种以上开发语言。
            </>
        ),
    },
    {
        title: '多环境部署支持',
        image: 'img/broker-docker.png',
        description: (
            <>
                独立可执行Fat jar， Docker Compose快速启动，针对Kubernetes，提供完备的Helm部署支持，支持开发环境、测试环境和产品环境快速部署支持。
            </>
        ),
    },
    {
        title: 'Spring Boot友好',
        image: 'img/broker-spring.png',
        description: (
            <>
                针对Java开发者，提供了完备的Spring Boot支持(Actuator、Metrics等)，兼容Spring RSocket和Spring Cloud RSocket，rsc命令行测试等。
            </>
        ),
    },
    {
        title: '开放源码',
        image: 'img/broker-opensource.png',
        description: (
            <>
                不只是Alibaba RSocket Broker是开源的，RSocket的通讯协议、各个语言的SDK等，这些都是开源的，
                你可以参与或者定制内部版本的RSocket Broker。
            </>
        ),
    },
];

function Feature({image, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3 className="HeadingColor">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
