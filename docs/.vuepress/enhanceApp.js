import VueDiscordMessage from "vue-discord-message";

export default ({ Vue }) => {
  Vue.use(VueDiscordMessage, {
    avatars: {
      aktindo: require("../wiki/images/Aktindo-Logo+Transparent.png"),
      gameglide: require("../wiki/images/Game-Glide-Logo+Transparent.png"),
      melody: require("../wiki/images/Melody-Logo+Transparent.png"),
    },
    profiles: {
      aktindo: {
        author: "Aktindo",
        avatar: "aktindo",
      },
      gameglide: {
        author: "Game Glide",
        avatar: "gameglide",
      },
      bot: {
        author: "Melody",
        avatar: "melody",
        bot: true,
      },
    },
  });
};
