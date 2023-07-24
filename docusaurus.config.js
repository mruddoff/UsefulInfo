// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Useful Info',
  tagline: 'Полезные команды и гайды.',
  favicon: 'img/favicon.ico',

  url: 'https://mruddoff.github.io',
  baseUrl: '/UsefulInfo',
  trailingSlash: false,

  organizationName: 'mruddoff',
  projectName: 'UsefulInfo',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mruddoff/UsefulInfo/tree/master',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/mruddoff/UsefulInfo/tree/master',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'UsefulInfo',
        logo: {
          alt: 'Useful Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'base',
            position: 'left',
            label: 'Основное',
          },
          {
            type: 'docSidebar',
            sidebarId: 'common',
            position: 'left',
            label: 'Общее',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'python',
            label: 'Python',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'windows',
            label: 'Windows',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'linux',
            label: 'Linux',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'discord',
            label: 'Discord',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: '1C',
            label: '1C',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mruddoff/UsefulInfo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Built with Docusaurus. Useful Info ${new Date().getFullYear()} • Права проекта под защитой.`,
      },
      prism: {
        additionalLanguages: ['powershell', 'java', 'python'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
