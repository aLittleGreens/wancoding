import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const beian = '粤ICP备2024296915号'
const config: Config = {
  title: 'wancoding',
  tagline: 'coding is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wancoding.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LittleGreens', // Usually your GitHub org/user name.
  projectName: 'wancoding', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //       indexPages: true,
  //       includeParentCategoriesInPageTitle: true,
  //     },
  //   ],
  // ],


  presets: [
    [
      'classic',
      {
        docs: {

          path: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aLittleGreens/wancoding/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aLittleGreens/wancoding/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],


  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,// 如果你希望侧边栏可以折叠，设置为 true
        autoCollapseCategories: true,// 设置为 false 以保持类别展开
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcementBar-2', // Increment on change
      content: `⭐️ 如果你喜欢这个网站，在 <a style="color: red" target="_blank" rel="noopener noreferrer" href="https://github.com/aLittleGreens/wancoding">GitHub</a> 上给它一颗 ⭐ `,
      isCloseable: true, // 是否可关闭
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'wancoding',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '职业素养',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'thought',
          label: '👨‍💻编程思想',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'basis',
          label: '🚀编程基础',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'language',
          label: '编程语言',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'android',
          label: 'Android',
        },
        { to: '/website', label: '🌐网站导航', position: 'left' },

        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/aLittleGreens',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aLittleGreens/',
            },
          ],
        }
      ],
      
      copyright: `
      <p margin-bottom: 0;>Copyright ©  ${new Date().getFullYear()} wancoding. | Built with Docusa˝urus.</p>
      <p style="margin-top: 0;">
      <a href="http://beian.miit.gov.cn/" style="color: white;text-decoration: none;">${beian}</a>
      </p>
      `
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
