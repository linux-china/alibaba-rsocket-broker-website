import React from 'react';
import clsx from 'clsx';


const textContent = {
    intro: `
RSocket是基于Reactive语义的全异步、二进制、消息驱动通讯协议，是Reactive生态的通讯核心。
异步化的架构可以消除I/O阻塞(None Blocking)，让应用的处理能力更高，你需要的支付成本更低。

此外Reactive的概念和异步化(async/await)、Event Loop、协程(Coroutines)、Actor等模型相通，
而且这些框架之间也都能相互兼容，如Reactive框架和Akka就完全互通的，非常便于你采用不同的技术栈和开发语言构建高性能的分布式应用。

<br/><br/>
<strong>适用场景：</strong> 基于事件驱动的架构设计、是云原生和Serverless架构的首选。
对异步化生态支持友好，如Node.js和Deno等。 Reactor、RSocket和R2DBC是Spring Reactive生态核心，
也是Spring Reactive技术栈的技术首选。
  `,
    polyglot: `
RSocket是标准的通讯协议，包括各个主流语言的SDK支持，如Java/Kotlin，Node.js, Python, .Net, Golang, C++等，
也包括对新兴语言的支持，如Rust，Deno，Swift等，确保各种开发语言都可以无缝和RSocket对接。

RSocket采用统一的Reactive编程模型，学习成本非常低，各种语言的Reactive差别也比较小，非常适合全栈(FullStack)工程师。
此外根据不同语言的特性，RSocket SDK有对应的语言特性调整，如JavaScript/TypeScript/Dart等语言的await/async Promise支持，
Python的AsyncIO整合，Kotlin Coroutines和Flow整合等，确保RSocket SDK也是Language Native的，没有任何违和感，减小语言接入成本。
<br/><br/>
<strong>支持的平台：</strong> Spring Platform，包括Spring Boot, Spring Cloud等。 Kotlin Platform，包括Kotlin/Java, Kotlin/JS和Kotlin Native等支持。
JavaScript生态：支持浏览器支持、Node.js和Deno，RxJS和Svelte无缝对接。
  `,
    hybridCloud: `
RSocket支持多种通讯模型，完全可以满足多种通讯场景的需求，如远程调用(RPC)、消息订阅(Pub/Sub), 双向发送(Channel)，和元信息推送(Metadata Push)等。 
此外在RSocket还可以通过Adapter/Gateway方式和其他协议之间相互通讯，如HTTP REST, gRPC, MQTT等，简化各种应用/设备之间的对接成本。
RSocket还支持对等(Peer 2 Peer)，也就是通讯双方互为Client/Server，通过RSocket Broker的接入，兼容各种网络结构，无需网络改造就可以支持各种混合云/基础设施之间的通讯。
<br/><br/>
<strong>适用场景：</strong> 混合云之间通讯，无需Gateway等基础设施。SaaS和合作伙伴对接，多种通讯模型，满足复杂的企业架构需求。
 IoT和云间的通讯，完善的异步化支持、流式推送、断点续传(Resume)支持，非常适合小型设备接入。
  `
};

function Heading({text}) {
    return <h2 className="Heading HeadingColor">{text}</h2>;
}

function TextColumn({title, text, moreContent}) {
    return (
        <div>
            <Heading text={title}/>
            <div dangerouslySetInnerHTML={{__html: text}}/>
            {moreContent}
        </div>
    );
}

function TwoColumns({columnOne, columnTwo, reverse}) {
    return (
        <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
            <div className={`column first ${reverse ? 'right' : 'left'}`}>
                {columnOne}
            </div>
            <div className={`column last ${reverse ? 'left' : 'right'}`}>
                {columnTwo}
            </div>
        </div>
    );
}

function Section({
                     element = 'section',
                     children,
                     className,
                 }) {
    const El = element;
    return <El className={`Section ${className}`}>{children}</El>;
}

function AsyncRPC() {
    return (
        <Section className={clsx('col col--12')}>
            <a id="async"/>
            <TwoColumns
                reverse={false}
                columnOne={
                    <TextColumn
                        title="Reactive生态/全异步化架构"
                        text={textContent.intro}
                    />
                }
                columnTwo={<img alt="" src={'img/tutorial/reactive-landscape-b.png'}/>}
            />
        </Section>
    );
}

function HybridCloud() {
    return (
        <Section className={clsx('col col--12')}>
            <a id="hybrid"/>
            <TwoColumns
                reverse={false}
                columnOne={
                    <TextColumn
                        title="混合云"
                        text={textContent.hybridCloud}
                    />
                }
                columnTwo={<img alt="" src={'img/hybrid-cloud.png'}/>}
            />
        </Section>
    );
}

function Polyglot() {
    return (
        <Section className={clsx('col col--12')}>
            <a id="polyglot"/>
            <TwoColumns
                reverse={true}
                columnOne={
                    <TextColumn
                        title="多语言场景"
                        text={textContent.polyglot}
                    />
                }
                columnTwo={<img alt="" src={'img/tutorial/rsocket-stack.png'}/>}
            />
        </Section>
    );
}

export default function HomepageUseCases() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <AsyncRPC/>
                    <Polyglot/>
                    <HybridCloud/>
                </div>
            </div>
        </section>
    );
}
