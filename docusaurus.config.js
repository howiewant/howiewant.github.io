// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Howie's Blog",
    tagline: 'if you dont know now you know',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    // plugins: [
    //     [
    //         '@docusaurus/plugin-content-docs',
    //         {
    //             id: 'about',
    //             path: 'about',
    //             sidebarPath: require.resolve("./sidebars.js"),
    //             showLastUpdateTime: true,
    //             breadcrumbs: false,
    //         }
    //     ]
    // ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            logo: 'img/avatar.jpg',
            navbar: {
                title: "Howie's Blog",
                // logo: {
                //     alt: 'My Site Logo',
                //     src: 'img/avatar.svg',
                // },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'right',
                        label: '知识库',
                    },
                    {to: '/blog', label: '博客', position: 'right'},
                    {
                        to: '/about',
                        label: '关于',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                // links: [
                //     {
                //         title: 'Docs',
                //         items: [
                //             {
                //                 label: 'Tutorial',
                //                 to: '/docs/intro',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'Community',
                //         items: [
                //             {
                //                 label: 'Stack Overflow',
                //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //             },
                //             {
                //                 label: 'Discord',
                //                 href: 'https://discordapp.com/invite/docusaurus',
                //             },
                //             {
                //                 label: 'Twitter',
                //                 href: 'https://twitter.com/docusaurus',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'More',
                //         items: [
                //             {
                //                 label: 'Blog',
                //                 to: '/blog',
                //             },
                //             {
                //                 label: 'GitHub',
                //                 href: 'https://github.com/facebook/docusaurus',
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Howie's Blog, Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            // algolia: {
            //     // The application ID provided by Algolia
            //     appId: 'YOUR_APP_ID',
            //
            //     // Public API key: it is safe to commit it
            //     apiKey: 'YOUR_SEARCH_API_KEY',
            //
            //     indexName: 'YOUR_INDEX_NAME',
            //
            //     // Optional: see doc section below
            //     contextualSearch: true,
            //
            //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //     externalUrlRegex: 'external\\.com|domain\\.com',
            //
            //     // Optional: Algolia search parameters
            //     searchParameters: {},
            //
            //     // Optional: path for search page that enabled by default (`false` to disable it)
            //     searchPagePath: 'search',
            //
            //     //... other Algolia params
            // },
        }),
};

module.exports = config;
