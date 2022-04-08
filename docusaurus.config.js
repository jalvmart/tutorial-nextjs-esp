// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Next.JS de Vercel',
  tagline: 'El Kit de Desarrollo de Software más completo',
  url: 'https://nextjs.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Juan Alvaro Martinez', // Usually your GitHub org/user name.
  projectName: 'jalvmart', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jalvmart/tutorial-nextjs-esp/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/jalvmart/tutorial-nextjs-esp/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Code R11',
        logo: {
          alt: 'Proyecto Code R11',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jalvmart/tutorial-nextjs-esp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Aprende',
            items: [
              {
                label: 'Tutorial Next.JS en Español',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial oficial de Next.JS',
                href: 'https://nextjs.org/learn/foundations/about-nextjs',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Grupo de debates',
                href: 'https://github.com/vercel/next.js/discussions',
              },
              {
                label: 'Sitios creados con Next.JS',
                href: 'https://nextjs.org/showcase',
              },
              {
                label: 'Twitter @Vercel',
                href: 'https://twitter.com/vercel',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jalvmart/tutorial-nextjs-esp.git',
              }, 
              {
                label: 'Twitter @Code_r11',
                href: 'https://twitter.com/code_r11',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code R11, Construido con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
