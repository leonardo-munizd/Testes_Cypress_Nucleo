const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.agencianucleo.com.br/", // ou a URL do seu projeto
  },
});
