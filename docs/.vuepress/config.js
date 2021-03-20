module.exports = {
  title: "Melody Wiki",
  description: "The official wiki/docs for Melody Discord bot!",
  theme: "yuu",
  themeConfig: {
    yuu: {
      labels: {
        darkTheme: "Enable dark theme", // Default is "Enable Dark Theme?"
        ignoreThemes: "Ignore other themes", // Default is "Ignore Other Themes?"
      },
    },
    logo: "../wiki/images/Melody-Logo+Transparent.png",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "../",
      },
    },
  },
};
