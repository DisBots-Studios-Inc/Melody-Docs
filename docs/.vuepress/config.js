const sidebar = require('./sidebar');

module.exports = {
  title: "Melody Wiki",
  description: "The official wiki/docs for Melody Discord bot!",
  theme: "succinct",
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/DisBots-Studios-Inc/Melody-Docs' },
      { text: 'Suppport server', link: 'https://discord.gg/Fjrvtq4mZc' },
      { text: 'Javacord', link: 'https://javacord.org/' }
    ],
    sidebar,
    logo: "/Melody-Logo_Transparent.png",
  },
  globalUIComponents: [
    'ThemeManager'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": "../",
      },
    },
  },
};
