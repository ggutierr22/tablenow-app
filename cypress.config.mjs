import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "b880b9b7-91b9-4621-b815-c0bf74223276",
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
