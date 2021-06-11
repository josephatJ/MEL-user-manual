/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "UDSM DHIS2 Quick Reference",
  tagline: "Welcome to UDSM DHIS2 Quick Reference",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "UDSM DHIS2 Quick Reference",
      logo: {
        alt: "UDSM DHIS2 LOGO",
        src: "img/udsm_logo_combined.png",
      },
      items: [
        {
          type: "doc",
          docId: "dhis2-custom-forms/custom-forms-css",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
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
              label: "DHIS2 Upgrade",
              href: "https://dhis.udsm-hmis.org/dhis2testupgrade",
            },
            {
              label: "iCare EMR",
              href: "https://icare.dhis2udsm.org/#/",
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
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UDSM DHIS2 Project.`,
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
