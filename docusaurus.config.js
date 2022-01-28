/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MEL User manual",
  tagline: "Welcome to MEL User manual",
  url: "https://josephatj.github.io",
  baseUrl: "/MEL-user-manual/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "josephatJ", // Usually your GitHub org/user name.
  projectName: "MEL-user-manual", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "MEL User manual",
      logo: {
        alt: "LOGO",
        src: "img/logo_lhrc.png",
      },
      items: [
        {
          type: "doc",
          docId: "introduction/introduction",
          position: "left",
          label: "Documentation",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Google drive",
              to: "https://drive.google.com/drive/folders/1UvHyQIUUDmz-DEFicB392l_fKCphFp8l",
            },
          ],
        },
        {
          title: "Testing and development instances",
          items: [
            {
              label: "MEL Production System",
              href: "http://mel.humanrights.or.tz:8090/mel",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MEL System`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
