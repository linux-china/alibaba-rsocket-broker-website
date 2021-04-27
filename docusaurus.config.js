/** @type { import('@docusaurus/types').DocusaurusConfig } */
module.exports = {
    title: 'Alibaba RSocket Broker',
    tagline: '快速构建即时响应(Responsive)、自恢复(Resilient)、弹性(Elastic)、消息驱动(Message Driven)的分布式通讯系统',
    url: 'https://alibroker.info/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/favicon.ico',
    organizationName: 'alibaba', // Usually your GitHub org/user name.
    projectName: 'alibaba-rsocket-broker', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'kotlin', 'properties'],
        },
        i18n: {
            defaultLocale: 'en',
            locales: ['en', 'zh-Hans']
        },
        colorMode: {
            defaultMode: 'light'
        },
        navbar: {
            title: 'Alibaba RSocket Broker',
            logo: {
                alt: 'Alibaba RSocket Broker',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '文档',
                },
                {to: '/blog', label: '博客', position: 'left'},
                {
                    href: 'https://github.com/alibaba/alibaba-rsocket-broker',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: '文档',
                    items: [
                        {
                            label: 'RSocket Broker快速入门',
                            to: '/docs/intro',
                        },
                        {
                            label: 'RSocket Broker工作原理',
                            to: '/docs/rsocket-broker/how-it-works',
                        },
                        {
                            label: 'Kubernetes部署',
                            to: '/docs/deployment/kubernetes',
                        },
                        {
                            label: 'RSocket Broker Wiki',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker/wiki',
                        },
                        {
                            label: 'RSocket Broker Issues',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker/issues',
                        },
                    ],
                },
                {
                    title: 'RSocket社区',
                    items: [
                        {
                            label: 'RSocket Home',
                            href: 'https://rsocket.io',
                        },
                        {
                            label: 'Reactive Foundation',
                            href: 'https://www.reactive.foundation/',
                        },
                        {
                            label: '反应式宣言',
                            href: 'https://www.reactivemanifesto.org/zh-CN',
                        },
                        {
                            label: 'RSocket by Example',
                            href: 'https://rsocketbyexample.info/',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: 'GitHub源码',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker',
                        },
                        {
                            label: 'RSocket GraalVM native-image',
                            href: 'https://github.com/alibaba-rsocket-broker/ali-rsocket-graal-demo',
                        },
                        {
                            label: 'RSocket Broker Helm Chart',
                            to: 'https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Alibaba Open Source Logo',
                src: 'img/alibaba-opensource.png',
                href: 'https://github.com/alibaba/',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Alibaba RSocket Broker. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
            },
        ],
    ],
};
