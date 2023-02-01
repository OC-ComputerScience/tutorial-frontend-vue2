const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      googleRefreshToken: process.env.VUE_APP_REFRESH_TOKEN,
      googleClientId: process.env.VUE_APP_CLIENT_ID,
      googleClientSecret: process.env.VUE_APP_CLIENT_SECRET,
      clientUrl: process.env.VUE_APP_CLIENT_URL,
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
