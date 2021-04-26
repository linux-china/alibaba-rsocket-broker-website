/** @type { import('@docusaurus/types').DocusaurusConfig } */
module.exports = {
    title: 'Alibaba RSocket Broker',
    tagline: '快速构建即时响应(Responsive)、自恢复(Resilient)、弹性(Elastic)、消息驱动(Message Driven)的分布式通讯系统',
    url: 'https://alibaba-rsocket-broker.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/favicon.ico',
    organizationName: 'alibaba-rsocket-broker', // Usually your GitHub org/user name.
    projectName: 'alibaba-rsocket-broker-website', // Usually your repo name.
    themeConfig: {
        i18n: {
            defaultLocale: 'en',
            locales: ['en','zh-Hans']
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
            style: 'dark',
            links: [
                {
                    title: '文档',
                    items: [
                        {
                            label: '快速入门',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Kubernetes & Helm',
                            to: 'https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker',
                        }
                    ],
                },
                {
                    title: '社区',
                    items: [
                        {
                            label: 'RSocket Home',
                            href: 'https://rsocket.io',
                        },
                        {
                            label: 'Wiki',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker/wiki',
                        },
                        {
                            label: 'Issues',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker/issues',
                        },
                        {
                            label: 'RSocketByExamples',
                            href: 'http://rsocketbyexample.info/',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/alibaba/alibaba-rsocket-broker',
                        },
                        {
                            label: 'Helm Chart',
                            to: 'https://artifacthub.io/packages/helm/alibaba-rsocket-broker/alibaba-rsocket-broker',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Alibaba RSocket Broker. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
